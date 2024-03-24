import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateProductDto } from './create-product.dto'

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    description: 'Increment "step" by 1',
    type: Number,
    example: true,
  })
  incrementStep?: boolean
}
