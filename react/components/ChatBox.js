import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/chatbox.module.css'



export default function ChatBox() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const messagesEndRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const user = "User"; // 替換為動態獲取的使用者名稱
            const sender = "User"; //修改為發送者的名稱，客服可以用不同的名稱
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: input, user: sender, time: formattedTime }
            ])
            setInput('')
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <div className={styles.container}>
                <h2>客服對話框</h2>
                <div className={styles.box}>
                    {/* 對話內容範圍 */}
                    <div className={styles.messageContainer}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${msg.user === 'User' ? styles.userMessage : styles.agentMessage}`}>
                                <div className={styles.messageUser}>{msg.user}</div>
                                <div className={styles.messageText}>{msg.text}</div>
                                <div className={styles.messageTime}>{msg.time}</div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} /> {/* 確保滾動到底部 */}
                    </div>
                </div>
                <form id='chat-form' onSubmit={handleSubmit} className={styles.form}>
                    <input type="text" id='chat-input' placeholder='輸入訊息' value={input} onChange={(e) => setInput(e.target.value)} autoComplete='off' />
                    <button type='submit' id='send-button' className={styles.button}>發送</button>
                </form>
            </div>
        </>
    )
}