import React from 'react'
import styled from 'styled-components';

import Task from "../components/Task";
import { finishedTasks } from "../tasks";

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

const FinishedTaskScreen = () => {
    return (
        <Container>
            <List>
                { 
                    finishedTasks.map((task) => (
                        <Task task={task} />
                    ))
                }
            </List>
        </Container>
    )
}

export default FinishedTaskScreen

