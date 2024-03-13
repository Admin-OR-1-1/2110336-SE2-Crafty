import { ApiProperty } from '@nestjs/swagger'
import { Product } from '@prisma/client'

export class CreateProductDto implements Partial<Product> {
  @ApiProperty({
    description: 'The title of the product',
    type: String,
    example: 'The title of the product',
  })
  title: string

  @ApiProperty({
    description: 'The description of the product',
    type: String,
    example: 'The description of the product',
  })
  desc: string

  @ApiProperty({
    description: 'The price of the product',
    type: Number,
    example: 100,
  })
  price: number

  @ApiProperty({
    description: 'The deadline of the product',
    type: Date,
    example: 'The deadline of the product',
  })
  deadline: string

  @ApiProperty({
    description: 'The status of the product',
    type: String,
    example: 'The status of the product',
  })
  status: string

  @ApiProperty({
    description: 'The note of the product',
    type: String,
    example: 'The note of the product',
  })
  note: string

  @ApiProperty({
    description: 'chatroom001',
    type: String,
    example: 'The chatRoomId of the product',
  })
  chatroomId: string
}
