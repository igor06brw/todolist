import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
    background: #AAA;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 1;
    }
`

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 20vw;
`

const CreateTaskScreen = () => {
    return (
        <ModalContainer>
            <ModalBox>
                Create Task Screen
            </ModalBox>
        </ModalContainer>
    )
}

export default CreateTaskScreen
