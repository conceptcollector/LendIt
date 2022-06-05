import {useEffect} from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import AboutPage from '../AboutPage/AboutPage';
import AddItem from '../AddItem/AddItem';
import EditItem from '../EditItem/EditItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ItemDetails from '../ItemDetails/ItemDetails';
import LoginPage from '../LoginPage/LoginPage';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#674736'
    },
    secondary: {
      main: '#6c838f'
    },
    tertiary: {
      main: '#800080'
    },
    outline: {
      main: '#fafafa'
    }
  }
})

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            <Route
              exact
              path="/home"
            >
              <Home />
            </Route>

            <Route
              exact
              path="/details/:id"
            >
              <ItemDetails />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:3000/user */}

            <ProtectedRoute
              exact
              path="/profile"
            >
              <Profile />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addItem"
            >
              <AddItem />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/edit/:id"
            >
              <EditItem />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /home page
                <Redirect to="/home" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/home" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;