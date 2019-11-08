import React, {useState} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {SimpleCard} from '../../components/Card';

function Login(props) {
  return (
    <section className="auth-section">
    <LoginForm />
    </section>
  )
}

export default Login;