import {Routes, Route} from 'react-router-dom'

import {Dashboard} from 'pages/Dashboard'
import { ListFilms } from 'pages/ListFilms'
import { ListPeoples } from 'pages/ListPeoples'
import { ListVehicles } from 'pages/ListVehicles'
import { Error404 } from 'pages/Errors/404'


export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}/>
			<Route path="/filmes" element={<ListFilms />}/>
			<Route path="/personagens" element={<ListPeoples />}/>
			<Route path="/veiculos" element={<ListVehicles />}/>

			<Route path="*" element={<Error404 />}/>
		</Routes>
	)
}