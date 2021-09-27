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
    padding: 10px 50px;
    margin: 10px 0;
    border-radius: 1em;
    transition: all 0.3s ease-in-out;
    &:hover {
        padding: 15px 50px;
        background-position: right;
    }
`
const Wrapper = styled.div`
    text-align: center;
    color: ${props => props.theme.textWhiteColor};
    font-size: 0.8em;
`

const Icons = styled.div`
    position: absolute;
    top: 15%;
    right: 3%;
    & > i {
        cursor: pointer;
        margin: 0 0.8em;
    }
    & > .fa-trash-alt {
        color: green;
    }
    & > .fa-edit {
        color: orange;
    }
    & > .fa-check-circle {
        color: green;
    }
`

const Button = styled.button`
    background: none;
    border: none;
    color: red;
    cursor: pointer;
`

const Task = ({task}) => {
    const [isCompleted, setIsCompleted] = useState(true);
    const dispatch = useDispatch();
    let history = useHistory();


    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch(deleteTask(id))
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
                <Button onClick={() => completeCurrentTask(task._id)}>
                    <i class="far fa-check-circle"></i>
                </Button>
            </Icons>
            <Wrapper>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </Wrapper>
        </Element>
    )
}

export default Task
