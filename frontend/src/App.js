import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import CabinsPage from './components/CabinsPage/CabinsPage';
import CabinDetails from './components/CabinDetails/CabinDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route path="/cabins" component={CabinsPage} />
          <Route path="/cabin-details" component={CabinDetails} />
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    );
  }
}

export default App;
