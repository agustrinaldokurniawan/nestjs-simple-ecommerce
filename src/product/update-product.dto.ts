import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({ example: 'update name', description: 'new name of product' })
  readonly name: string;

  @ApiProperty({
    example: 'update description',
    description: 'new description of product',
  })
  readonly description: string;

  @ApiProperty({ example: 2000, description: 'new price of product' })
  readonly price: number;

  @ApiProperty({ example: 2000, description: 'new stock of product' })
  readonly stock: number;
}
