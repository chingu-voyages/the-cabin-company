import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import {Login} from './components/Login'
import {Register} from '../src/components/Login/register.jsx'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </ChakraProvider>
      </BrowserRouter>
    );
  }
}

export default App;
