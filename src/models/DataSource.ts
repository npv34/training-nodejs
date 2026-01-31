import { DataSource } from "typeorm"
import { User } from "./entites/User"
import { Role } from "./entites/Role"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456@Abc",
    database: "testdb",
    synchronize: false,
    entities: [User, Role]
})

