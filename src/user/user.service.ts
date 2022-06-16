import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
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
    async updateUser(id:string,user: User): Promise<User | null> {
        return this.db.user.update({
            where: { id },
            data: user
            });
        }
    async deleteUser(id:string): Promise<User | null> {
        return this.db.user.delete({ where: { id } });
    }
}