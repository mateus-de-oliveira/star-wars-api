import { Container, ButtonContainer } from "pages/Dashboard/style";

import { Header } from 'components/Header';
import {ButtonListFilms} from 'components/ButtonListFilms'
import { ButtonListPeoples } from 'components/ButtonListPeoples';
import { ButtonListVehicles } from 'components/ButtonListVehicles';

export function Dashboard() {
  return (
    <>
        <Container>
          <Header />
          <ButtonContainer>
            <ButtonListFilms />
            <ButtonListPeoples />
            <ButtonListVehicles />
          </ButtonContainer>
        </Container>
    </>
  )
}
