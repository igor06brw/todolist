import styled from 'styled-components'
import React from 'react'

const HeaderWrapper = styled.header`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    margin: auto;
`
const Container = styled.div`
    
`
const LogoWrapper = styled.div`

`
const Logo = styled.h2`
    font-size: 1.35em;
`


const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <div>
                    <Logo>Todolist</Logo>
                </div>
                <nav>
                    <ul>
                        {/* AFTER ADD ROUTER-DOM, CHANGE TO { Link } */}
                        <li>
                            <a href="">Create Task</a>
                            {/* // Assign icon "add" after implement font-awesome */}
                        </li>
                        <li>
                            <a href="">Unfinished Tasks</a>
                            {/* // Assign icon "time" after implement font-awesome */}
                        </li>
                        <li>
                            <a href="">Finished Tasks</a>
                            {/* // Assign icon "finish" after implement font-awesome */}
                        </li>
                    </ul>
                </nav>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
