import { Link } from "react-router-dom"
import {TiArrowSortedUp,TiArrowSortedDown} from 'react-icons/ti'
// import {MdDelete} from 'react-icons/md'
import styled from 'styled-components'

const Coin = ({coin,deleteCoin}) => {
   return (

      <Wrap>

         <Link to={`/coins/${coin.id}`} className="coin">
            <img src={coin.image} alt="logo"/>
            <p>{coin.id}<br/>${coin.current_price}</p>
            <p>
               {coin.price_change_percentage_24h < 0 ? <TiArrowSortedDown className="arrow down" /> : <TiArrowSortedUp className="arrow up" />}
               &nbsp;
               {coin.price_change_percentage_24h}
            </p>
            {/* <span>
               <MdDelete className="delete-icon" onClick={e => {
               e.preventDefault();
               deleteCoin(coin.id);
            }}/>
            </span> */}
         </Link>
      </Wrap>

   )
}

const Wrap = styled.div`
padding:4px 10px;
&:nth-child(odd){background-color:rgb(240,240,240);}
&:first-of-type{border-top-left-radius:10px;border-top-right-radius:10px;}
&:last-of-type{border-bottom-left-radius:10px;border-bottom-right-radius:10px;}
.coin{
   text-decoration:none;
   color:#585858;
   display:grid; grid-template-columns:repeat(3,4fr);
   img{height:40px;}
   .arrow.up{color:green;}
   .arrow.down{color:red;}
}
`;

export default Coin
