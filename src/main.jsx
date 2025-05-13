// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// index.js or main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,


    h5: {
      fontFamily: `'Raleway', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    h6: {
      fontFamily: `'Raleway', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    body2: {
      fontFamily: `'Raleway', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);