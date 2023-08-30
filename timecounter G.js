@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

body {
    font-family: 'Playball', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #f06, #9f6);
    color: #fff;
}

.timer-container {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.4);
    backdrop-filter: blur(10px);
}

#display {
    font-size: 4em;
    color: #ffffff;
    margin-bottom: 20px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}

button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    background-color: #ffffff;
    color: #f06;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

button:hover {
    background-color: #ffc0cb;
    transform: translateY(-5px);
}

footer {
    position: absolute;
    bottom: 2%;
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #ffc0cb;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

span {
    color: #ffffff;
}
