import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Chart from '../components/Chart'
import Chartinfo from '../components/Chartinfo'
import coinGecko from '../apis/coinGecko'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Detail = () => {

   const {id} = useParams();

   const [coinData, coinDataSet] = useState([]);
   const [loading,loadingSet] = useState(false);

   const formatData = (data) => {
      return data.map(p => ({t:p[0], y:p[1].toFixed(2)}));
   };

   useEffect(() => {
      const fetchData = async () => {

         loadingSet(true);

         const [day,week,year, detail] = await Promise.all([
            coinGecko.get(`/coins/${id}/market_chart`, {
               params: {
                  vs_currency: 'usd',
                  days: '1',
               }
            }),
            coinGecko.get(`/coins/${id}/market_chart`, {
               params: {
                  vs_currency: 'usd',
                  days: '7',
               }
            }),
            coinGecko.get(`/coins/${id}/market_chart`, {
               params: {
                  vs_currency: 'usd',
                  days: '365',
               }
            }),
            coinGecko.get('/coins/markets', {
               params: {
                  vs_currency: 'usd',
                  ids: id
               }
            })
         ]);

         coinDataSet({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0]
         });

         loadingSet(false);

         // const res = await coinGecko.get(`/coins/${id}/market_chart`, {
         //    params: {
         //       vs_currency: 'usd',
         //       days: '1',

         //    }
         // })
         // console.log(res.data);
         // coinDataSet(res.data.prices);
      };
      fetchData();
   }, []);
   
   // console.log(coinData.week);

   const render = () => {
      if(loading) return <div>loading...</div>;
      return (
         <div>
            <Chart data={coinData} />
            <Chartinfo data={coinData.detail} />
         </div>
      );
   }

   return (
      <Wrap>
         <Link to="/" className="backto">Back to list</Link>
         <h2>{id}</h2>
         {render()}
      </Wrap>
   )
}

const Wrap = styled.div`
.backto{
   display:block;
   margin-bottom:1rem;
}
h2{text-transform:uppercase;}
`;

export default Detail
