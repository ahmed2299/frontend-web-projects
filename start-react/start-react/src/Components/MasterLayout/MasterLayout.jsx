import React from 'react'
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom'
import CopyRight from '../CopyRight/CopyRight'
export default function MasterLayout() {
  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    <CopyRight></CopyRight>
    </>
  )
}
