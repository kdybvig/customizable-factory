import React from 'react';
import './App.css';
import Factory from './components/Factory';

function App() {

  const components = [
    {name: 'Welcome', props: {name: 'Keith'}},
    {name: 'Button', props: {}},
    {name: 'Input', props: {type: 'number', placeholder: 'enter a number'}},
    {name: 'Welcome', props: {name: 'Morgan'}},
    {name: 'Welcome', props: {name: 'Nick'}},
    {name: 'Welcome', props: {name: 'Sachn'}},
    {name: 'Input', props: {type: 'text', placeholder: 'type something'}},
  ]

  return (
    <div className="App">
      <Factory components={components}/>
    </div>
  );
}

export default App;
