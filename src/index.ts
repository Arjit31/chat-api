import express from "express";
import WebSocket, { WebSocketServer } from "ws";

const app = express();

app.get('/', function(req, res){
    res.json("hello, ji")
})
const server = app.listen(3000, () => {
    console.log("Your app is running on port 3000!")
});

const wss = new WebSocketServer({server});

wss.on('connection', function connection(socket) {
  socket.on('error', console.error);
  socket.on('message', function message(data) {
      // make sure to send data in json format not as a js object i.e. key should also be in double quotes
      const finalData = JSON.parse(data.toString());
      const num = Math.floor(Math.random()*5) + 1;
      console.log(num)
      finalData.data.sno = Number(finalData.data.sno) - num;
      console.log('received: ', finalData);
      const sentData = JSON.stringify(finalData);
      wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
              client.send(sentData);
      }
    });
  });

  socket.send('something');
});