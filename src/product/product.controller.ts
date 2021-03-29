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

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    await this.productService.create(createProductDto);

    return { message: 'Create product success.' };
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get()
  async findOne(@Query('productId') id) {
    return this.productService.findOne(id);
  }

  @Put()
  async updateProduct(
    @Query('productId') id,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete()
  async deleteProduct(@Query('productId') id) {
    return this.productService.deleteOne(id);
  }
}
