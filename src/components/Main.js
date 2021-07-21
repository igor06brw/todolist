import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import CreateTaskScreen from '../screens/CreateTaskScreen'
import DisplayTaskScreen from '../screens/DisplayTaskScreen';

const Main = ({ children }) => {
    const history = useHistory();
    const [pathname, setPathname] = useState('/')
    const [previousComponent, setPreviousComponent] = useState(<DisplayTaskScreen />)
    const [previousPathname, setPreviousPathname] = useState('/')
    const [currentComponent, setCurrentComponent] = useState()
   
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
                            <>XD</>
                        }
                    </>
                ) : (children)
            }   
        </div>
    )
}

export default Main
