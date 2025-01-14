import React, { FunctionComponent, useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import FloatingPopup from '../../components/Containers/FloatingPopup';
import JoinTeam from './JoinTeam';
import ViewTeam from './ViewTeam';
import { FlexColumn } from '../../components/Containers/FlexContainers';
import Announcment from '../../components/Text/Announcment';
import STRINGS from '../../assets/strings.json';
import { GraphQLErrorMessage } from '../../components/Text/ErrorMessage';
import Spinner from '../../components/Loading/Spinner';
import { AuthContext } from '../../contexts/AuthContext';

export const GET_TEAM = gql`
	query HackerTeam($email: String!) {
		hacker(email: $email) {
			teamName
		}
	}
`;

export const Team: FunctionComponent = (): JSX.Element => {
	const user = useContext(AuthContext);
	const { email } = user;
	const { loading, error, data } = useQuery(GET_TEAM, {
		variables: { email },
	});

	if (loading) {
		return <Spinner />;
	}
	if (error) {
		return <GraphQLErrorMessage text={STRINGS.GRAPHQL_HACKER_ERROR_MESSAGE} />;
	}

	// console.log(data);
	const { teamName } = data.hacker;
	return (
		<FlexColumn>
			<Announcment value={STRINGS.HACKER_TEAMS_ANNOUNCMENT_TEXT} />
			<FloatingPopup borderRadius="1rem" width="35rem" backgroundOpacity="1" padding="1.5rem">
				{teamName == null || teamName === '' ? <JoinTeam /> : <ViewTeam teamName={teamName} />}
			</FloatingPopup>
		</FlexColumn>
	);
};

export default Team;
// Copyright (c) 2019 Vanderbilt University
