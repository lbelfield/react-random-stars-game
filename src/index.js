import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// added for bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
// import 'react-bootstrap/dist/react-bootstrap';
// import 'react-bootstrap-columns/build/bundle';
// import 'react-bootstrap/es/Col';
// import 'react-bootstrap/es/Row';
// import 'react-bootstrap/lib/Col';
// import 'react-bootstrap/lib/Row';


import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
