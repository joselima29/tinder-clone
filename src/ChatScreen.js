import React, { useState } from 'react'
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Inês',
            image: 'https://vamoscontextualizar.files.wordpress.com/2015/12/rtemagicc_08d072ae20.jpg?w=640',
            message: 'Alô, Alô! Você sabe quem sou eu?'
        },
        {
            name: 'Inês',
            image: 'https://vamoscontextualizar.files.wordpress.com/2015/12/rtemagicc_08d072ae20.jpg?w=640',
            message: 'Sabe né...'
        },
        {
            message: 'Alô, Alô! Graças a Deus.'
        },
    ]);
    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message:input }]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH INÊS ON 20/08/2021</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen__input">  
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message..." 
                type="text"/>
                <button 
                onClick={handleSend}
                className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
        
    )
}



export default ChatScreen

