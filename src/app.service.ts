import { MikroORM } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	constructor(public readonly orm: MikroORM, public readonly em: EntityManager) {}
	getHello(): string {
		return 'Welcome to voidchan!';
	}
}
