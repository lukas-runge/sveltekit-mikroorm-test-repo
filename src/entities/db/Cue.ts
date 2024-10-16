import { Entity, JsonType, PrimaryKey, Property } from "@mikro-orm/sqlite";
import { v7 } from 'uuid';
import type { Attribute } from "./Attribute";

export interface CueContent {
  attribute: Attribute;
	instruction: InstructionProperties;
}

export interface InstructionProperties {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: any;
	fade?: number;
	delay?: number;
}

@Entity()
export class Cue {

  @PrimaryKey({ type: 'uuid' })
  id: string = v7();

  @Property()
  name!: string;

  @Property({ type: JsonType })
  data: CueContent[] = [];

  constructor(name: string) {
    this.name = name;

    console.log('Cue created:', this);
  }
}