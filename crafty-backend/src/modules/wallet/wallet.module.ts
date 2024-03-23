import { Module } from '@nestjs/common'
import { WalletsController } from './wallet.controller'
import { PaymentService } from './scb/payment.service'

@Module({
  controllers: [WalletsController],
  providers: [PaymentService],
  imports: [],
  exports: [],
})
export class WalletModule {}
