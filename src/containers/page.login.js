import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {
    
    const [username, setUsername] = useState('admin')
    const [password, setPassword] = useState('admin')

    const [ErrorMessage, setErrorMessage]= useState(false)

    const navigate = useNavigate()


    const handleSubmit= async(event)=>{
        event.preventDefault();
        
        if (usernameError || passwordError) {
            // Handle validation errors
            console.error('Validation Error:', usernameError, passwordError);
            return;
          }
  
  
          try{
          const response =await axios.post('http://localhost:8081/login', {
            //paasing username & password
              username: username, 
              password: password
          });
          
          //checking the responese
          if (response.data === 'Success') {
              console.log('Successfully logged in');
              setErrorMessage(false)
              navigate('/home');
            } else {
              alert('Error logging in');
              setErrorMessage(true)
            }
          } catch (error) {
            console.error('Error:', error);
            // Handle error 
          }


    }

  return (
    <div style={{ backgroundColor: '#260261' }} className='d-flex justify-content-center align-items-center vh-100'>
        
        <div className='text-center'>
            <h1 className="text-white mb-3 p-3 rounded w-100 ">ERP System of ABC </h1>
            <div className='bg-white p-3 rounded w-100'>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div className='mb-3 text-start'>
                        <label htmlFor="uname"><strong>User Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='username' onChange={(event) => setUsername(event.target.value)} value={username} className='form-control rounded-0'/>
                        {usernameError && <span className='text-danger'>{usernameError}</span>}

                    </div>
                    <div className='mb-3 text-start'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={(event) => setPassword(event.target.value)} value={password} className='form-control rounded-0'/>
                        {passwordError && <span className='text-danger'>{passwordError}</span>}
                    </div>

                    {ErrorMessage && <div className="error">Login Faild</div>}

                    <button type='submit' className='btn btn-success w-100'>Log in</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login