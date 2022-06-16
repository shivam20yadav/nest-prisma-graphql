import { ObjectType,Field,ID  } from "@nestjs/graphql";
import { User } from "@prisma/client";

@ObjectType()
export class User_ {
    @Field(() => ID)
    readonly id?: string;
    @Field()
    readonly username: string;
    @Field()
    readonly email: string;
    @Field()
    readonly acess_token: string;
}