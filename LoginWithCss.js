import React, {Component} from 'react'
import "./Login.css"
class Login extends Component {
  render(){
    return (
      <div className="page">
      <div className="cover">
        <h2>LOGIN</h2>
        <div className='form-group'>
        <input type="text" placeholder="USERNAME" required={true}/>
        </div>
        <input type="password" placeholder="PASSWORD" required={true}/>
       
       <div className="login-btn"><h6>LOGIN</h6></div>
      
        </div>
      </div>
    )
  }

}
export default Login


