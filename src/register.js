import React from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import history from './history'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',
            tel: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post( 'https://cors-anywhere.herokuapp.com/https://hidden-everglades-98624.herokuapp.com/api/user', {
            firstName:this.state.firstname,
            lastName:this.state.lastname,
            phone:this.state.tel,
            email:this.state.email,
            password: this.state.password,
        })
        .then( res => {
            console.log(res.status)
            if (res.status === 200 ){
                toast.success('You have succesfully registered', {
                    className:'toast',
                    draggable:true,
                    position:toast.POSITION.TOP_CENTER,
                    type:toast.TYPE.SUCCESS,
                    hideProgressBar:true
                })
                history.push('/login')
            }
        }).catch( error => {
            console.log(error)
            toast.error('An error occured', {
                className:'toast',
                draggable:true,
                position:toast.POSITION.TOP_CENTER,
                type:toast.TYPE.ERROR,
                hideProgressBar:true
            })
        })
        
       
    }

    render() {
        // console.log(this.state.firstname,this.state.lastname,this.state.tel,this.state.email,this.state.password, this.state.confirmpassword)
        return (
            <div className="" >
                <ToastContainer style={{maxHeight:'30px !important'}}/>
                <h2>REGISTRATION PAGE</h2>
                <form>
                    <input type="text" name="firstname" required placeholder="First Name"
                        value={this.state.firstname}
                        onChange={event => this.setState({ firstname: event.target.value })}
                    />

                    <input type="text" name="lastname" required placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={event => this.setState({ lastname: event.target.value })}
                    />

                    <input type="tel" id="phone" name="phone" placeholder="e.g. 254 722 684 990"
                        value={this.state.tel}
                        onChange={event => this.setState({ tel: event.target.value })}
                    />


                    <input name="email" placeholder="Email" required type='email'
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />

                    <input type="password" name="password" required placeholder=" Password"
                        value={this.state.password}
                        onChange={event => this.setState({ password: event.target.value })}
                    />

                    <input type="password" name="password" required placeholder="Confirm Password"
                        value={this.state.confirmpassword}
                        onChange={event => this.setState({ confirmpassword: event.target.value })}
                    />
                    <button className="register-btn" type='submit' onClick={this.handleSubmit}>Register</button>

                </form>
            </div>
        )
    }
}
export default Register;
