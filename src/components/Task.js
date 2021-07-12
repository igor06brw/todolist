import React from 'react'
import styled from 'styled-components';

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
    & > i:nth-of-type(2) {
        color: orange;
    }
    & > i:last-of-type {
        color: green;
    }
`

const Task = ({task}) => {
    return (
        <Element>
            <Icons>
                <i class="far fa-trash-alt"></i>
                <i class="far fa-edit"></i>
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
