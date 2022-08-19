import React from "react"
import { Button} from '@mui/material';

const Homepage = ({setLoginUser}) => {

    return (
        <>
            <Button onClick={() => setLoginUser({})} variant='contained'>Logout</Button>
            <Button href='/allRecipe' style={{marginLeft: 500 }} variant='contained'>All Recipes</Button>
            <Button href='/add' style={{marginLeft: 400}} variant='contained'>Add Recipes</Button>

        </>
    )
}

export default Homepage
