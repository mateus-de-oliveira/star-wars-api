import styled from "styled-components";



export const Container = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 1080px) {
		max-width: 60%;
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 720px) {
		max-width: 85%;
		grid-template-columns: repeat(1, 1fr);
	}

	div {
		border: 1px solid var(--yellow);
		border-radius: 0.25rem;
	}

	div ul {
		padding: 1rem;
	}

	div ul li {
		list-style: none;
		margin-bottom: 20px;
	}

	h2{
		background-color: var(--yellow);
		color: #000000;
		padding: 1rem;
	}

`

export const Title = styled.div`
	margin: 40px auto;
	h1 {
		text-align: center;
		margin-top: 6rem;
	}

	button {
		font-size: 1.3rem;
		color: #fff;
		background: transparent;
		border: 2px solid var(--yellow);
		padding: 1rem 5rem;
		border-radius: 0.25rem;
		margin: 10px auto;
		display: block;

		transition: all 0.2s;

		&:hover{
			background-color: var(--yellow);
			color: #000;
		}
	}
`

export const Button = styled.button`
		display: block;
		margin: 40px auto;
		font-size: 1.3rem;
		color: #000;
		background: var(--yellow);
		border: 0;
		padding: 1rem 5rem;
		border-radius: 0.25rem;

		transition: filter 0.2s;

		&:hover{
			filter: brightness(0.9)
		}
`

export const ContainerLoading = styled.div`
	max-width: 500px;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`