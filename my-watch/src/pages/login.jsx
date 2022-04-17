import React from "react";
import {
    FormControl,
    InputGroup,
    Button

} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visibility: false
        }
    }
    render(){
        const {visibility} = this.setState
        return(
            <div style={styles.cont} >
                <div style={styles.contForm} >
                    <h1>Hello,</h1>
                    <h3 className="mb-4">Welcome Back!</h3>
                    <label>Username</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i class="fad fa-user"></i>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Input Here"
                            />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" onClick={() => this.setState({visibility : !visibility})}>
                        {visibility ? <i class="far fa-eye"></i> : <i class="far fa-eye-slash"></i>}
                            
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Input Here"
                            type={visibility ? "text":"password"}
                            />
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button variant="primary" style={styles.button}>Login</Button>
                    </div>
                    <p style={styles.goToRegis}>Do You Have an Acount? <Link style={{color: 'navy', fontWeight: 'bold'}} to="/register" >Register</Link></p>
                </div>
            </div>
        )
    }
}

const styles ={
    cont:{
        backgroundImage: 'url(https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80)',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'

    },
    contForm: {
        width: '30vw',
        height: '65vh',
        marginTop: '20vh',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7',
        padding: '2%'

    },
    contButton:{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        padding: '1%'
    },

    button:{
        backgroundColor: '#00675b',
        border: 'none',
        color: 'white',
        margin: 'auto'
    },

    goToRegis:{
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default LoginPage