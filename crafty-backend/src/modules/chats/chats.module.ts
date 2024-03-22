import { Module } from '@nestjs/common'
import { ChatsService } from './chats.service'
import { ChatsController } from './chats.controller'
import { PrismaModule } from '../../prisma/prisma.module'
import { ChatGateway } from './chats.gateway'

@Module({
  imports: [PrismaModule],
  providers: [ChatsService, ChatGateway],
  controllers: [ChatsController],
})
export class ChatsModule {}
