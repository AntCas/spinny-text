import React from 'react';
import { render } from 'react-dom';

import SpinnyText from 'spinny-text';

render(
  <div style={{ textAlign: 'center' }}>
    <h2 style={{ fontSize: 16, color: 'black' }}>
      <SpinnyText text="React Spinny Text Demo" />
    </h2>
  </div>, 
  document.getElementById('app')
);
