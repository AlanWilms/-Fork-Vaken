import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	color?: string;
	fontFamily?: string;
	fontSize?: string;
	fontWeight?: number;
	textDecoration?: string;
	glowColor?: string;
}

const TextLink = styled(Link)`
	font-family: ${(props: Props) => props.fontFamily || "'Roboto Condensed'"};
	font-size: ${(props: Props) => props.fontSize || '1rem'};
	font-weight: ${(props: Props) => props.fontWeight || 500};
	color: ${(props: Props) => props.color || 'black'};
	text-decoration: ${(props: Props) => props.textDecoration || 'none'};
	&:hover,
	&:focus,
	&:active {
		text-shadow: 0px 0px 20px ${({ glowColor }: Props) => glowColor || 'RGBA(255, 255, 255, 0.67)'};
	}
`;

export default TextLink;

// Copyright (c) 2019 Vanderbilt University
