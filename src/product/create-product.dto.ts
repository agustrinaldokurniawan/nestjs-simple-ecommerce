import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: `${Date.now()} product`,
    description: 'name of new product',
  })
  readonly name: string;

  @ApiProperty({
    example: `[imageOne, imagetwo]`,
    description: 'images of new product',
    isArray: true,
  })
  readonly images: [];

  @ApiProperty({
    example: `description product`,
    description: 'description of new product',
  })
  readonly description: string;

  @ApiProperty({ example: 1000, description: 'price uri of new product' })
  readonly price: number;

  @ApiProperty({ example: 100, description: 'stock uri of new product' })
  readonly stock: number;
}
