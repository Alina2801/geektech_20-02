import React from "react";
import "./style.css"
import Text from './components/Text'
import Content from './components/Content'
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    const headerPaths = [
        'Home', 'About', 'News'
    ]
    return (
        <div className="App">
            <Header paths={headerPaths}/>
            <Content>
                <div className='container'>
                    <Text/>
                </div>
            </Content>
            <Footer paths={headerPaths}/>
        </div>
    );
}

export default App;
