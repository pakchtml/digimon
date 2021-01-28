import {createContext,useState} from 'react'

export const DigimonContext = createContext();

export const Provider = ({children}) => {

   const [watching, watchingSet] = useState(['bitcoin','ethereum','ripple','litecoin','eos','okb','neo','iota','cardano','polkadot','stellar','chainlink']);

   const deleteCoin = (id) => {
      const newWatching = watching.filter(c => c !== id);
      watchingSet(newWatching);
   };

   return (
      <DigimonContext.Provider value={{
         watching,deleteCoin
      }}>
         {children}
      </DigimonContext.Provider>
   )
}

export default DigimonContext;