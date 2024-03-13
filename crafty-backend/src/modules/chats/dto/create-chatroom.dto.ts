import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID } from 'class-validator'

export class CreateChatroomDto {
  @ApiProperty({
    example: 'cltoe9rzk0001d6m01uey643v',
    description: 'id of user1 in this chatroom.',
  })
  @IsUUID()
  @IsNotEmpty()
  user1Id: string

  @ApiProperty({
    example: 'cltoe9rzk0001d6m01uey643v',
    description: 'id of user2 in this chatroom.',
  })
  @IsUUID()
  @IsNotEmpty()
  user2Id: string

  @ApiProperty({
    example: 'product001',
    description: 'id of product from this chatroom.',
  })
  productId: string
}
