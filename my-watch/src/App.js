import React from 'react';
import { Route, Routes } from 'react-router-dom'

// import components
import NavigationBar from './component/navigationBar'

// import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';

class App extends React.Component {
    render() {
        return ( 
          <div>
            <NavigationBar />
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/register' element={<RegisPage/>}></Route>
            </Routes>
          </div>
        );
    }
}

export default App;