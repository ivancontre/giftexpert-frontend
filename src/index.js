import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';

import './index.css';

const categories = ['Pokemon'];

ReactDOM.render(
    <GifExpertApp defaultCategories={ categories } />,
    document.getElementById('root')
);