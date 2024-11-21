import React, {useEffect, useState} from "react";
import "./check.css";
import axios from "axios";


const CheckList = ({ checklistId }) => {
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [checklistInfo, setChecklistInfo] = useState(null);
    const [showInput, setShowInput] = useState(false); // 입력 칸 표시 여부
    const [newItem, setNewItem] = useState(""); // 새 준비물 값

    // API 호출로 체크리스트 데이터 가져오기
    useEffect(() => {
        const fetchChecklist = async () => {
            try {
                const response = await axios.get(
                    `/checklists/${checklistId}`
                );
                const apiData = response.data;
                // 체크리스트의 items를 상태에 저장
                setItems(apiData.checklistItems.map((item) => item.name));

                setChecklistInfo({
                    city: apiData.destination.city,
                    departureDate: apiData.departureDate,
                    arrivalDate: apiData.arrivalDate,
                });
            } catch (err) {
                setError("체크리스트를 불러오는 데 실패했습니다.");
            }
        };
        fetchChecklist();
    }, [checklistId]);

    // 로딩 상태
    if (!checklistInfo && !error) {
        return <div className="loading">로딩 중...</div>;
    }

    // 에러 상태
    if (error) {
        return <div className="error">{error}</div>;
    }

    // Add new item
    const addItem = (newItem) => {

    };
    const handleAddItem = async () => {
        if (newItem.trim() === "") {
            alert("준비물을 입력하세요!");
            return;
        }

        try {
            await axios.post(`/checklists/${checklistId}/items/add`, {
                name: newItem,
            });
            // 준비물 리스트 업데이트
            setItems((prevItems) => [...prevItems, newItem]);
            setNewItem("");
            setShowInput(false);
        } catch (err) {
            alert("준비물 추가에 실패했습니다.");
        }
    };

    return (
        <div className="container">
            <header>
                <h1>{checklistInfo.city}</h1>
                <p>{checklistInfo.departureDate} - {checklistInfo.arrivalDate}</p>
                <div className="notice-box" onClick={() => window.open("https://example.com", "_blank")}>
                    안전 공지 내용
                </div>
                <div className="weather">
                    <div className="day">
                        <p>10/16</p>
                        <img src="sunny.png" alt="Sunny" />
                        <p>8°</p>
                    </div>
                    <div className="day">
                        <p>10/17</p>
                        <img src="sunny.png" alt="Sunny" />
                        <p>9°</p>
                    </div>
                    <div className="day">
                        <p>10/18</p>
                        <img src="cloudy.png" alt="Cloudy" />
                        <p>9°</p>
                    </div>
                    <div className="day">
                        <p>10/19</p>
                        <img src="rain.png" alt="Rain" />
                        <p>10°</p>
                    </div>
                </div>
            </header>
            <div className="checklist">
                <h2>체크리스트</h2>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="checklist-item">
                                <input type="checkbox" id={`item-${index}`}/>
                                <label htmlFor={`item-${index}`}>{item}</label>
                            </li>
                        ))}
                    </ul>
                    {/* 추가 버튼 */}
                    <button
                        className="add-item"
                        onClick={() => setShowInput((prev) => !prev)}
                    >
                        + 추가
                    </button>
                    {/* 입력 칸 및 확인 버튼 */}
                    {showInput && (
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="준비물을 입력하세요"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                            />
                            <button onClick={handleAddItem}>확인</button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default CheckList;
