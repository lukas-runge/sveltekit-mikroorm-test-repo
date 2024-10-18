import { MikroORM, SqliteDriver } from '@mikro-orm/sqlite';
import { Cue } from './entities/db/Cue';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Attribute } from './entities/db/Attribute';
import { User } from './entities/db/User';

const orm = await MikroORM.init({
	entities: [ User, Cue, Attribute ] as const,
	metadataProvider: TsMorphMetadataProvider,
	driver: SqliteDriver,
	dbName: 'my-db-name.sqlite'
});

await orm.getSchemaGenerator().refreshDatabase();

const em = orm.em.fork();

em.create(User, { name: "Jürgen", email: "jürgen@jürgen.com" });

await em.flush();

await em.upsert(User, { email: "jürgen@jürgen.com", name: "Peter" });

const users = await em.findAll(User);

console.log(users);