import 'reflect-metadata';
import { prop as Property, arrayProp as ArrayProperty, Typegoose, Ref } from 'typegoose';
import { Field, ObjectType, InputType } from 'type-graphql';
import { ObjectId } from 'mongodb';

import { User } from './User';
import Ethnicity from '../enums/Ethnicity';
import Race from '../enums/Race';
import Status from '../enums/Status';

@ObjectType({ description: 'DTO for a Vaken hacker' })
@InputType()
export class Hacker extends User {
	@Property({ ref: User, required: true })
	public user!: Ref<User>;

	@Field()
	@Property({ required: true })
	public status: Status = Status.Created;

	@Field({ nullable: true })
	@Property()
	public school?: string;

	@Field({ nullable: true })
	@Property()
	public gradYear?: string;

	@Field({ nullable: true })
	@Property()
	public ethnicity?: Ethnicity;

	@Field(() => [Race], { nullable: true })
	@ArrayProperty({ items: Race })
	public race?: Race[];

	@Field(() => [String], { nullable: true })
	@ArrayProperty({ items: String })
	public majors?: string[];

	@Field({ nullable: true })
	@Property()
	public adult?: boolean;

	@Field({ nullable: true })
	@Property()
	public firstHackathon?: boolean;

	@Field({ nullable: true })
	@Property()
	public volunteer?: boolean;

	@Field({ nullable: true })
	@Property()
	public github?: string;

	@Field({ nullable: true })
	@Property()
	public linkedin?: string;

	@Field({ nullable: true })
	@Property()
	public devpost?: string;

	@Field({ nullable: true })
	@Property()
	public website?: string;

	@Field(() => [String], { nullable: true })
	@ArrayProperty({ items: String })
	public essays?: string[];

	@Field({ nullable: true })
	@Property()
	public codeOfConduct?: boolean;

	@Field({ nullable: true })
	@Property()
	public needsReimbursement?: boolean;

	@Field({ nullable: true })
	@Property()
	public lightningTalk?: boolean;

	@Field({ nullable: true })
	@Property()
	public teamCode?: string;

	@Field({ nullable: true })
	@Property()
	public walkin?: boolean;

	@Field({ nullable: true })
	@Property()
	public teamName?: string;
}

export const HackerModel = new Hacker().getModelForClass(Hacker);

// Copyright (c) 2019 Vanderbilt University
