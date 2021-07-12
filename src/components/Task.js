import React from 'react'
import styled from 'styled-components';

const Element = styled.li`
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

const Task = ({task}) => {
    return (
        <Element>
            <Wrapper>
                <i class="far fa-trash-alt"></i>
                <i class="far fa-edit"></i>
                <i class="far fa-check-circle"></i>
            </Wrapper>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
        </Element>
    )
}

export default Task
