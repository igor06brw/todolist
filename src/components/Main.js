import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import DisplayTaskScreen from '../screens/DisplayTaskScreen';
import FinishTaskScreen from '../screens/FinishTaskScreen';

const Main = ({ children }) => {
    const history = useHistory();
    const [pathname, setPathname] = useState('/')
    const [previousPathname, setPreviousPathname] = useState('/')
   
    history.listen((location) => {
        setPreviousPathname((pathname === '/createtask') ? ('/') : (pathname));
        setPathname(location.pathname);
        console.log(pathname === '/createtask' && previousPathname === '/')
    });
    
    console.log(previousPathname, pathname)

    return (
        <div>
            {
                (pathname === '/createtask' && previousPathname === '/') ? (
                    <>
                        {
                            children
                        }
                        {
                            <DisplayTaskScreen />
                        }
                    </>
                ) : (pathname === '/createtask' && previousPathname === '/finishtask') ? (
                    <>
                        {
                            children
                        }
                        {
                            <FinishTaskScreen />
                        }
                    </>
                ) : (children)
            }   
        </div>
    )
}

export default Main
