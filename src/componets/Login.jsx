import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate  = useNavigate()
  const [state,setState] = useState({
       email:'',
       password:''
  })

 const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
 }

const handleClick=()=>{
  axios.post('https://banduraj-app.herokuapp.com/api/login',state).then((res)=>{
    console.log('Login successful')
    console.log(res)
    localStorage.setItem("token",JSON.stringify(res.data.token))
    navigate('/')
  }).catch((err)=>console.log(err))
}

  return (
    <div className='row'> 
    <div className='col-md-4 offset-4 mt-4'>
         <h2> Login </h2>    
    <input type="email" name='email' onChange={handleChange} value={state.email}  class="form-control mt-4" placeholder="email" aria-label="Username" />
    <input type="password" onChange={handleChange} name='password' value={state.password}  class="form-control mt-4" placeholder="password" aria-label="Username" />
    <button type="button" onClick={handleClick} class="btn btn-primary mt-3" style={{marginLeft:"200px"}}>Login</button>
    </div>
    </div> 
    
  )
}

export default Login;
