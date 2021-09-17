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

const Heading = styled.div`
    font-size: 2em;
    padding: 2em 0em;
`


const DisplayTaskScreen = () => {
    const dispatch = useDispatch()

    const taskList = useSelector((state) => state.taskList)

    useEffect(() => {
        if(taskList === []) {
            dispatch(listOfTasks())
        }
    }, [dispatch])

    return (
        <Container>
                {
                    (taskList.length === 0) ? (
                        <Heading>There is non tasks</Heading>
                    ) : (
                        <List>
                        {
                            taskList.map((task) => (<Task task={task} />)) 
                        }
                        </List>
                    )
                }
        </Container>
    )
}

export default DisplayTaskScreen
