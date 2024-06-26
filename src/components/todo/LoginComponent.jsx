import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [username, setUsername] = useState('Yohannes') // sets the default value

    const [password, setPassword] = useState('') // sets the password.

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(event) {
        // changes the username when wrote upon.
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)  // `/welcome/${---} `to include the username
        }
        else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login</h1>
            {showErrorMessage && <div className='errorMessage'>Authentication Failed.
                Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label >User Name:</label>
                    <input type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password"
                        value={password} onChange={handlePasswordChange} />
                </div>

                <div>
                    <button type="button" name="Login" onClick={handleSubmit}> Login </button>
                </div>
            </div>
        </div>
    )
}


export default LoginComponent