import { ApiProperty } from '@nestjs/swagger'
import { Chatroom } from '@prisma/client'

export class ChatroomEntity implements Partial<Chatroom> {
  @ApiProperty({
    example: '1',
    description: 'The unique identifier of the chat room.',
  })
  id: string

  @ApiProperty({
    example: 'cltoe9rzk0001d6m01uey643v',
    description: 'The unique identifier of the first user in the chat room.',
  })
  user1Id: string

  @ApiProperty({
    example: 'cltoe9rzk0001d6m01uey643v',
    description: 'The unique identifier of the second user in the chat room.',
  })
  user2Id: string

  constructor(partial: Partial<ChatroomEntity>) {
    const allowedKeys = ['id', 'user1Id', 'user2Id']
    const chatRoomEntity = Object.keys(partial)
      .filter((key) => allowedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = partial[key]
        return obj
      }, {})
    Object.assign(this, chatRoomEntity)
  }
}
