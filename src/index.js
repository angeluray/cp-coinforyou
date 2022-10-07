import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
/* import App from './App'; */
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyCoin from './components/coin/coin';

// App components
import Navigation from './components/navbar';
import MyCryptoCurrencies from './components/cryptohome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MyCryptoCurrencies />} />
          <Route path="/coin" element={<MyCoin />}>
            <Route path=":coindId" element={<MyCoin />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
