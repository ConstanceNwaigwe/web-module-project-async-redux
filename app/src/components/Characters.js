import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../actions/actions';


const Character = (props) => {
    const { character, isFetching, error } = props
  
    useEffect(() => {
      props.getCharacter()
    }, []);
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>Fetching a Rick and Morty character Now!</h2>;
    }
  
    const handleClick = () => {
      props.getCharacter()

    }
  
    return (
      <>
        <div>
          <h2>Name: {character.name}</h2>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <img src={character.image}/>
        </div>
        <button onClick={handleClick}>Get a new Rick and Morty Character</button>
      </>
    );
  };
  
  const mapStateToProps = state => {
    return {
      character: state.character,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, {getCharacter})(Character);