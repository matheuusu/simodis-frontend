import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Content from '../../components/Content';


export default function Home() {
    return(
        <BrowserRouter>            
            <Menu/>    
        </BrowserRouter>        
    );
}
