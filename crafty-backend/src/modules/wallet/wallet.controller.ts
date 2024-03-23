import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AuthGuard } from '../auth/guard/auth.guard'
import { PaymentService } from './scb/payment.service'

@ApiTags('wallets')
@Controller('wallets')
// @UseGuards(AuthGuard)
// @Roles('ADMIN')
// @ApiBearerAuth()
export class WalletsController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  @ApiOkResponse({ type: String })
  async GetQRCode() {
    const { qrImage } = await this.paymentService.generateQR(1000)
    return qrImage
  }
}
