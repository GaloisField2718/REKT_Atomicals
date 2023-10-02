import RealmSearch from './RealmSearch'; 

const RealmCard = ({realm}) => {

  return (
    <div className="realm-card">
      <h2>{realm.name}</h2>
      <p>{realm.description}</p>

      <div>
        <span>Owner:</span> {realm.owner}  
      </div>

      <div>
        <span>Members:</span> {realm.members.length}
      </div>
    </div>
  );
}

export default RealmCard;
