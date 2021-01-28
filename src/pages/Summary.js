// import Addcoin from '../components/Addcoin'
import Coinlist from '../components/Coinlist'
import styled from 'styled-components'

const Summary = () => {
   return (
      <Wrap>

         {/* <Addcoin/> */}
         <Coinlist/>
      </Wrap>
   )
}

const Wrap = styled.div`
border:2px solid orange;
border-radius:10px;
/* padding:1rem 2rem; */
`;

export default Summary
