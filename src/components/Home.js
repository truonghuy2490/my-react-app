import { useState, useEffect } from "react";

function Home(prop) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [clickedTime, setClickedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        // clear it after set
        return () => clearInterval(interval);
    }, []);

    const clickGame = () => {
        const newCount = clickedTime + 1;
        setClickedTime(newCount);
        console.log("Click count:", clickedTime)
        if (newCount % 15 === 0) {
            alert("FizzBuzz");
        } else if (newCount % 5 === 0) {
            alert("Buzz");
        } else if (newCount % 3 === 0) {
            alert("Fizz");
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome {prop.Title}. It is {time}</h2>
            <button onClick={clickGame}>Clicky Game</button>
        </div>
    );
}

export default Home;