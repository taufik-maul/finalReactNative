import React from 'react';

import {Provider} from 'react-redux';
import stores from './stores';
import Wrapper from './pages/Wrapper';

const App = () => {
  return (
    <Provider store={stores}>
      <Wrapper />
    </Provider>
  );
};

export default App;
