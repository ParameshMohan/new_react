import React, { useState, useEffect } from 'react'

import Register from './register/register';
import LoginPage from './loginFolder/loginPage';


const Login = (props) => {

    const [status, setStatus] = useState(true)


    const toggle = () => {
        setStatus(!status)
    }

    return (
  <>
            {/* // <div className="pos-center"> */}

                {status ?
                    <LoginPage
                        toggle={toggle}
                        status={status}
                        setStatus={setStatus}
                    /> :
                    <Register
                        toggle={toggle}
                        status={status}
                        setStatus={setStatus}
                    />}
            {/* // </div> */}

      </> 
    )
}

export default Login;