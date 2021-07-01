import React from 'react'

import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: flex;
    max-width: 80%;
    margin: auto;
    
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid ${props => props.theme.textColor};
`
const LogoWrapper = styled.div`

`
const Logo = styled.h2`
    font-size: 1.35em;
`

const NavList = styled.ul`
    display: flex;
    padding: 6px 0 6px 2em;

`
const NavListElement = styled.li`
    list-style-type: none;
    padding: 1px 0.5em;
`
const NavListLink = styled.a`
    text-decoration: none;
    font-size: 0.9em;
    color: ${props => props.theme.textColor};
    transition: all .3s ease-out;

    &:hover {

        color: ${props => props.theme.hoverTextColor};
    }
`
const ButtonLink = styled(NavListLink)`
    background-color: ${props => props.theme.buttonColor};
    padding: 5px 10px;
    border-radius: 1em;
`



const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <LogoWrapper>
                    <Logo>Todolist</Logo>
                </LogoWrapper>
                <nav>
                    <NavList>
                        {/* AFTER ADD ROUTER-DOM, CHANGE TO { Link } */}
                        <NavListElement>
                            <ButtonLink href="">Create Task</ButtonLink>
                            {/* // Assign icon "add" after implement font-awesome */}
                        </NavListElement>
                        <NavListElement>
                            <NavListLink href="">Unfinished Tasks</NavListLink>
                            {/* // Assign icon "time" after implement font-awesome */}
                        </NavListElement>
                        <NavListElement>
                            <NavListLink href="">Finished Tasks</NavListLink>
                            {/* // Assign icon "finish" after implement font-awesome */}
                        </NavListElement>
                    </NavList>
                </nav>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
