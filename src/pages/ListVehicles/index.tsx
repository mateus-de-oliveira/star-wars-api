import { gql, useQuery } from '@apollo/client'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import Lottie from 'react-lottie';
import loadingAnimation from 'assets/lotties/loading.json'

import { Container, Title, Button, ContainerLoading} from 'pages/ListFilms/style'
import { useNavigate } from 'react-router'


const GET_VEHICLES = gql`
	query vehiclesQuery($after: String){
		allVehicles(first:6, after: $after) {
			vehicles {
			  name,
			  passengers,
			  model,
			  vehicleClass
			}
			pageInfo {
				endCursor,
				hasNextPage
			}
		  }
	}
`

export function ListVehicles() {
	const {loading, error, data, fetchMore} = useQuery(GET_VEHICLES, {
		variables: {after: null}
	})
	const navigate = useNavigate()
	
	const loadingAnimationOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimation,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  }

	if(loading) {
		return (
			<ContainerLoading>
				<Lottie options={loadingAnimationOptions} isClickToPauseDisabled/>
			</ContainerLoading>
		)
	} 
	if(error) return <h1>Error :( </h1>
	
	return (
		<>
			<Header />
			<Title>
				<button onClick={() => {navigate('/')}}>
						Voltar
				</button>
				<h1>Lista de veículos</h1>
			</Title>
			
			<Container>				
				{data.allVehicles.vehicles.map((vehicle:any, index:string) => (
					<div key={index}>
						<h2>{vehicle.name}</h2>
						<ul>
							<li>Número de passegeiros: {vehicle.passengers}</li>
							<li>Modelo: {vehicle.model}</li>
							<li>
								Classe de veículo: {vehicle.vehicleClass}
							</li>
						</ul>
					</div>
				))}
			</Container>
			<Button onClick={() => {
				const {endCursor, hasNextPage} = data.allVehicles.pageInfo
				fetchMore({
					variables: {after: endCursor},
					updateQuery: (prevResult:any , {fetchMoreResult}) => {
						if(hasNextPage) {
							fetchMoreResult.allVehicles.vehicles = [
								...prevResult.allVehicles.vehicles,
								...fetchMoreResult.allVehicles.vehicles
							]
							return fetchMoreResult
						}
					}
				})
			}}>
						Ver mais
			</Button>
			<Footer />
		</>
	)
}