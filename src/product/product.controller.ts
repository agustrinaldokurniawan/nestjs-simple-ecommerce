import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { UpdateProductDto } from './update-product.dto';
import {
  ApiBody,
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Post new Product' })
  async createProduct(@Body() createProductDto: CreateProductDto) {
    await this.productService.create(createProductDto);

    return { message: 'Create product success.' };
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
}
