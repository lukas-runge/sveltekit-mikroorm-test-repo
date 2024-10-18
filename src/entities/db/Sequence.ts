import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/sqlite";
import { v7 } from "uuid";
import { Cue } from "./Cue";

@Entity()
export class Sequence {
	@PrimaryKey({ type: 'uuid' })
	id: string = v7();

	@Property()
	name: string;

    @Property()
    test: string;

    @OneToMany(() => Cue, cue => cue.sequence)
    cues = new Collection<Cue>(this);

	constructor(name: string, test: string) {
		this.name = name;
        this.test = test;

		console.log('Part created:', this);
	}

	setName(name: string) {
		this.name = name;
	}
}
