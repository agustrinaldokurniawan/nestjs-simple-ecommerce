import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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

  @ApiProperty({
    example: `email@email.com`,
    description: 'email of new user',
  })
  readonly email: string;

  @ApiProperty({
    example: `password`,
    description: 'password of new user',
  })
  readonly password: string;

  @ApiProperty({
    example: `+6289612345670`,
    description: 'phone number of new user',
  })
  readonly phoneNumber: string;

  @ApiProperty({
    example: `1617072755786`,
    description: 'birth date of new user',
  })
  readonly birthDate: string;

  //   @ApiProperty({
  //     example: `https://url-image`,
  //     description: 'ava image of new user',
  //   })
  //   readonly ava: string;
}
