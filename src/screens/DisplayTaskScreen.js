import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import Task from "../components/Task";
import { listOfTasks } from '../actions/taskActions';

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
    const dispatch = useDispatch()

    const taskList = useSelector((state) => state.task)
    const { tasks } = taskList

    useEffect(() => {
        dispatch(listOfTasks())
    }, [dispatch])

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
