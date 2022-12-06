import { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validate";


export default function Form (props)  {
    
    const [userData, setUserData] = useState({ 
        username: "", 
        password: "" 
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validate(({
                userData,
                [name]: value
            }))
        )
    }
    const handleSubmit = () => {
        props.login(userData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit = {handleSubmit}>
                <div>
                <label>Username:</label>
                <input 
                name="username"
                type="text"
                value={userData.username}
                onChange={handleInputChange}
                />
                <p className={styles.error}>
                    {errors.username ? errors.username : null}
                </p>
                
                </div>

                <div>
                <label>Password :</label>
                <input 
                name="password"
                type="password"
                value={userData.password}
                onChange={handleInputChange}
                 />
                 <p className={styles.error}>
                    {errors.password ? errors.password : null}
                </p>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}