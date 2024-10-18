import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { v7 } from "uuid";

@Entity()
export class User {
    @PrimaryKey({ type: 'uuid' })
	id: string = v7();

    @Property()
    name: string;

    @Property()
    @Unique()
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}