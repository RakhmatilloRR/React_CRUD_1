import Root from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

