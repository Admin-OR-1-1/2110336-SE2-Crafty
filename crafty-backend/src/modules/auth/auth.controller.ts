import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  Param,
  Req,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UserEntity } from '../users/entities/user.entity'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AuthDto, FirebaseRegisterUserDto } from './dto/auth.dto'
import { AuthEntity } from './entity/auth.entity'
import { AuthGuard } from './guard/auth.guard'
import { Roles } from './guard/roles.decorator'

import { initializeApp } from 'firebase-admin/app'
import { FirebaseTokenDto } from './dto/firebase-token.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('firebase-register')
  @ApiCreatedResponse({ type: UserEntity })
  async firebaseRegister(
    @Body() firebaseRegisterUserDto: FirebaseRegisterUserDto,
  ) {
    return new UserEntity(
      await this.authService.fireBaseRegister(firebaseRegisterUserDto),
    )
  }

  @Post('login')
  @ApiCreatedResponse({ type: AuthEntity })
  async login(@Body() loginDto: AuthDto) {
    return new AuthEntity(await this.authService.login(loginDto))
  }

  @Post('get-user-from-token')
  @ApiCreatedResponse({ type: AuthEntity })
  async loginByToken(@Body() firebaseTokenDto: FirebaseTokenDto) {
    return new AuthEntity(
      await this.authService.loginByToken(firebaseTokenDto.token),
    )
  }

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async me(@Request() req) {
    return new UserEntity(req.user)
  }
}
