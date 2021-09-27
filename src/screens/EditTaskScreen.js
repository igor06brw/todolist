import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { editTask } from '../actions/taskActions';


const ModalContainer = styled.div`
    display:flex;
    background: rgba(0,0,0,0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    z-index: 1;
`

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 50vw;
    max-width: 400px;
    height: 40%;
    border-radius: 1em;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 20px;
    width: 70%;

    &:last-of-type {
        align-items: center;
    }
`
const Label = styled.label`
    padding: 0.2em 12%;
`
const InputField = styled.input`
width: 100%;
    font-size: 1.1em;
    color: ${props => props.theme.textWhiteColor};
    text-align: center;
    height: 2em;
    border: none;
    border-radius: 2em;
    background-color: #777;
    line-height: normal;
`
const TextField = styled.textarea`
    height: 4em;
    width: 100%;
    resize: none;
    font-size: 1em;
    color: ${props => props.theme.textWhiteColor};
    text-align: center;
    border: none;
    border-radius: 1em;
    background-color: #777;
    line-height: normal;
    padding: 0.5em
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

const CloseModal = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
`

const CloseModalButton = styled.button`
    border: 0;
    background: none;
    cursor: pointer;
`
const CloseModalIcon = styled.i`
    font-size: 1.6em;
    color: red;
`


const EditTaskScreen = (data) => {
    const [id, setId] = useState(data.location.state._id);
    const [title, setTitle] = useState(data.location.state.title);
    const [description, setDescription] = useState(data.location.state.description);

    const history = useHistory();
    const dispatch = useDispatch();

    console.log(title, description)


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editTask({_id: id, title, description}));
        history.goBack();
    }

    return (
        <ModalContainer>
            <ModalBox>
                <Heading>Edit Task</Heading>
                <CloseModal>
                    <CloseModalButton onClick={history.goBack}>
                        <CloseModalIcon className="far fa-times-circle"></CloseModalIcon>
                    </CloseModalButton>
                </CloseModal>
                <Form onSubmit={submitHandler}>
                    <InputContainer>
                        <Label>Title</Label>
                        <InputField type="text" placeholder="Enter Title" defaultValue={data.location.state.title} onChange={(e) => setTitle(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Description</Label>
                        <TextField type="textarea" placeholder="Enter Description"  defaultValue={data.location.state.description} onChange={(e) => setDescription(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Submit type="submit">Add task</Submit>   
                    </InputContainer>   
                </Form>
            </ModalBox>
        </ModalContainer>
    )
}

export default EditTaskScreen
