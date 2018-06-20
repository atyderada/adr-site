import { HashRouter } from 'react-router-dom'
import React from 'react';
import App from './App'

const router = (props) => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
};

export default router;