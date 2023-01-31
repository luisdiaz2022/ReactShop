import React from 'react';
import '../styles/NotFound.scss';
import img1 from '../images/imagen1.jpg';

const NotFound = () => {
    return ( 
        <div className="form-container">
            <img src={img1} alt="error" className="logo"/> 
            <h1 className="title">Algo Malio Sal</h1>
            <p className="subtitle">error 404</p>
        </div>
     );
}
 
export default NotFound;