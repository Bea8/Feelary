import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components'

function Photos() {
    const [images, setImages] = useState("hello world");

    return (
        <styledPhotos>
            <h1>Photo Gallery</h1>
            
        </styledPhotos>
    );
}

const styledPhotos = styled.div`
    background: aqua;
    font-size: 18px;
    padding: 30px;
    text-align: center:
`

ReactDOM.render(<Photos />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
