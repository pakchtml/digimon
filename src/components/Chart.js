import {useRef,useEffect,useState} from 'react'
import Chartjs from 'chart.js'
import {options} from '../chartConfigs'

const Chart = ({data:{day,week,year,detail}}) => {

   const chartRef = useRef();

   // const [time,timeSet] = useState('24h');
   const [time,timeSet] = useState(week);

   const timeFormat = () => {
      switch(time) {
         case '24h': return day;
         case '7d': return week;
         case '1y' : return year;
         default: return day;
      }
   };

   useEffect(() => {
      if(chartRef && chartRef.current && detail) {
         const chart = new Chartjs(chartRef.current, {
            type: 'line',
            data: {
               datasets: [
                  {
                     label: `price of ${detail.name}`,
                     // data: timeFormat(),
                     data: time,
                     backgroundColor: 'rgba(90,90,90,.3)',
                     borderColor: 'orange',
                     pointRadius: 0,
                     borderWidth: 2
                  }
               ]
            },
            options
         });
      }
   });

   

   const renderPrices = () => {
      if(detail) {
         return (
            <p>
               <span>current price: ${detail.current_price.toFixed(2)}</span>
               <br/>
               <span>price change: {detail.price_change_percentage_24h.toFixed(2)}%</span>
            </p>
         );
      }
   };

   return (
      <div>
         <div>{renderPrices()}</div>
         <div>
            <canvas id="coin-chart" width={500} height={400} ref={chartRef}></canvas>
         </div>
         <div>
            <button onClick={() => timeSet(day)}>24h</button>
            <button onClick={() => timeSet(week)}>7d</button>
            <button onClick={() => timeSet(year)}>1yr</button>
            {/* <button onClick={() => timeFormat('24h')}>24h</button>
            <button onClick={() => timeFormat('7d')}>7d</button>
            <button onClick={() => timeFormat('1yr')}>1yr</button> */}
         </div>
      </div>
   )
}

export default Chart
