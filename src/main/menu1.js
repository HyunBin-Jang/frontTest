import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Menu1({ onClose }) {
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromCookie = Cookies.get("userId");
        setUserId(userIdFromCookie);
    }, []);
    const goBack = () => {
            navigate(-1);  // -1은 이전 페이지를 의미
    };
    const handleLogout = async () => {
        try {
            // 로그아웃 API 호출
            await axios.post("/logout");
            document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            // 로그인 페이지로 리다이렉트
        } catch (error) {
            console.error("로그아웃 실패:", error);
            alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
    };
    return (
        <div>
            <div>
                <header>
                    <img src="/png/logo.png" alt="logo" className = "logo"/>
                    <h1>TRAVEL KIT</h1>
                    <img
                        src="/png/delete.png"
                        alt="close menu"
                        onClick={goBack}
                        className = "delete"
                    />
                </header>
                {userId ? (
                    <p>환영합니다, {userId}님!</p>
                ) : (
                    <p>로그인이 필요합니다.</p>
                )}
                <h3>
                    <a href="/mychecklist">나의 체크리스트</a>
                    <br/>
                    <br/>
                    <a href="/board">게시판</a>
                    <br/>
                    <br/>
                    <a href="/" onClick = {handleLogout}>로그아웃</a>
                    <br/>
                    <br/>
                </h3>
            </div>
        </div>
    );
}

export default Menu1;
