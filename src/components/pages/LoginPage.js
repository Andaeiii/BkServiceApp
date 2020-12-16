import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';


// const LoginPage = () => (
//     <div>
//         <h1>LoginPage..</h1>
//         <LoginForm submit={this.processLoginForm}/>
//     </div>
// )

class LoginPage extends React.Component{

    processLoginForm = (data) => {
        console.log(data);
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


export default LoginPage