import {useNavigate} from 'react-router-dom'

export function ButtonListPeoples() {
	const navigate = useNavigate()
	
	return(
		<button onClick={() => navigate('/personagens')}>
			Listar personagens
		</button>
	)
}