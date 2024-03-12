import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateMessageDto } from './dto/create-message.dto'
import { CreateChatroomDto } from './dto/create-chatroom.dto'
import { MessageEntity } from './entities/message.entity'
import { ChatroomEntity } from './entities/chatroom.entity'

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findAllChatrooms() {
    return 'Find All Chatrooms!'
    return this.prisma.chatroom.findMany()
  }

  async findAllMessages(chatRoomId: string) {
    return 'Find All Messages!'
    return this.prisma.message.findMany({
      where: {
        chatRoomId,
      },
    })
  }

  async createMessage(
    createMessageDto: CreateMessageDto,
  ): Promise<MessageEntity> {
    return null
    return this.prisma.message.create({
      data: createMessageDto,
    })
  }

  async createChatroom(
    createChatroomDto: CreateChatroomDto,
  ): Promise<ChatroomEntity> {
    return null
    return this.prisma.chatroom.create({
      data: createChatroomDto,
    })
  }

  //temp
  async testGetUser(user: string) {
    console.log('user from GetUser():', user)
  }
}
