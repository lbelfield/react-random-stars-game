npm install --save react react-dom
npm install --save react-bootstrap

npm install bootstrap --save
npm install font-awesome --save-dev

npm install jquery --save



Here's how I got React Bootstrap working at https://github.com/manavsehgal/react-eshop (Create React App scaffolded app).

Step 1. Install React Bootstrap and Bootstrap from NPM.

npm install react-bootstrap --save
npm install bootstrap --save


Step 2. Import Bootstrap CSS and optionally Bootstrap theme CSS in the index.js file.

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


Step 3. Import required React Bootstrap components within App.js file or your custom component file.

import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example App.js redone using React Bootstrap.