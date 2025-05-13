import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Box } from './screens/Box/Box';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Box />
    </React.StrictMode>
  );
} 