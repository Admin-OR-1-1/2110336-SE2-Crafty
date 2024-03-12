import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ChatsService } from './chats.service'
import { CreateMessageDto } from './dto/create-message.dto'
import { CreateChatroomDto } from './dto/create-chatroom.dto'
import { AuthGuard } from '../auth/guard/auth.guard'
import { MessageEntity } from './entities/message.entity'
import { ChatroomEntity } from './entities/chatroom.entity'
import { GetUser } from '../users/get-user.decorator'
import { stringify } from 'querystring'

@ApiTags('chats')
@Controller('chats')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('test')
  async testGetUser(@GetUser() user: string) {
    return this.chatsService.testGetUser(user)
  }

  @Get()
  @ApiOkResponse({ type: ChatroomEntity, isArray: true })
  async findAllChatRooms() {
    console.log('find all!')

    // Assuming the method 'findAllChatRooms' exists and returns all chat room IDs the caller is part of.
    return this.chatsService.findAllChatrooms()
  }

  @Get(':chatRoomId')
  @ApiOkResponse({ type: MessageEntity, isArray: true })
  async findAllMessages(@Param('chatRoomId') chatRoomId: string) {
    // Assuming the method 'findAllMessages' checks if the caller is part of the chat room and returns all messages if true.
    return this.chatsService.findAllMessages(chatRoomId)
  }

  @Post('message')
  @ApiOkResponse({ type: MessageEntity })
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return new MessageEntity(
      await this.chatsService.createMessage(createMessageDto),
    )
  }

  @Post('room')
  @ApiOkResponse({ type: ChatroomEntity })
  async createChatRoom(@Body() createChatroomDto: CreateChatroomDto) {
    return new ChatroomEntity(
      await this.chatsService.createChatroom(createChatroomDto),
    )
  }
}
