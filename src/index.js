import React from 'react';
import reactDOM from 'react-dom';

const template = React.createElement('h1', null, 'Hello world!');

reactDOM.render(template, document.getElementById('root'));
