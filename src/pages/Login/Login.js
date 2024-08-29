import React from "react";
import './Login.css';
import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div>
            <form >
                <label>Username</label>
                <input 
                type="text"
                />

                <label>Password</label>
                <input 
                type="password"
                />

                <button>LogIn</button>
                <p>Don't have account? plese<Link to='/Signup'></Link><button>Signup</button></p>
            </form>
            


        </div>
    );
}