import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto, images: any) {
    const createdProduct = new this.productModel({
      ...createProductDto,
      images: [...images],
    });
    return createdProduct.save();
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  async findOne(productId: string) {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException("Couldn't find the product.");
    }

    return product;
  }

  async update(productId: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDto,
    );

    if (!product) {
      throw new NotFoundException("Couldn't find the product.");
    }

    return { message: 'Update product success.' };
  }

  async deleteOne(productId: string) {
    const product = await this.productModel
      .deleteOne({ _id: productId })
      .exec();

    if (!product) {
      throw new NotFoundException("Couldn't find the product.");
    }

    return { message: 'Delete product success.' };
  }
}
