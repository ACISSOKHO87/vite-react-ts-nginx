import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const fetchCount = async () => {
        try {
            const response = await fetch("api/count");
            console.log(response);
            if (response.ok) {
                setCount(await response.json());
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCount();
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                count is {count}
                <p>
                    Edit <code>src/App.tsx</code> and save to update and test
                    HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
