import React from 'react'
import NewMemeForm from './NewMemeForm'
import Meme from './Meme'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme){
    dispatch({type: 'ADD_MEME', meme: newMeme})
  }

  function deleteMeme(id){
    dispatch({type: 'DELETE_MEME', id});
  }

  const memeComponents = memes.map(m => (
    <Meme key={m.id} topText={m.topText} bottomText={m.bottomText} url={m.url} deleteMeme={()=>deleteMeme(m.id)}/>
  ))

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme}/>
      <hr/>
      {memeComponents}
    </div>
  );
}

export default App;
