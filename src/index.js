import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from 'context/context';
import App from 'App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="7e599842-f481-49d3-96cc-5f951812310e" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));
