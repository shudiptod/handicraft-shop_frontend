

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
import AllOrders from './components/Admin/AllOrders/AllOrders';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Admin/ManageProducts/ManageProducts';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/shared/Footer/Footer';

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
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path='/myOrders/:email'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/addReview'>
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path='/purchase/:productId'>
              <Purchase></Purchase>
            </PrivateRoute>
            {/* admin routes  */}
            <PrivateRoute path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addproduct'>
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path='/makeadmin'>
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path='/manageProducts'>
              <ManageProducts />
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
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
