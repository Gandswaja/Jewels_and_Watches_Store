import React from 'react';
import { Route, Routes } from 'react-router-dom'

// import components
import NavigationBar from './component/navigationBar'

// connect react-redux
import { connect } from 'react-redux'

// import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';

// import action
import { keepLogin } from "./redux/actions"
class App extends React.Component {
    componentDidMount() {
        let id = localStorage.getItem('idUser')
        this.props.keepLogin(id)
    }
    render() {
        return ( 
          <div>
            <Routes>
              <Route path = '/' element = { <HomePage /> } ></Route> 
              <Route path = '/Login' element = { < LoginPage /> } ></Route> 
              <Route path = '/Register' element = { < RegisPage /> }></Route> 
            </Routes> 
          </div>
        );
    }
}

export default connect(null, { keepLogin })(App);