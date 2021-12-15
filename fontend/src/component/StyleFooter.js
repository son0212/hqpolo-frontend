import styled from 'styled-components';

export const Box = styled.div`
	padding: 80px 60px;
	background-color: #0f3157;
	width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	    max-width: 1000px;
    margin-top: 20px;
    margin-left: 125px;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill,
		minmax(185px, 1fr));
	grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
	minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 15px;
	font-size: 18px;
	text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.h3`
	font-size: 1.2em;
	color: #fff;
	margin-bottom: 30px;
	margin-top: 15px;
	font-weight: bold;
`;
