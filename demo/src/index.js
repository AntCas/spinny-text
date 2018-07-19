import React from 'react';
import { render } from 'react-dom';

import SpinnyText from 'spinny-text';

render(
  <div style={{ textAlign: "center" }}>
    <SpinnyText text="React Spinny Text Demo" />
  </div>, 
  document.getElementById('app')
);
