import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ProductModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
