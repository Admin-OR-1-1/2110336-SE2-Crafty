import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async addReview(postId: string, desc: string, rate: number, sender: string) {
    return await this.prisma.review.create({
      data: {
        desc,
        rate,
        sender,
        postId,
      },
    })
  }

  async getReviews(postId: string) {
    return await this.prisma.review.findMany({
      where: {
        postId: postId,
      },
    })
  }

  async addFavorite(userId: string, postId: string){
    return await this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        userFavorite: {
          connect: {
            id: userId,
          },
        },
      },
    })
  }
  
  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({
      data: createPostDto,
    })
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        reviews: true,
        userFavorite: true,
      },
    })
  }

  async findOne(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
    })
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.post.delete({
      where: { id },
    })
  }
}
