import { createBrowserRouter, RouterProvider,Navigate, createHashRouter } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home'
import About from '../About//About'
import Movies from '../Movies/Movies'
import Tvshows from '../Tvshows/Tvshows'
import Register from '../Register/Register'
import Login from '../Login/Login'
import People from '../People/People'
import Notfound from '../Notfound/Notfound'
import './App.css';
import jwtDecode from 'jwt-decode';
import {useState,useEffect} from 'react'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Details from '../Details/Details';
import { Offline, Online } from "react-detect-offline";


function App() {

  const [userData, setUserData] = useState(null)

  let logout=()=>{
    localStorage.removeItem('token');
    setUserData(null)
    return <Navigate to='login'></Navigate>
  }

  let saveUserData=()=>{
    let encodedToken=localStorage.getItem('token');
    let decodedToken=jwtDecode(encodedToken)
    setUserData(decodedToken);
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
        saveUserData()
    }
  }, [])
  

  let routes=createHashRouter([
    {path:'',element:<MasterLayout userData={userData} logout={logout}></MasterLayout>,errorElement:<Notfound></Notfound> ,
    children:[
      // {index:true,element:<ProtectedRoute userData={userData}><Home></Home></ProtectedRoute>},
      // {path:'movies',element:<ProtectedRoute userData={userData}><Movies></Movies></ProtectedRoute>},
      // {path:'tvshows',element:<ProtectedRoute userData={userData}><Tvshows></Tvshows></ProtectedRoute>},
      {index:true,element:<Home></Home>},
      {path:'movies',element:<Movies></Movies>},
      {path:'tvshows',element:<Tvshows></Tvshows>},
      {path:'about',element:<About></About>},
      {path:'register',element:<Register></Register>},
      {path:'login',element:<Login saveUserData={saveUserData}></Login>},
      {path:'people',element:<People></People>},
      {path:'details/:id/:mediaType',element:<Details></Details>},

    ]}
  ])

  return (
    <>
    <div>
    <Online><RouterProvider router={routes}></RouterProvider></Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>
      
    </>
  );
}

export default App;
