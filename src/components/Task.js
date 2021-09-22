import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from '../actions/taskActions';

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
    & > i:first-of-type {
        color: red;
    }
    & > i:nth-of-type(1) {
        color: orange;
    }
    & > i:last-of-type {
        color: green;
    }
`

const Button = styled.button`
    background: none;
    border: none;
    color: red;
`

const Task = ({task}) => {
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

    return (
        <Element>
            <Icons>
                <Button onClick={() => deleteHandler(task._id)}>
                    <i class="far fa-trash-alt"></i>
                </Button>
                <Button onClick={() => editHandler(task)}>
                    <i class="far fa-edit"></i>
                </Button>
                <i class="far fa-check-circle"></i>
            </Icons>
            <Wrapper>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </Wrapper>
        </Element>
    )
}

export default Task
