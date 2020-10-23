import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';



function RegisterScreen (props){


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const{loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        
        return() => {
            //

        };
    },  [userInfo]);
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }
    return <div className = "form">
        <form onSubmit = {submitHandler}>
            <ul className = "form-container">
                <li>
                    <h3>CREATE NEW ACCOUNT</h3>
                </li>
                <li>
                    {loading &&<div>Loading.....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor= "name">
                        Name
                    </label>
                    <input type = "name" name ="name" id = "name" onChange={(e) => setName(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                    <label htmlFor= "email">
                        Email
                    </label>
                    <input type = "email" name ="email" id = "email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    
                </li>
                <li>
                <label for= "password">Password</label>
                <input type = "password" name ="password" id = "password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                <label for= "rePassword">RePassword</label>
                <input type = "rePassword" name ="rePassword" id = "rePassword" onChange={(e) => setrePassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type ="submit" className= "button primary">Sign In</button>
                </li>
                <li>
                    Already have an account? <Link to = "/signin">Sign-IN</Link>
                </li>
               

            </ul>



        </form>

    </div>
}
export default RegisterScreen;