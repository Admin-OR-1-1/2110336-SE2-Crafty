import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './modules/auth/common/jwt-const'
import { PostsModule } from './modules/posts/posts.module'
import { ProductsModule } from './modules/products/products.module'
import { ChatsModule } from './modules/chats/chats.module'
import { FirebaseModule } from 'src/firebase/firebase.module'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    UsersModule,
    AuthModule,
    PostsModule,
    ProductsModule,
    ChatsModule,
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
