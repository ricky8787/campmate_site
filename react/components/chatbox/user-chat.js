import React, { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'
import styles from '@/styles/chatbox/chatbox.module.css'

export default function UserChat({ onNewMessage }) {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const contentBoxRef = useRef(null)
  const userId = '1' // 假設 user_id 是 1，應動態設置此值

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/chat/history?user_id=${userId}`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const history = await response.json()
        console.log('Fetched history:', history) // 確認這裡是否有數據
        setMessages(history)
      } catch (error) {
        console.error('Failed to fetch chat history:', error)
      }
    }

    fetchChatHistory()

    const newSocket = io('http://localhost:3000', {
      query: { user_id: userId },
    })
    setSocket(newSocket)

    newSocket.on('connect_error', (err) => {
      console.error('Socket connection error:', err)
    })

    // 接收新消息
    newSocket.on('message', (message) => {
      if (message.user_id === userId) {
        setMessages((prevMessages) => [...prevMessages, message])
      }
      setIsSending(false)
      if (onNewMessage) {
        onNewMessage()
      }
    })

    // 清理 socket 連接
    return () => {
      newSocket.close()
    }
  }, [onNewMessage])

  const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getFormattedDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString([], {
      month: 'long',
      day: 'numeric',
    })
  }

  const handleSend = () => {
    if (input.trim() && !isSending) {
      setIsSending(true)
      const now = new Date()
      const newMessage = {
        text: input,
        user_id: userId,
        user: '使用者',
        created_at: now.toISOString(), // 使用 ISO 格式存儲時間戳
      }
      console.log('Sending message:', newMessage)

      if (socket) {
        socket.emit('message', newMessage, (response) => {
          if (response.error) {
            console.error('Error sending message:', response.error)
            alert('發送消息時出錯')
          } else {
            console.log('Message sent successfully')
          }
          setIsSending(false)
        })
      } else {
        console.error('Socket instance is not available')
        setIsSending(false)
      }

      setInput('')
    }
  }

  const getMessagesWithDates = () => {
    const messagesWithDates = []
    let lastDate = ''

    messages.forEach((msg) => {
      const currentDate = getFormattedDate(msg.created_at)

      if (currentDate !== lastDate) {
        messagesWithDates.push({
          type: 'date',
          date: currentDate,
        })
        lastDate = currentDate
      }

      messagesWithDates.push({
        ...msg,
        time: getFormattedTime(msg.created_at), // 格式化時間
        date: currentDate, // 格式化日期
      })
    })

    return messagesWithDates
  }

  // 滾動到最新消息
  useEffect(() => {
    if (contentBoxRef.current) {
      contentBoxRef.current.scrollTop = contentBoxRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className={styles.box}>
      <div className={styles.contentBox} ref={contentBoxRef}>
        {getMessagesWithDates().map((msg, index) =>
          msg.type === 'date' ? (
            <div key={index} className={styles.dateMessage}>
              {msg.date}
            </div>
          ) : (
            <div
              key={index}
              className={
                msg.user_id === userId
                  ? styles.userMessage
                  : styles.supportMessage
              }
            >
              <span className={styles.chatUser}>{msg.user} :</span>
              <div className={styles.chatContent}>{msg.text}</div>
              <span className={styles.chatTime}>{msg.time}</span>
            </div>
          )
        )}
      </div>
      <form
        className={styles.sendForm}
        id="chat-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }}
      >
        <input
          type="text"
          className={styles.sendInput}
          id="chat-input"
          placeholder="輸入訊息"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className={styles.sendBtn}
          id="send-button"
          onClick={handleSend}
          disabled={isSending}
        >
          發送
        </button>
      </form>
    </div>
  )
}
