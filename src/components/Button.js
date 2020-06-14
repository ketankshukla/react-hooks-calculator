import styled from 'styled-components'

const Button = styled.div`
	border: 0.1px solid red;
	cursor: pointer;
	flex-grow: 1;

	display: grid;
	place-items: center;

	height: 60px;

	background: ${(props) => (props.operator ? '#c41745' : '#fdfdfd')};
	color: ${(props) => (props.operator ? 'white' : 'black')};

	&:hover {
		background: ${(props) => (props.operator ? '#b51540' : '#f5f5f5')};
	}

	&:active {
		background: ${(props) => (props.operator ? '#a6133a' : '#ececec')};
	}
`
export default Button