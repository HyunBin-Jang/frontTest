import React from "react";
import styles from "./style.css";

function Menu2({ onClose }) {
    return (
        <div>
            <div>
                <header>
                    <img src="/png/logo.png" alt="logo" className = "logo"/>
                    <h1>TRAVEL KIT</h1>
                    <img
                        src="/png/delete.png"
                        alt="close menu"
                        onClick={onClose}
                        className = "delete"
                    />
                </header>
                    <h3>
                        <a href="/mychecklist">나의 체크리스트</a>
                        <br />
                        <a href="/board">게시판</a>
                        <br />
                        <a href="/login">로그인</a>
                    </h3>
            </div>
        </div>
    );
}

export default Menu2;
