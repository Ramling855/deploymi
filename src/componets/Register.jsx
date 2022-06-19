import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [state,setState] = useState({
       name:'',
       email:'',
       mobile:'',
       SSC:'',
       HSC:'',
       UG:''
  })
  const [file,setFile] = useState('')

 const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
 }

 const handleFile=(e)=>{
    setFile(e.target.files[0])
 }


const handleClick=()=>{
     const formData = new FormData()
       formData.append('name',state.name);
       formData.append('email',state.email);
       formData.append('mobile',state.mobile);
       formData.append('SSC',state.SSC);
       formData.append('SSC',state.HSC);
       formData.append('SSC',state.UG)
       formData.append('file',file)
      
       const config={
          headers:{
             'content-type':'multipart-form-data'
          }
       
       }
       console.log(state)

   //  axios.post('https://banduraj-app.herokuapp.com/api/register',formData,config).then(()=>{
     axios.post('https://banduraj-app.herokuapp.com/api/register',formData,config).then(()=>{
    alert('data submitted')
  }).catch((err)=>console.log(err))
}

  return (
    <div className='row'> 
    <div className='col-md-4 offset-4 mt-4'>
         <h2>Enter Details to Generate Resume </h2>    
    <input type="text" name='name' onChange={handleChange} value={state.name} class="form-control mt-4" placeholder="name" aria-label="Username" />
    <input type="email" name='email' onChange={handleChange} value={state.email}  class="form-control mt-4" placeholder="email" aria-label="Username" />
    <input type="text" onChange={handleChange} name='mobile' value={state.mobile}  class="form-control mt-4" placeholder="mobile" aria-label="Username" />
    <input type="text" name='SSC' onChange={handleChange} value={state.SSC}  class="form-control mt-4" placeholder="SSC percentage" aria-label="Username" />
    <input type="text" name='HSC' onChange={handleChange} value={state.HSC}  class="form-control mt-4" placeholder="HSC percentage" aria-label="Username" />
    <input type="text" name='UG' onChange={handleChange} value={state.UG}  class="form-control mt-4" placeholder="UG percentage" aria-label="Username" />
    <input type="file" onChange={handleFile} style={{marginTop:"10px"}}/>
    <button type="button" onClick={handleClick} class="btn btn-primary mt-3" style={{marginLeft:"200px"}}>Click to Show CV</button>
    </div>
    </div> 
    
  )
}

export default Register;
