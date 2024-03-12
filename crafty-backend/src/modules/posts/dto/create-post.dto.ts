import { ApiProperty } from '@nestjs/swagger'
import { Post } from '@prisma/client'

export class CreatePostDto implements Omit<Omit<Post, 'id'>, 'priority'> {
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

  @ApiProperty({
    description: 'the photo url of the post',
    type: String,
    example: 'https://picsum.photos/200/300',
  })
  photoUrl: string
}
