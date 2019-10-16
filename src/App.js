import React, {Component} from 'react';
import Layout from './components/Layout';
import LayoutProvider from './providers/LayoutProvider';
import ThemeProvider from './providers/ThemeProvider';
import ActionsProvider from './providers/ActionsProvider';
import UserProvider from './providers/UserProvider';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <UserProvider>
          <ActionsProvider>
            <LayoutProvider>
              <Layout>
                <Routes/>
              </Layout>
            </LayoutProvider>
          </ActionsProvider>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default App;
