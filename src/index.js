import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

require('dotenv').config()


const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#f54272" // This is an orange looking color
              },
    secondary: {
        main: "#ad0045" //Another orange-ish color
                }
          },
fontFamily: 'Poppins',
fontWeight: 'fontWeightLight',
alignItems: 'center',
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
