import React from 'react';
import Header from './Header';
import Index from './Index';
import Current from './Current';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Index />
        <Current />
      </div>
    )
  }
}

export default App;
