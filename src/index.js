import React from 'react';
import { createRoot } from 'react-dom/client';
import Animals from './Components/App/App';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Animals />
  </React.StrictMode>
);
