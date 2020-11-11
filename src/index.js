import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login';
import Detail from './component/Detail';
import MyPage from './component/MyPage';
import BlackList from './component/BlackList';
import OthersPage from './component/OthersPage';
import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact={true} component={Login}></Route>
      <Route path="/myPage" exact={true} component={MyPage}></Route>
      <Route path="/othersPage/:username" exact={true} component={OthersPage}></Route>
      <Route path="/blackList" exact={true} component={BlackList}></Route>
      <Route path="/detail/:mid" exact={true} component={Detail}></Route>
      <Route path="/" exact={true} component={App}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
