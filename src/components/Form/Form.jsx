import { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./Validation";

const Form = ({login})=>{

    const [user, setUser] = useState({
        username: '',
        password:''
    });

    const [errors, setErrors] = useState({
        username: '',
        password:''
    });


    const handleInputChange = (e)=>{
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })
        setErrors(validation({
            ...user,
            [name]: value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        login(user);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
                {errors.username && <p>{errors.username}</p>}
                <label htmlFor="password">Password:</label>
                <input type='password' name="password" value={user.password} onChange={handleInputChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );

}

export default Form;