import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
        </ChakraProvider>
      </BrowserRouter>
    );
  }
}

export default App;
