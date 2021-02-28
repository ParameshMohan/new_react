import React, { useState, useEffect } from 'react'

import { useHistory, NavLink, useLocation } from 'react-router-dom';
import Drawer_TopNav from './drawer_TopNav';

const Home =({props, match}) =>{
    const history = useHistory();

    const [res, setRes]=useState(
        useLocation().state?.fruit
    )
    console.log("res,", res)
    const[temp,setTemp]=useState(
        match.params.id
    )
    console.log("temp0",temp)
    useEffect(() => {
        localStorage.setItem('id', temp);
    }, [])

    
    return (
<div>

    <Drawer_TopNav />
    home

</div>
    )

}
export default Home;