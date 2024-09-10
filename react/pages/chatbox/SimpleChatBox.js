import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import styles from '@/styles/simpleChatbox.module.css'

// 設置 WebSocket 服務器地址
const socket = io('http://localhost:4000')

export default function ChatBox() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  // 當組件加載時，設置 WebSocket 事件監聽器
  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })

    // 清理 WebSocket 連接
    return () => {
      socket.off('message')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      const now = new Date()
      const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      const user = 'User' // 替換為動態獲取的使用者名稱
      const message = { text: input, user: user, time: formattedTime }

      // 發送消息到 WebSocket 服務器
      socket.emit('message', message)
      setInput('')
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className={styles.container}>
      <h2>即時對話框</h2>
      <div className={styles.chatArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.user === 'User' ? styles.userMessage : styles.agentMessage
            }`}
          >
            <div className={styles.messageText}>{msg.text}</div>
            <div className={styles.messageTime}>{msg.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* 確保滾動到底部 */}
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="輸入訊息"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          發送
        </button>
      </form>
    </div>
  )
}
