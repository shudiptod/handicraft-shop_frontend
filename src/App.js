

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Explore from './components/Explore/Explore/Explore';
import NotFound from './components/NotFound/NotFound';
import AddReview from './components/User/AddReview/AddReview';
import MyOrder from './components/User/MyOrder/MyOrder';
import Payment from './components/User/Payment/Payment';
import Header from './components/shared/Header/Header/Header';
import Purchase from './components/User/Purchase/Purchase/Purchase';
import Login from './components/Login/Login';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/addReview'>
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
