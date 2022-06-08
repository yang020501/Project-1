import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Layout from './routes/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { Provider } from 'react-redux'

/* import './css/header.css' */
/* import './css/footer.css' */
import './sass/index.scss'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
