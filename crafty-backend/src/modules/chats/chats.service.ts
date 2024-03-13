import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateMessageDto } from './dto/create-message.dto'
import { CreateChatroomDto } from './dto/create-chatroom.dto'
import { MessageEntity } from './entities/message.entity'
import { ChatroomEntity } from './entities/chatroom.entity'
import { User } from '@prisma/client'

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findAllChatroomsForUser(user: User) {
    return await this.prisma.chatroom.findMany({
      where: {
        OR: [
          {
            crafterId: user.id,
          },
          {
            crafteeId: user.id,
          },
        ],
      },
      select: {
        id: true,
        lastChatTime: true,
        isCrafterRead: true,
        isCrafteeRead: true,
      },
    })
  }

  //temp
  async testGetUser(user: string) {
    console.log('user from GetUser():', user)
  }
}
