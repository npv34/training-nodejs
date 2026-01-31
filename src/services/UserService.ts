import { AppDataSource } from "../models/DataSource";
import { User } from "../models/entites/User";
import { Request, Response } from "express";

export class UserService {
    private static userRepository = AppDataSource.getRepository(User);
    static async getAll() {
        return this.userRepository.find({
            relations: {
                role: true
            }
        });
    }

    static async deleteById(request: Request) {
        const {id} = request.params;
        const userDelete = this.userRepository.findOneBy({id: Number(id)})
        if(!userDelete) {
            throw new Error("User not found")
        }
        await this.userRepository.delete(id); 
    }
}