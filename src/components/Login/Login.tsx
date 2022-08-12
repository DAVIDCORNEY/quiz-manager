import React, { ReactElement, useState } from 'react';
import { UserControllerService } from '../../services/openapi/services/UserControllerService';
import './Login.css';


interface Props {
    setToken(jwtToken:string): void;
}

const Login = ({setToken}: Props): ReactElement => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const body = {email, password}
        const token = await UserControllerService.userControllerLogin(body);
        let jwtData = token.token?.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData!);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        console.log(decodedJwtData);
        localStorage.setItem('role', decodedJwtData.role);
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token as string);
    }

    return(
        <div className="login-wrapper">
            <h1>Login Here</h1>
                <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;