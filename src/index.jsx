import React           from 'react';
import ReactDOM        from 'react-dom';

import * as router     from './router';
import ConnectFormApp  from './pages/ConnectFormApp';
import ConfirmationStep  from './pages/ConfirmationStep';

function render(reactClass, props = {}) {
  ReactDOM.render(React.createElement(reactClass, props), document.getElementById('root'));
}

router.defineRoutes({
  '/': () => render(ConnectFormApp),
  '/confirmation-step': () => render(ConfirmationStep),
});