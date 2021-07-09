import React from 'react'
import styled from 'styled-components';

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

const DisplayTaskScreen = () => {
    return (
        <Container>
            <List>
                <Element>
                    <Wrapper>
                        <h3>Task 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Wrapper>
                </Element>
                <Element>
                    <Wrapper>
                        <h3>Task 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Wrapper>
                </Element>
                <Element>
                    <Wrapper>
                        <h3>Task 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Wrapper>
                </Element>
            </List>
        </Container>
    )
}

export default DisplayTaskScreen
