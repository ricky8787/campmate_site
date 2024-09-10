const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const mysql = require('mysql2') // 使用 mysql2

const app = express()
const server = http.createServer(app)

app.use(
  cors({
    origin: 'http://localhost:3001', // 确保这个 URL 是你的前端正在使用的
    methods: ['GET', 'POST'],
    credentials: true,
  })
)

// API 路由來獲取聊天歷史記錄
app.get('/api/chat/history', (req, res) => {
  const userId = req.query.user_id || '1' // 從查詢參數中獲取用戶 ID，默認為 1
  const query =
    'SELECT text, user_id, TIME(created_at) as time, DATE(created_at) as date FROM chat_box WHERE user_id = ? ORDER BY created_at ASC'

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching messages from database:', err)
      return res
        .status(500)
        .json({ error: 'Database query error', details: err.message })
    }
    // 返回歷史消息作為 JSON 響應
    res.json(results)
  })
})

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001', // 配置Socket.IO的CORS
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

// 資料庫連結
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '12345',
  database: 'campmate_db',
})

db.connect((err) => {
  if (err) throw err
  console.log('Connected to MySQL database')
})

// 設置 socket.io
io.on('connection', (socket) => {
  console.log('A user connected')

  const userId = socket.handshake.query.user_id || '1' // 从查询参数获取用户 ID
  const query =
    'SELECT text, user_id, TIME(created_at) as time, DATE(created_at) as date FROM chat_box WHERE user_id = ? ORDER BY created_at ASC'

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching messages from database:', err)
      return
    }
    // 添加此行以检查服务器端的历史消息
    console.log('Sending history:', results)
    // 发送历史消息到客户端
    socket.emit('history', results)
  })

  // 接收訊息存到資料庫
  socket.on('message', (message) => {
    console.log('Received message:', message)
    const query =
      'INSERT INTO chat_box (text, user_id, created_at) VALUES (?, ?, NOW())' // 使用 NOW() 就是當前的時間
    db.query(query, [message.text, message.user_id], (err) => {
      if (err) {
        console.error('Error saving message to database:', err)
        return
      }
      console.log('Message saved to database')
      io.emit('message', message)
    })
  })

  // 当用户断开连接时
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

// 启动服务器
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
