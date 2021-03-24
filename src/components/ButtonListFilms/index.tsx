import {useNavigate} from 'react-router-dom'

export function ButtonListFilms() {
	const navigate = useNavigate()
	return(
		<button onClick={() => navigate('/filmes')}>
			Listar filmes
		</button>
	)
}