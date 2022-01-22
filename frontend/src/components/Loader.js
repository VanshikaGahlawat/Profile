import React from 'react'
import {Spinner} from 'react-bootstrap';

const Loader = () =>{
    
    return (<Spinner 
        animation='border'
        role='status'
        style={{width:'15rem', height:'15rem', margin:'17rem auto auto auto', display:'block'}}
    >
    </Spinner>
    )
}

export default Loader;
