import React,{useState} from 'react'
import axios from 'axios'
import joi from 'joi'
import {useNavigate} from 'react-router-dom'


export default function Login({saveUserData}) {

  const[user,setUser]=useState({
    email:'',
    password:''
  })

  const[errorMsg,seterrorMsg]= useState('')
  let [errorList, seterrorList] = useState([])
  let navigate=useNavigate()


  let validateFormData=()=>{
    const schema=joi.object({
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      password:joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/))
    })
    return schema.validate(user,{abortEarly:false})
   }

  let getInputValue=(e)=>{
    let myUser={...user}
    myUser[e.target.name]=e.target.value
    setUser(myUser)
   }

   let goToHome=()=>{
    navigate('/')
  }
  
   let submitFormData=async (e)=>{
    e.preventDefault();
    let validateForm=validateFormData()
    console.log(validateForm);
    if(validateForm.error){
      seterrorList(validateForm.error.details)
      console.log(errorList);
    }
    else{
      let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
      if(data.message=='success'){
        localStorage.setItem('token',data.token)
        saveUserData()
        goToHome()
      }
      else{
        seterrorMsg(data.message)
      }
    }
  }

  return (
    <>
    <div className='w-75 m-auto py-5'>
    <h2>Login Form</h2>
    {errorList.map((err,index)=><div key={index} className='alert alert-danger p-2'>{err.message}</div>)}
    <form onSubmit={submitFormData}>
      <div className='input-data my-2'>
        <label htmlFor='email'>Email</label>
        <input onChange={getInputValue} name='email' type='email' className='form-control my-2'></input>
      </div>
      <div className='input-data my-2'>
        <label htmlFor='password'>Password</label>
        <input onChange={getInputValue} name='password' type='password' className='form-control my-2'></input>
      </div>

      <button className='btn btn-info my-3 float-end'>Register</button>
      <div className='clearfix'></div>

    </form>
    </div>
    </>

    
  )
}
