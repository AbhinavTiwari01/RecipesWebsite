import React, { useState } from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import image from '../Images/image.jpg'
import { addUser } from '../services/api';
import {useNavigate} from 'react-router-dom';

const Component = styled(Box)`
width : 400px;
margin : auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
padding : 25px 35px;
display : flex;
flex : 1;
flex-direction : column;
& > div, & > button , & > p{
    margin-top : 20px;
}
`
const LoginButton = styled(Button)`
text- transform : none;
background: #FB641B;
color: #fff;
border-radius: 2px;
`
const SignUpButton = styled(Button)`
text- transform : none;
background: #fff;
color: #2874f0;
height:48px
border-radius: 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
color : #878787;
font-size: 16px;
`
const defaultValues = {
    name: '',
    username: '',
    email: '',
    password: ''
}

const Register = () => {

    const navigate = useNavigate();

    const [register, setRegister] = useState(defaultValues);

    const onValueChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    }

    const submitData = async() => {
        if( register.name==='' || register.email==='' || register.username==='' || register.password===''){
            alert("Please enter all fields");
        }

        else{
        await addUser(register);
        navigate('/');
        }
    }

    return (
        <div style= {{marginTop: 64, marginBottom:64}}>

        <Component>
            <Box>
                <Image src={image} alt='login' width='80px' height='100px' />
                <Wrapper>
                    <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='name' label='Enter Name' />
                    <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='username' label='Enter username' />
                    <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='email' label='Enter Email' />
                    <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='password' label='Enter password' />
                    <SignUpButton onClick={()=> {submitData()}}>SignUp</SignUpButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <LoginButton variant='contained' href='/'>Already have an acccount</LoginButton>
                </Wrapper>

            </Box>
        </Component>
        </div>
    )
}

export default Register;