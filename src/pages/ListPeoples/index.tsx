import { gql, useQuery } from '@apollo/client'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import Lottie from 'react-lottie';
import loadingAnimation from 'assets/lotties/loading.json'

import { Container, Title, Button, ContainerLoading} from 'pages/ListFilms/style'
import { useNavigate } from 'react-router'


const GET_PEOPLES = gql`
	query peoplesQuery($after: String){
		allPeople(first: 6, after: $after) {
			people {
			  name,
			  birthYear,
			  gender,
			  homeworld {
				name
			  }
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		  }
	}
`

export function ListPeoples() {
	const {loading, error, data, fetchMore} = useQuery(GET_PEOPLES,{
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
				<h1>Lista de personagens</h1>
			</Title>
			
			<Container>				
				{data.allPeople.people.map((people:any, index:string) => (
					<div key={index}>
						<h2>{people.name}</h2>
						<ul>
							<li>Ano de Nascimento: {people.birthYear}</li>
							<li>Gênero: {people.gender}</li>
							<li>
								Planeta: {people.homeworld.name}
							</li>
						</ul>
					</div>
				))}
			</Container>
			<Button onClick={() => {
				const {endCursor, hasNextPage} = data.allPeople.pageInfo
				fetchMore({
					variables: {after: endCursor},
					updateQuery: (prevResult:any , {fetchMoreResult}) => {
						if(hasNextPage) {
							fetchMoreResult.allPeople.people = [
								...prevResult.allPeople.people,
								...fetchMoreResult.allPeople.people
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