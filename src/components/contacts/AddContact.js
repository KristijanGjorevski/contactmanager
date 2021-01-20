import React, { Component } from 'react'
import { Consumer } from '../../context'
import  TextInputGroup  from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {
            name: '',
            email: ''
        }
    };
    onSubmit = async (dispatch, e) =>{
        e.preventDefault();

        const {name, email, phone} = this.state;

        // Check for Errors
        if (name === ''){
            this.setState({errors: { name: 'Name is Required'}});
            return;
        }
        if (email === ''){
            this.setState({errors: { email: 'email is Required'}});
            return;
        }
        if (phone === ''){
            this.setState({errors: { phone: 'phone is Required'}});
            return;
        }
            
        const newContact = {
            name: name,
            email: email,
            phone: phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

        dispatch( {type: 'ADD_CONTACT', payload: res.data });

        // clear the state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const {name,email,phone,errors} = this.state;

        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return(
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Add</span> Contact
                            </h1>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form onSubmit={ this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup 
                                            label= "Name"
                                            name= "name"
                                            placeholder= "Enter Name"
                                            value= {name}
                                            onChange= {this.onChange}
                                            error={errors.name}
                                        />
                                        <TextInputGroup 
                                            label= "Email"
                                            name= "email"
                                            type= "email"
                                            placeholder= "Enter Email"
                                            value= {email}
                                            onChange= {this.onChange}
                                            error={errors.email}
                                        />
                                        <TextInputGroup 
                                            label= "Phone"
                                            name= "phone"
                                            placeholder= "Enter Phone"
                                            value= {phone}
                                            onChange= {this.onChange}
                                            error={errors.phone}
                                        />
                                        <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                    </form>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;