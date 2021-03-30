import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: `Micheal`,
    description: 'first name of new user',
  })
  readonly firstName: string;

  @ApiProperty({
    example: `Jordan`,
    description: 'last name of new user',
  })
  readonly lastName: string;
  //   @ApiProperty({
  //     example: `https://url-image`,
  //     description: 'ava image of new user',
  //   })
  //   readonly ava: string;
}
