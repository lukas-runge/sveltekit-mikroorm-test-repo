import { Entity, PrimaryKey, Property } from '@mikro-orm/sqlite';
import { v7 } from 'uuid';

@Entity()
export class Attribute {
	@PrimaryKey({ type: 'uuid' })
	id: string = v7();

	@Property()
	name!: string;

	constructor(name: string) {
		this.name = name;

		console.log('Part created:', this);
	}

	setName(name: string) {
		this.name = name;
	}

	get newName() {
		return this.name + ' 1';
	}
}
