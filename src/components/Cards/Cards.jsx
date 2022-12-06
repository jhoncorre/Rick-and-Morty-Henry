import Card from '../Card/Card';

export default function Cards(props) {
   
  const { characters, onClose } = props;
  
  return (
    <div style={{

      display: 'flex', justifyContent: 'center',
      marginTop: 15,
      flexWrap: 'wrap',
  
    }} >
      {characters.map(character => (
        <Card
        id={character.id}
        key={character.name}
        name={character.name}
        species={character.species}
        gender={character.gender}
        image={character.image}
        onClose={onClose}
        
        />
      ))}
      </div>
  );
}

 