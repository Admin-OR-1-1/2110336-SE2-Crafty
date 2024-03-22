import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class GenerateQRDTO {
  @ApiProperty({
    example: '1000',
    description: 'The amount to generate the QR code for',
  })
  amount: string
}
