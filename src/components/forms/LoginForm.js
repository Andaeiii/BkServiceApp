import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

//to render the component to the user.. 
import InlineError from '../messages/InlineError';


class LoginForm extends React.Component {
    state = {
        data    : {             //the fields in the form..... 
            email:'',
            password:''
        },
        loading : false, 
        errors  : {}
    };

    onChange = (e) => {
        let dtx = {
            ...this.state.data,                     //copy the old properties... 
            [e.target.name]: e.target.value         //update the new properties..
        };
        //update the state.. 
        this.setState( { data : dtx });
    };

    onFormSubmitted = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
    };

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "invalid email";
        if(!data.password) errors.password = "Can't be blank";
        return errors;
    }

    render() {

        const {data, errors} = this.state;  //deconstruct the state here.. 

        return (

            <Form onSubmit={this.onFormSubmitted}>


                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ezample@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                { errors.email && <InlineError text={errors.email}/> }

                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="***make it secure"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                { errors.password && <InlineError text={errors.password}/> }


                <Button primary>Login</Button>

            </Form>

        );
    }
}


export default LoginForm