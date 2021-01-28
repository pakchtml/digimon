import styled from 'styled-components'

const Chartinfo = ({data}) => {

   const renderData = () => {
      if(data) {
         return (
            <div className="info">

               <div>
                  <h4>market cap</h4>
                  <p>{data.market_cap}</p>
               </div>

               <div>
                  <h4>total supply</h4>
                  <p>{data.total_supply}</p>
               </div>

               <div>
                  <h4>volume - 24h</h4>
                  <p>{data.total_volume}</p>
               </div>

               <div>
                  <h4>circulating supply</h4>
                  <p>{data.circulating_supply}</p>
               </div>
               
               <div>
                  <h4>high - 24h</h4>
                  <p>{data.high_24h}</p>
               </div>

               <div>
                  <h4>low - 24h</h4>
                  <p>{data.low_24h}</p>
               </div>

            </div>
         )
      }
   };

   return (
      <Wrap>
         {renderData()}
      </Wrap>
   )
}

const Wrap = styled.div`
.info{
   display:grid;
   grid-template-columns:repeat(3,1fr);
   & > div{
      text-align:center;
   }
}
`;

export default Chartinfo
