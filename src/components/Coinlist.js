import {useState,useEffect,useContext} from 'react'
import coinGecko from '../apis/coinGecko'
import DigimonContext from '../context/DigimonContext'
import Coin from './Coin';

const Coinlist = () => {

   const {watching,deleteCoin} = useContext(DigimonContext);

   const [coins,coinsSet] = useState([]);
   const [loading,loadingSet] = useState(false);

   useEffect(() => {

      const fetchData = async () => {
         loadingSet(true);
         const res = await coinGecko.get('/coins/markets', {
            params: {
               vs_currency: 'usd',
               ids: watching.join(',')
            }
         });
         coinsSet(res.data);
         loadingSet(false);
      };

      if(watching.length > 0) fetchData();
      else coinsSet([]);

      // console.log(coins);

   }, [watching]);

   const renderCoins = () => {
      if(loading) return <div>loading...</div>;
      return (
         <div>
            {
               coins.map(c => <Coin key={c.id} coin={c} deleteCoin={deleteCoin}/>)
            }
         </div>
      );
   };

   return (
      <div>
         {renderCoins()}
      </div>
   )
}

export default Coinlist
