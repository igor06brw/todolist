import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask, completeTask } from '../actions/taskActions';

const Element = styled.li`
    position: relative;
    background: rgb(0,172,208);
    background: linear-gradient(130deg, rgba(116,116,116,1) 0%, rgba(42,42,42,1) 100%);
    background-size: 300%;
    padding: 20px 50px;
    margin: 10px 0;
    max-height: 100px;
    max-width: 300px;
    width: 80%;
    border-radius: 1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;
    &:hover {
        max-height: 250px;
        padding: 15px 50px;
        background-position: right;
        color: red;
        overflow: visible;
        white-space: normal;
    }
`
const Wrapper = styled.div`
    text-align: center;
    color: ${props => props.theme.textWhiteColor}; 
`

const Icons = styled.div`
    position: absolute;
    top: 10px;
    right: 3%;
`

const Button = styled.button`
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    & > i {
        cursor: pointer;
        margin: 0 0.3em;
    }
    & > .fa-trash-alt {
        color: red;
    }
    & > .fa-edit {
        color: orange;
    }
    & > .fa-check-circle {
        color: green;
    }
`

const Heading = styled.h3`
    font-size: 1.1em;
    max-height: 100px;
    overflow: hidden;
`
const Paragraph = styled.p`    
    font-size: 1em;
    max-height: 100px;
    overflow: hidden;
`

const Task = ({task}) => {
    const [isCompleted, setIsCompleted] = useState(true);
    const dispatch = useDispatch();
    let history = useHistory();


    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch(deleteTask(id))
            localStorage.removeItem(id.toString())
        }
    }

    const editHandler = (task) => {
        console.log(task)
        history.push({
            pathname: `/edit/${task._id}`,
            state: task
        })
    }

    const completeCurrentTask = (id) => {
        dispatch(completeTask({_id: id, isCompleted}))
    }

    return (
        <Element>
            <Icons>
                <Button onClick={() => deleteHandler(task._id)}>
                    <i class="far fa-trash-alt"></i>
                </Button>
                <Button onClick={() => editHandler(task)}>
                    <i class="far fa-edit"></i>
                </Button>
                {
                   (task.isCompleted === false) ? (<Button onClick={() => completeCurrentTask(task._id)}><i class="far fa-check-circle"></i></Button>) : (<a></a>)
                } 
            </Icons>
            <Wrapper>
                <Heading>{task.title}</Heading>
                <Paragraph>{task.description}</Paragraph>
            </Wrapper>
        </Element>
    )
}

export default Task
