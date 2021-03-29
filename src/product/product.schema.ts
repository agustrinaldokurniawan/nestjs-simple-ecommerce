import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop({ type: Date, required: true, default: Date.now() })
  time: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
