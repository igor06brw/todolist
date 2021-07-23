import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import Task from "../components/Task";

const Container = styled.div`
    display: flex;
    max-width: 80%;
    margin: 0 auto;
    justify-content: center;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`


const DisplayTaskScreen = () => {
    const tasks = useSelector((state) => state.task)

    return (
        <Container>
            <List>
                { 
                    tasks.map((task) => (
                        <Task task={task} />
                    ))
                }
            </List>
        </Container>
    )
}

export default DisplayTaskScreen
