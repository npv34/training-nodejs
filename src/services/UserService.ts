import { AppDataSource } from "../models/DataSource";
import { User } from "../models/entites/User";
import { Role } from "../models/entites/Role";


export class UserService {
    private static userRepository = AppDataSource.getRepository(User);
    static async getAll() {
        return this.userRepository.find({
            relations: {
                role: true
            }
        });
    }

    static async getAllRoles() {
        const roleRepository = AppDataSource.getRepository(Role);
        return roleRepository.find();
    }

    static async createNewUser(user: any) {
        let newUser = new User();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.phone = user.phone;
        newUser.role = user.role;
        await this.userRepository.save(newUser);
    }

    static async deleteById(id: number) {
        const userDelete = await this.userRepository.findOneBy({ id: id })
        if (!userDelete) {
            throw new Error("User not found")
        }
        await this.userRepository.delete(id);
    }
}