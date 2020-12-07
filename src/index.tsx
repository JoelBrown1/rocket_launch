import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './store/reducers/rocketsReducer';
import Home from './pages/home';
import RocketDetails from './pages/rocketPage';
import { Router, RouteComponentProps } from '@reach/router'

const RouterPage = (
  props: {pageComponent: JSX.Element} & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <RouterPage pageComponent={<Home />} path='/' />
      <RouterPage pageComponent={<RocketDetails />} path='/launch' />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals