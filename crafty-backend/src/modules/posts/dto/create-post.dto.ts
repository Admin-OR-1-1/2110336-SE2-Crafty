import { ApiProperty } from '@nestjs/swagger'
import { Post } from '@prisma/client'

export class CreatePostDto implements Partial<Post> {
  @ApiProperty({
    description: 'The title of the post',
    type: String,
    example: 'The title of the post',
  })
  title: string

  @ApiProperty({
    description: 'The detail of the post',
    type: String,
    example: 'The detail of the post',
  })
  detail: string

  @ApiProperty({
    description: 'The content of the post',
    type: String,
    example: 'The content of the post',
  })
  content: string

  @ApiProperty({
    description: 'The price of the post',
    type: Number,
    example: 100,
  })
  price: number
}
