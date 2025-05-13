import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box } from './screens/Box/Box';
import './index.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Box />
    </React.StrictMode>
  );
}
