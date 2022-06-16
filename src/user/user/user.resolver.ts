import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User_ } from '../dto/user.dto';
import { DBService } from "../../Db/db.service";


@Resolver()
export class UserResolver {
    constructor (private prisma:DBService) { }
    @Query(() => [User_])
    async getUsers(): Promise<User_[]> {
        return this.prisma.user.findMany();
    }
    @Query(() => [User_])   
    async getUser(@Args('id', { type:() => String }) id: any): Promise<User_[]> {
        return this.prisma.user.findMany({where:{id}});
    }
    @Mutation(() => User_)
    async createUser(@Args('username', { type:() => String }) username: any,
        @Args('email', { type:() => String }) email: any,
        @Args('acess_token', { type:() => String }) acess_token: any): Promise<User_|null> {
        const user = {
            username: username,
            email: email,
            acess_token: acess_token
        }
        return this.prisma.user.create({ data: user });
    }
}
