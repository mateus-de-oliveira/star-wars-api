import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import Lottie from 'react-lottie';
import loadingAnimation from 'assets/lotties/loading.json'

import { Container, Title, Button, ContainerLoading} from 'pages/ListFilms/style'



const GET_FILMS = gql`
	query filmsQuery($after: String){
		allFilms(first: 6, after: $after) {
			films {
				title,
				episodeID,
				director,
				producers
			}
		  }
	}
`

export function ListFilms() {
	const {loading, error, data} = useQuery(GET_FILMS)
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
				<h1>Lista de Filmes</h1>
			</Title>
			<Container>				
				{data.allFilms.films.map((film:any, index:string) => (
					<div key={index}>
						<h2>{film.title}</h2>
						<ul>
							<li>Número do Episódio: {film.episodeID}</li>
							<li>Diretor: {film.director}</li>
							<li>
								Produtores: {film.producers}
							</li>
						</ul>
					</div>
				))}
			</Container>
			<Footer />
		</>
	)
}