import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User_ } from '../dto/user.dto';
import { DBService } from "../../Db/db.service";
import { userService } from '../user.service';

@Resolver()
export class UserResolver {
    constructor (private prisma:DBService, private readonly userServices:userService) { }
    @Query(() => [User_])
    async getUsers(): Promise<User_[]> {
        return this.userServices.getUsers();
    }
    @Query(() => [User_])   
    async getUser(@Args('id', { type:() => String }) id: any): Promise<User_[]> {
        return this.userServices.getuser(id);
    }
    @Mutation(() => User_)
    async createUser(@Args('username', { type:() => String }) username: any,
        @Args('email', { type:() => String }) email: any,
        @Args('acess_token', { type:() => String }) acess_token: any): Promise<User_|null> {
        const user = {
            id: 'asdasdas',
            username: username,
            email: email,
            acess_token: acess_token
        }
        return this.userServices.createUser(user);
        //return this.prisma.user.create({ data: user });
    }
    @Mutation(() => User_)
    async updateUser(@Args('id', { type:() => String }) id: any,@Args('username', { type:() => String }) username: any,
    @Args('acess_token', { type:() => String }) acess_token: any,@Args('email', { type:() => String }) email: any
    ): Promise<User_|null> 
    {
        return this.userServices.updateUser(id,{id,username,acess_token,email});
    }
    @Mutation(() => User_)
    async deleteUser(@Args('id', { type:() => String }) id: any): Promise<User_|null> {
        return this.userServices.deleteUser(id);
    }
}
