import { useState } from 'react';
import RealmCard from './CardComp/RealmCard';

const RealmSearch = () => {

  const [realm, setRealm] = useState();

  const searchRealms = async (realmName) => {
    const socket = new WebSocket('wss://electrumx.atomicals.xyz:50012');

    socket.onopen = () => {
      socket.send(JSON.stringify({ 
        id: 1,
        method: 'blockchain.atomicals.get-realm',
        params: [realmName]  
      }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if(data.success) {
        setRealm(data.result);
      }
    }
  }

  return (
    <div>
      <input 
        placeholder="Search realm"
        onChange={(e) => searchRealms(e.target.value)} 
      />

      {realm && <RealmCard realm={realm} />}
    </div>
  )
}

export default RealmSearch;
