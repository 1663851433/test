import React from 'react';
import Home from './pages/Home/Home'
import { HashRouter, Switch, Route } from 'react-router-dom'
import loadabel from 'react-loadable'

const loading = () => <div>加载中...</div>  //设置路由懒加载的等待函数

// 设置登录懒加载
const Login = loadabel({
  loader: () => import('./pages/Login.js'),
  loading
})
const Register = loadabel({
  loader: () => import('./pages/Register.js'),
  loading
})

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Login' component={Login}></Route>
          <Route path='/Register' component={Register}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
