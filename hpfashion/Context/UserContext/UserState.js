import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {

    const [IsLogin, setIsLogin] = useState(false)
    const [Card, setCard] = useState([])

  return (

    <UserContext.Provider value={{IsLogin, setIsLogin,Card, setCard }} >
        {props.children}
    </UserContext.Provider>

  )
}

export default UserState;