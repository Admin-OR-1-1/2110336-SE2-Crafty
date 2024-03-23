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

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`
  }

  async remove(id: number) {
    return `This action removes a #${id} product`
  }
}
