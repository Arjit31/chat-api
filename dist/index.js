"use strict";
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
const ws_1 = require("ws");
const cors_1 = __importDefault(require("cors"));
const root_1 = require("./routes/root");
const root_2 = require("./handlers/root");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const wss = new ws_1.WebSocketServer({ server });
app.use("/api/v1", root_1.rootRouter);
const mapId = new Map();
const objId = { map: mapId };
wss.on("connection", function connection(socket) {
    // authenticate user on connection
    socket.on("error", console.error);
    socket.on("message", function message(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, root_2.rootHandler)(wss, socket, objId, data);
        });
    });
    socket.send(`{"text": "something"}`);
});
server.listen(3000, () => {
    console.log("Your app is running on port 3000!");
});
