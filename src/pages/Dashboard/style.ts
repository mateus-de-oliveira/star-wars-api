import styled from 'styled-components'

export const ButtonContainer = styled.div`
	max-width: 40%;
	margin: 40px auto;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (max-width: 1080px) {
		max-width: 60%;
	}

	@media (max-width: 720px) {
		max-width: 80%;
	}

	

	button {
		font-size: 1.3rem;
		color: #000;
		background: var(--yellow);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;

		transition: filter 0.2s;

		&:hover{
			filter: brightness(0.9)
		}
	}
`

export const Container = styled.main`
	max-width: 1120px;
	width: 100%;
	margin: 0 auto;

	position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`