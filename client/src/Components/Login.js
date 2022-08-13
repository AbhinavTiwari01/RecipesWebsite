import React, {useState} from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import image from '../Images/image.jpg'
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

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
    username: '',
    password: ''
}

const Login = ({setLoginUser}) => {

    const navigate = useNavigate();

    const [login, setLogin] = useState(defaultValues);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginButton = () => {
        Axios.post('http://localhost:8080/login', login).then(
            res=>{
                alert(res.data.message);
                setLoginUser(res.data.user);
                navigate('/home');
            }
        )
    }

    return (
        <div style= {{marginTop: 64, marginBottom:64}}>
        <Component>
            <Box>
                <Image src={image} alt='login' width='80px' height='100px' />
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='username' label='Enter username' />
                            <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='password' label='Enter password' type='password' />
                            <LoginButton variant='contained' onClick={()=>{loginButton()}}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>Do not have an account?</Text>
                            <SignUpButton href='/register'>Click Here</SignUpButton>
                        </Wrapper>
                
            </Box>
        </Component>
        </div>
    )
}

export default Login