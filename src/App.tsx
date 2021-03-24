import {BrowserRouter as Router} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import {client}from 'services/client-apollo'


import {GlobalStyle} from 'assets/styles/global'
import { MainRoutes } from 'routes'

export function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>  
        <Router>
          <MainRoutes />     
        </Router>
      </ApolloProvider>
    </>
  )
}
