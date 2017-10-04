import React from 'react';
import ReactDom from 'react-dom';
import helloWorld from './secondary';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyC69Mnjj8YYcaNxFueZON3Z1AEkegh4fvs'

const app = document.getElementById('app');

const App = () => {
  return (
      <div>
      <SearchBar />
      </div>
  )
}

ReactDom.render(<App />, app)