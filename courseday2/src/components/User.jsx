import Button from '@mui/material/Button';

const User = (props) =>{
    return (
        <div style={{border: '5px dotted black', padding: '10px', margin: '10px', fontWeight: 'bold'}}>
            User
            <Button variant="contained" color="primary">Button</Button>
        </div>
    )
}

export default User;