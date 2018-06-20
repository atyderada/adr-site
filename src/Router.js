import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import App from './App'

const router = (props) => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default router;