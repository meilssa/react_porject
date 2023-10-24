import React from 'react'

function Questions() {
    return (
        <div className="container_email">
            <div className="email-container">
                <div className="email-list">
                    <ul id="email-list">
                    </ul>
                </div>
                <div className="email-form">
                    <form id="email-form">
                        <input type="text" id="name" placeholder="이름" />
                        <input type="text" id="recipient" placeholder="이메일" />
                        <input type="text" id="subject" placeholder="제목" />
                        <textarea id="message" placeholder="문의내용" style={{ resize: "none" }}></textarea>
                        <button type="submit">보내기</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Questions