import {Link} from 'react-router-dom'
import styled from 'styled-components'
import styles from 'styled-components'

const Header = () => {
   return (
      <Wrap>
         <Link to="/">
            <h1><span style={{color:'white'}}>DIGI</span><span style={{color:'rgb(100,100,100)'}}>MON</span></h1>
         </Link>
         <p>Tracking Digital Currency</p>
      </Wrap>
   )
}

const Wrap = styled.div`
background-color:orange;
padding:1rem;
a{text-decoration:none;}
`;

export default Header
