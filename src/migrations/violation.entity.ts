import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("violation")
class Violation {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "float"})
    speedKmH!: number;

    @CreateDateColumn({type: "datetime"})
    createdAt!: Date;
}

export { Violation };