import React from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import history from './history'
//import {Link} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://cors-anywhere.herokuapp.com/: https://hidden-everglades-98624.herokuapp.com/api/login', {
            email: this.state.email,
            password: this.state.password,
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    toast.success('You have succesfully logged in', {
                        className: 'toast',
                        draggable: true,
                        position: toast.POSITION.TOP_CENTER,
                        type: toast.TYPE.SUCCESS,
                        hideProgressBar: true
                    })
                    history.push('/homepage')

                }
            }).catch(error => {
                console.log(error)
                toast.error('An error occured please check your email or password', {
                    className: 'toast',
                    draggable: true,
                    position: toast.POSITION.TOP_CENTER,
                    type: toast.TYPE.ERROR,
                    hideProgressBar: true
                })
            })


    }

    render() {
        return (
            <div class="" >
                <h2>LOGIN PAGE</h2>
                <form>

                    <input type="email" name="email" required placeholder="Email"
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />



                    <input type="password" name="password" required placeholder="Password" 
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
                    />


                    <button className="login-btn" type="submit" onClick={this.handleSubmit}>Login</button>

                </form>
            </div>
        )
    }
}

export default Login;