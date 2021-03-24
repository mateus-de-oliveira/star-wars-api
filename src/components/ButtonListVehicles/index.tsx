import {useNavigate} from 'react-router-dom'

export function ButtonListVehicles() {
	const navigate = useNavigate()

	return(
		<button onClick={() => navigate('/veiculos')}>
			Listar Veículos
		</button>
	)
}