import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@prisma/client";
import { DBService } from "../Db/db.service";


@Injectable()
export class userService {
    constructor(private readonly db: DBService) {}

    async getUsers(): Promise<User[] | null> {
        return this.db.user.findMany();
    }
    async getuser(id:string):Promise<User[] | null>{
        return this.db.user.findMany({where:{id}});
    }
    async createUser(user: User): Promise<User | null> {
        return this.db.user.create({ data: user });
    }
}