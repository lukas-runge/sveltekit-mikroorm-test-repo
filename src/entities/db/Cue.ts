import { Entity, JsonType, ManyToOne, PrimaryKey, Property } from "@mikro-orm/sqlite";
import { v7 } from 'uuid';
import type { Attribute } from "./Attribute";
import { Parameters } from "../runtime/Parameters";
import { Sequence } from "./Sequence";

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

  @ManyToOne(() => Sequence)
  sequence!: Sequence;

  @Property({ persist: false })
  get parameter() {
    return Parameters.find((parameter) => parameter.cueId === this.id);
  }

  constructor(name: string) {
    this.name = name;

    console.log('Cue created:', this);
  }
}