import React from 'react';
import './select.css';

function Select() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">새로운 체크리스트</h1>
      </header>

      <form>
        <h2>여행지를 선택해 주세요</h2>
        <h3>여행 목적지(도시 이름)를 검색 목록에서 선택해 주세요.</h3>
      </form>

      <section className="content">
        <div className="search-box">
          <input type="text" className="search-input" placeholder="여행 도시를 입력하세요." />
          <button className="search-button">🔍</button>
        </div>
      </section>
    </div>
  );
}

export default Select;
