import React from 'react';
import { render } from 'react-dom';

import SpinnyText from 'spinny-text';

render(
  <div style={{
    background: 'black',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h2 style={{
      fontSize: 48,
      color: 'white'
    }}>
      <SpinnyText
        text="React Spinny Text Demo"
        spinOnRender={ true } />
    </h2>
  </div>, 
  document.getElementById('app')
);
