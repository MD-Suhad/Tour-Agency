import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoggIn from "./components/LoggIn/LoggIn";

import AuthProvider from "./utilities/context/AuthProvider";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import BookForm from "./components/BookForm/BookForm";
import OPlased from "./components/OPlaced/OPlased";
import MyOrders from "./components/MyOrders/MyOrders";
import AddPackage from "./components/AddPackage/AddPackage";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import Slider from "./components/Header/Slider/Slider";


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <PrivateRouter path="/management">
              <ManageBooks></ManageBooks>
            </PrivateRouter>
            <PrivateRouter path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRouter>
            <PrivateRouter path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRouter>
            <PrivateRouter path="/book/:id">
              <BookForm></BookForm>
            </PrivateRouter>
            <Route exact path="/">
            <Slider></Slider>
              <Home></Home>
            </Route>
            <Route path="/home">
            <Slider></Slider>
              <Home></Home>
            </Route>
            <Route path="/booked">
              <OPlased></OPlased>
            </Route>
            <Route path="/login">
              <LoggIn></LoggIn>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
           
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
