import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from 'App';
// import './index.css';

import { theme } from 'constants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';
import { Provider } from "react-redux";
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <App />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  // </React.StrictMode>
);

// npm install --save styled-components
// npm i styled-system styled-components
