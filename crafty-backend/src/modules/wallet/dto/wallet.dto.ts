import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class DepositDTO {
  @IsNumber()
  @ApiProperty({ example: 1000, description: 'The amount to deposit' })
  amount: string
}

// export class WithdrawDTO {
//   @IsNumber()
//   @ApiProperty({ example: 1000, description: 'The amount to withdraw' })
//   amount: string
// }

export class TransferDTO {
  @IsNumber()
  @ApiProperty({ example: 1000, description: 'The amount to transfer' })
  amount: string

  @ApiProperty({
    example: 'john_doe',
    description: 'The username of the recipient',
  })
  recipient: string
}
