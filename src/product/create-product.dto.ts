import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: `${Date.now()} product`,
    description: 'name of new product',
  })
  readonly name: string;

  @ApiProperty({
    example: `image uri product`,
    description: 'image uri of new product',
  })
  readonly image: string;

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
