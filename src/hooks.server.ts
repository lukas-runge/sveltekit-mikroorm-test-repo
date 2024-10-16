import { MikroORM, serialize, SqliteDriver } from '@mikro-orm/sqlite';
import { Cue } from './entities/db/Cue';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Attribute } from './entities/db/Attribute';

const orm = await MikroORM.init({
	entities: [ Cue, Attribute ] as const,
	metadataProvider: TsMorphMetadataProvider,
	driver: SqliteDriver,
	dbName: 'my-db-name.sqlite'
});

await orm.getSchemaGenerator().refreshDatabase();
// await orm.getSchemaGenerator().createSchema();

const em = orm.em.fork();

console.log(orm.em); // access EntityManager via `em` property

const cue = em.create(Cue, {
	name: 'cue',
	data: []
});

cue.data = [{ instruction: { value: 'foo' }, attribute: new Attribute("attribute") }];
await em.persistAndFlush(cue);

const cueFetched = await em.findOne(Cue, { name: 'cue' });

if (!cueFetched) {
	throw new Error('Cue not found');
}

console.dir(serialize(cueFetched), { depth: null });