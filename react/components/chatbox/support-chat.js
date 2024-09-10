import React, { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'
import styles from '@/styles/chatbox/supportChatbox.module.css'

export default function SupportChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const contentBoxRef = useRef(null)
  const socket = useRef(null) // 使用 useRef 儲存 socket 實例

  // 從 Cookie 中載入儲存的訊息
  useEffect(() => {
    socket.current = io('http://localhost:3000')

    // 載入儲存的消息
    const savedMessages = getCookie('supportChatMessages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }

    socket.current.on('message', (message) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message]
        setCookie('supportChatMessages', JSON.stringify(updatedMessages), 1)
        return updatedMessages
      })
      setIsSending(false)
    })

    // 請求歷史聊天紀錄
    socket.current.emit('requestHistory')

    // 清理 socket 連接
    return () => {
      if (socket.current) {
        socket.current.close()
      }
    }
  }, [])

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getFormattedDate = (date) => {
    return date.toLocaleDateString([], {
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
        sender: 'support',
        user: '客服',
        time: getFormattedTime(),
        date: now.toDateString(),
      }
      // 使用 socket.current 來發送消息
      if (socket.current) {
        socket.current.emit('message', newMessage)
      }
      setInput('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSend()
  }

  const getMessagesWithDates = () => {
    const messagesWithDates = []
    let lastDate = ''

    messages.forEach((msg) => {
      const currentDate = msg.date

      if (currentDate !== lastDate) {
        messagesWithDates.push({
          type: 'date',
          date: currentDate,
        })
        lastDate = currentDate
      }

      messagesWithDates.push(msg)
    })

    return messagesWithDates
  }

  useEffect(() => {
    if (contentBoxRef.current) {
      contentBoxRef.current.scrollTop = contentBoxRef.current.scrollHeight
    }
  }, [messages])

  // 使用 useEffect 來追蹤 input 值
  useEffect(() => {
    console.log('Input value:', input)
  }, [input])

  return (
    <div className={styles.container}>
      <h2 className={styles.titleStyle}>客服對話框</h2>
      <div className={styles.box}>
        <div className={styles.contentBox} ref={contentBoxRef}>
          {getMessagesWithDates().map((msg, index) =>
            msg.type === 'date' ? (
              <div key={index} className={styles.dateMessage}>
                {getFormattedDate(new Date(msg.date))}
              </div>
            ) : (
              <div
                key={index}
                className={
                  msg.sender === 'user'
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
          onSubmit={handleSubmit}
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
            type="submit"
            className={styles.sendBtn}
            id="send-button"
            disabled={isSending}
          >
            發送
          </button>
        </form>
      </div>
    </div>
  )
}

// 設定 Cookie
function setCookie(name, value, days) {
  if (typeof document !== 'undefined') {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/`
  }
}

// 獲取 Cookie
function getCookie(name) {
  if (typeof document !== 'undefined') {
    const nameEQ = `${name}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}
