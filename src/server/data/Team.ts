import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';

import Hacker from './Hacker';

@ObjectType({ description: 'DTO for a Vaken Team' })
export class Team {
	@Field()
	public teamName!: string;

	@Field()
	public teamMembers!: [Hacker];

	@Field()
	public size: number = 0;
}

export default Team;

// Copyright (c) 2019 Vanderbilt University
