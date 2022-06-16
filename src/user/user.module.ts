import { Module } from '@nestjs/common';
import { DBService } from 'src/Db/db.service';
import { UserController } from './user.controller';
import { userService } from './user.service';
import { UserResolver } from './user/user.resolver';

@Module({
    imports: [UserModule],
    controllers: [UserController],
    providers: [userService,DBService,UserResolver]
})
export class UserModule {}
