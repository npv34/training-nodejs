import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Role } from "./Role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column({
        unique: true,
        nullable: false,
    })
    email: string;
    @Column({
        unique: true,
        nullable: false
    })
    phone: string;
    @Column()
    password: string;
    @Column({
        default: false
    })
    isActive: boolean;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role
}