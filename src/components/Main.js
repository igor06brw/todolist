import React from 'react'
import { useHistory } from "react-router-dom";

import CreateTaskScreen from '../screens/CreateTaskScreen'

const Main = ({ children }) => {
    console.log(useHistory)

    return (
        <div>
            {children}
        </div>
    )
}

export default Main
