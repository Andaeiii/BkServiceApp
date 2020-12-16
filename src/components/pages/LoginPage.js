import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';          // used to connect this function to redux.. 
import LoginForm from '../forms/LoginForm';

import { login } from '../../actions/auth';



// const LoginPage = () => (
//     <div>
//         <h1>LoginPage..</h1>
//         <LoginForm submit={this.processLoginForm}/>
//     </div>
// )

class LoginPage extends React.Component{

    processLoginForm = (data) => {
        this.props.login(data).then(() => {
            this.props.history.push("/");       
        })
    }

    render (){
        return(
            <div>
                <h1>LoginPage..</h1>
                <LoginForm submit={this.processLoginForm}/>
            </div>
        );
    }
}


//so here we define what the component needs... 
//it needs history object with the push method... 

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

    login: PropTypes.func.isRequired
};

//param - that allows to pass from redux state to this component... 
//second - functions to be despatched out of the component... 

export default connect(null, { login })(LoginPage);