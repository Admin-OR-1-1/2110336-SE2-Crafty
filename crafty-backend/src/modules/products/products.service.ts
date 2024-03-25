import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({
      data: createProductDto,
    })
  }

  async findAll() {
    return await this.prisma.product.findMany()
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`)
    }
    return product
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.findOne(id)
      if (updateProductDto.incrementStep && product.step < 6) {
        await this.prisma.product.update({
          where: { id },
          data: {
            step: {
              increment: 1,
            },
          },
        })
      }
      return product
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`Product with ID ${id} not found`)
    }
  }

  async remove(id: string) {
    return await this.prisma.product.delete({
      where: { id },
    })
  }
}
