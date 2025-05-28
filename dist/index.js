"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = __importStar(require("ws"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const root_1 = require("./routes/root");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient();
app.use("/api/v1", root_1.rootRouter);
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json("hello");
    });
});
app.get("/fetch-broadcast", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = req.query.type;
        const id = req.query.userId;
        const lastNo = Number(req.query.lastNo);
        if (!type || isNaN(lastNo) || !id) {
            res.status(400).json({ error: "Invalid type, lastNo, or userId" });
            return;
        }
        try {
            const messages = yield prisma.broadcastMessage.findMany({
                where: {
                    serialNo: {
                        gt: lastNo,
                    },
                    type: type,
                },
                include: {
                    user: true,
                },
            });
            const response = messages.map((msg) => {
                const base = {
                    id: msg.id,
                    serialNo: msg.serialNo,
                    orderNo: msg.userId !== id ? msg.serialNo - msg.randomNo : msg.serialNo,
                    text: msg.text,
                    type: msg.type,
                    createdAt: msg.createdAt,
                    isSent: msg.userId === id,
                };
                if (msg.type === "Reveal") {
                    return Object.assign(Object.assign({}, base), { username: msg.user.name || "Unknown" });
                }
                else {
                    return base;
                }
            });
            res.json(response);
        }
        catch (err) {
            console.error("Error fetching messages:", err);
            res.status(500).json({ error: "Internal server error" });
        }
    });
});
app.post("/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const user = yield prisma.user.create({
                data: data,
            });
            res.json(user);
        }
        catch (error) {
            res.json(error);
        }
    });
});
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", function connection(socket) {
    // authenticate user on connection
    socket.on("error", console.error);
    socket.on("message", function message(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // make sure to send data in json format not as a js object i.e. key should also be in double quotes
            const received = JSON.parse(data.toString());
            const num = Math.floor(Math.random() * 5) + 1;
            console.log(num);
            const broadcast = {
                randomNo: num,
                type: received.type,
                text: received.text,
                userId: received.userId,
            };
            try {
                const message = yield prisma.broadcastMessage.create({
                    data: broadcast,
                    include: {
                        user: true,
                    },
                });
                console.log("received: ", message);
                const commonMessage = {
                    id: message.id,
                    serialNo: message.serialNo,
                    orderNo: message.serialNo - message.randomNo,
                    text: message.text,
                    type: message.type,
                    createdAt: message.createdAt,
                    isSent: false,
                    success: true,
                    username: message.user.name,
                };
                wss.clients.forEach(function each(client) {
                    if (client.readyState === ws_1.default.OPEN) {
                        if (client === socket) {
                            const userMessage = commonMessage;
                            userMessage.isSent = true;
                            userMessage.username = "";
                            userMessage.orderNo += message.randomNo;
                            const sentData = JSON.stringify(commonMessage);
                            client.send(sentData);
                        }
                        else {
                            const sentData = JSON.stringify(commonMessage);
                            client.send(sentData);
                        }
                    }
                });
            }
            catch (error) {
                wss.clients.forEach(function (client) {
                    if (client === socket) {
                        client.send(`{ "success": false, "Error": "` + error + `"}`);
                    }
                });
            }
        });
    });
    socket.send(`{"text": "something"}`);
});
// server.on('upgrade', function upgrade(request, socket, head) {
//   socket.on('error', console.error);
//   // This function is not defined on purpose. Implement it with your own logic.
//   authenticate(request, function next(err, client) {
//     if (err || !client) {
//       socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
//       socket.destroy();
//       return;
//     }
//     socket.removeListener('error', onSocketError);
//     wss.handleUpgrade(request, socket, head, function done(ws) {
//       wss.emit('connection', ws, request, client);
//     });
//   });
// });
server.listen(3000, () => {
    console.log("Your app is running on port 3000!");
});
