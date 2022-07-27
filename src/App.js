import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Header from './components/Header';

const App = () => {
  const links = [
    {
      text: 'foo foo',
      href: 'foo foo'
    },
    {
      text: 'babar babar',
      href: 'bar bar'
    },
    {
      text: 'baz baz',
      href: 'baz baz'
    },
    {
      text: 'sex sex',
      href: 'sex sex'
    }
  ]

  return (
    <div className='App'>
      <Header links={links} isSmall={false} />
      <MainContent links={links} />
    </div>
  )
}
export default App;
