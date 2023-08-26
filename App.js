// App.js
import React from 'react';
import Sidebar from './Sidebar';
import './App.css';


const App = () => {
    const handleRequestTimeOff = () => {
        console.log('Time off requested');

    };
    return ( <
        div className = "app" >
        <
        Sidebar / >
        <
        h1 className = "page-heading" > Time Off < /h1> <
        main className = "content" >
        <
        button className = "request-button"
        onClick = { handleRequestTimeOff } >
        Request Time Off <
        /button>

        <
        div className = "grid-item1" > < b > content 1 < /b> < /div > <
        div className = "grid-item2" > < b > content 2 < /b>< /div > <
        div className = "grid-item3" > < b > content 3 < /b>  < /div > <
        div className = "grid-item4" > < b > content 4 < /b>  < /div > < /
        main > <
        /div>
    );
};



export default App;