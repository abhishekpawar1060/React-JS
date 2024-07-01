import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children, authentication = true}) {

    const authStaus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if(authentication && authStaus !== authentication){
            navigate("/login")
        }else if(!authentication && authStaus !== authentication){
            navigate("/")
        }

        setLoader(false)

    }, [authStaus, authentication, navigate])

    return loader ? null : <>{children}</>
}

export default Protected


