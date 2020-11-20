import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
    const videoURL = 'https://www.youtube.com/watch?v=TfTl3HLedw0';

    return (
        <>
            <Router>
                <Routes />
            </Router>
            <GlobalStyle />
        </>
    );
}

export default App;
