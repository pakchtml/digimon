import {Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Detail from './pages/Detail'
import Summary from './pages/Summary'
import styled from 'styled-components'

const App = () => {
   return (
      <>
      <Header/>
      <Wrap>
         <Switch>

            <Route exact path="/">
               <Summary/>
            </Route>

            <Route exact path="/coins/:id">
               <Detail/>
            </Route>

         </Switch>
      </Wrap>
      </>
   )
}

const Wrap = styled.div`
max-width:1000px; margin:2rem auto 0 auto;
`;

export default App
