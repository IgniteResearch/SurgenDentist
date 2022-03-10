import React from 'react';
import {Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import AppointmentPage from './pages/AppointmentPage';
import Login from './pages/login/Login';
import AppointmentForm from './pages/homePagesComponents/AppointmentForm';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardAppointmentPage from './pages/dashboard/Appointments/DashboardAppointmentPage';
import Patients from './pages/dashboard/patients/Patients';
import PrivateRoute from './privateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import ContactUs from './pages/contact/ContactUs';


const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />;
        <Route  path="/create-appointment" component={AppointmentPage} />;
        <Route  path="/appointment-form" component={AppointmentForm} />;
        <Route  path="/contactus" component={ContactUs} />;
        <PrivateRoute path="/dashboard/doctors">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/appointment">
          <DashboardAppointmentPage/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/patients">
          <Patients/>
        </PrivateRoute>
        <Route path="/login" component={Login} />;
        <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
