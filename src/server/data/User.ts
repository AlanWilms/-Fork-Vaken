import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';
import { pre, prop, arrayProp, Typegoose } from 'typegoose';

import bcrypt from 'bcrypt';
import AuthType from '../enums/AuthType';
import AuthLevel from '../enums/AuthLevel';
import Gender from '../enums/Gender';
import ShirtSize from '../enums/ShirtSize';
import DietaryRestrictions from '../enums/DietaryRestrictions';

const saltRounds = 10;

@pre<User>('save', function(next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(saltRounds, (err, salt) => {
		if (err) {
			return next();
		}
		// eslint-disable-next-line no-shadow
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next();
			}

			user.password = hash;
			next();
		});
	});
})
@ObjectType({ description: 'DTO for a generic Vaken user' })
export class User extends Typegoose {
	@Field()
	@prop({ required: true })
	public email!: string;

	@Field(() => [String])
	@arrayProp({ items: String })
	public nfcCodes?: string[];

	@Field()
	@prop({ required: true })
	public password: string = '';

	@Field(() => String, { nullable: true })
	@prop()
	public firstName?: string;

	@Field(() => String, { nullable: true })
	@prop()
	public lastName?: string;

	@Field({ nullable: true })
	@prop({ sparse: true, unique: true })
	public googleId?: string;

	@Field({ nullable: true })
	@prop({ sparse: true, unique: true })
	public githubId?: string;

	@Field()
	@prop({ required: true })
	public authType!: AuthType;

	@Field()
	@prop({ required: true })
	public authLevel!: AuthLevel;

	@Field({ nullable: true })
	@prop()
	public phoneNumber?: string;

	@Field({ nullable: true })
	@prop()
	public gender?: Gender;

	@Field({ nullable: true })
	@prop()
	public shirtSize?: ShirtSize;

	@Field(() => [DietaryRestrictions], { nullable: true })
	@arrayProp({ items: String })
	public dietaryRestrictions?: [DietaryRestrictions];
}

export const UserModel = new User().getModelForClass(User);

// Copyright (c) 2019 Vanderbilt University
