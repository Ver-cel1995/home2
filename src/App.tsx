import './App.css';
import styled from 'styled-components';
import HW2 from "./s2-homeworks/hw02/HW2";


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <HW2/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;