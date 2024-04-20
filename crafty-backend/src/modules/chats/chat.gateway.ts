import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins (for testing)
  },
  path: '/api/v2/chats', // Specify the path for WebSocket connections
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  handleConnection(@ConnectedSocket() client: Socket): void {
    console.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(@ConnectedSocket() client: Socket): void {
    console.log(`Client disconnected: ${client.id}`)
  }

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() data: any): void {
    console.log('message!')
    this.server.emit('receiveMessage', data)
  }
}
