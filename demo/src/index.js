import React from 'react';
import { render } from 'react-dom';

import { AppCounter } from 'react-basketball-court';

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <AppCounter/>
    {/* <BoilerplateComponent label="My React boilerplate component label: " onChange={val => console.log(val)} /> */}
  </div>, 
  document.getElementById('app')
);