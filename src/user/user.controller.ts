import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import { userService } from "./user.service";


@Controller()
export class UserController {
    constructor(private readonly userService: userService) {}
    
    @Get('/get')
    async getbooks(): Promise<User[] | null> {
        return this.userService.getUsers();
    }
    @Post('/user')
    async createUser(@Body() user: User): Promise<User | null> {
        return this.userService.createUser(user);
    }
}