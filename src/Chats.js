import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
    <div className="chats">
        <Chat 
        name="Inês Brasil" 
        message="Alô, Alô! Graças a Deus."
        timestamp="12 seconds ago"
        profilePic="https://vamoscontextualizar.files.wordpress.com/2015/12/rtemagicc_08d072ae20.jpg?w=640"
        />
        <Chat 
        name="Michael Jackson" 
        message="Hee Heeeeeee!"
        timestamp="1 hour ago"
        profilePic="https://www.estrelando.com.br/uploads/2019/02/21/michael-jackson-ok-1550763542.jpg"
        />
        <Chat 
        name="Ratinho" 
        message="No sigilo?"
        timestamp="69 seconds ago"
        profilePic="https://rd1.com.br/wp-content/uploads/2021/08/20210803-rd1-programa-do-ratinho.jpg"
        />
        <Chat 
        name="Andressa Urach" 
        message="Adoro um 17!"
        timestamp="17 minutes ago"
        profilePic="https://s.yimg.com/ny/api/res/1.2/R3zeT69Zh328H2IFpP0o.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTUyNi4wMzk4ODYwMzk4ODY-/https://s.yimg.com/os/creatr-uploaded-images/2021-08/701f75f0-0297-11ec-9af7-a0bff0f313db"
        />
    </div>
    )
}

export default Chats
