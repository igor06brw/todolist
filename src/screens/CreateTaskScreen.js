import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
    background: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    z-index: 1;
    }
`

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 50vw;
    height: 35%;
    border-radius: 1em;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    width: 70%;
`
const Label = styled.label`
    padding: 0.2em 12%;
`
const InputField = styled.input`
    font-size: 1.1em;
    color: ${props => props.theme.textWhiteColor};
    text-align: center;
    height: 2em;
    border: none;
    border-radius: 2em;
    background-color: #777;
    line-height: normal;
    box-shadow: 0px -1px 10px -4px rgba(0,0,0,0.75);
    &:focus {
        outline: none;
    }

`
const Heading = styled.h2`
    font-size: 2em;
    text-align: center;
    margin: 0;
    color: ${props => props.theme.textColor}
`
const Submit = styled.button`
    border: none;
    border-radius: 2em;
    height: 40px;
    width: 40%;
    cursor: pointer;
    font-size: 0.7em;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.5);
    color: ${props => props.theme.textColor}
`

const CreateTaskScreen = () => {
    return (
        <ModalContainer>
            <ModalBox>
                <Heading>Create Task</Heading>
                <Form>
                    <InputContainer>
                        <Label>Title</Label>
                        <InputField />
                    </InputContainer>
                    <InputContainer>
                        <Label>Description</Label>
                        <InputField />
                    </InputContainer>
                    <InputContainer>
                        <Submit>Add task</Submit>   
                    </InputContainer>   
                </Form>
            </ModalBox>
        </ModalContainer>
    )
}

export default CreateTaskScreen
