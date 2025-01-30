import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import cors from 'cors';
//import { WebSocketServer } from 'ws';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);

    // const wss = new WebSocketServer({ server });
    //   wss.on('connection', ws => {
    //     ws.on('message', message => {
    //       console.log(`Received message => ${message}`);
    //       wss.clients.forEach(function each(client) {
    //         if (client.readyState === WebSocket.OPEN) {
    //             client.send(`${message}`);
    //         }
    //     });
    //   });
    // });
    });
  })
  .catch(error => console.error('Error starting server:', error));



