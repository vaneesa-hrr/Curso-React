import React from 'react';
const App = () => {
  const now = Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
};

export default App;