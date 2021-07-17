import React from 'react'
import styled from 'styled-components';


const FooterWrapper = styled.footer`
    display: flex;
    max-width: 80%;
    margin: auto;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                Created 💗 I.B.
            </Container>
        </FooterWrapper>
    )
}

export default Footer
