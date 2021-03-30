import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './update-product.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './files/images/products',
        filename: (req, file, cb) => {
          const fileNameSplit = file.originalname.split('.');
          const fileExt = fileNameSplit[fileNameSplit.length - 1];
          cb(null, `${Date.now()}.${fileExt}`);
        },
      }),
    }),
  )
  @ApiOperation({ summary: 'Post new Product' })
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() images,
  ) {
    const product = await this.productService.create(createProductDto, images);

    return product;
  }

  @Get('/all')
  @ApiOperation({ summary: 'Get All Product' })
  async findAll() {
    return this.productService.findAll();
  }

  @Get()
  @ApiQuery({ name: 'productId' })
  @ApiOperation({ summary: 'Get One Product By productId Query' })
  async findOne(@Query('productId') id) {
    return this.productService.findOne(id);
  }

  @Put()
  @ApiQuery({ name: 'productId' })
  @ApiOperation({ summary: 'Update one Product By productId Query' })
  async updateProduct(
    @Query('productId') id,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete()
  @ApiQuery({ name: 'productId' })
  @ApiOperation({ summary: 'Delete one Product By productId Query' })
  async deleteProduct(@Query('productId') id) {
    return this.productService.deleteOne(id);
  }

  // @Post('/file')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     {
  //       name: 'image',
  //       maxCount: 5,
  //     },
  //   ]),
  // )
  // async uploadFiles(@UploadedFiles() files) {
  //   return { files, message: 'File' };
  // }
}
