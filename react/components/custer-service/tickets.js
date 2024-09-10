import { React, useState } from 'react'
import styles from '@/styles/tickets.module.css'
import UserChat from '@/components/chatbox/user-chat'

// icons
import { IoEyeOutline } from 'react-icons/io5'
import { MdOutlinePostAdd } from 'react-icons/md'
import { MdOutlineFactCheck } from 'react-icons/md'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaCalendarCheck } from 'react-icons/fa'
import { MdOutlineLowPriority } from 'react-icons/md'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'

const statusOrder = { 待回覆: 1, 已處理: 2, 處理中: 3 }

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  const [newMessageCount, setNewMessageCount] = useState(0) // 新訊息數量
  const [chatVisible, setChatVisible] = useState(false)

  // 彈出視窗
  const [showModal, setShowModal] = useState(false)
  const [showNestedModal, setShowNestedModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showChatModal, setShowChatModal] = useState(false)

  const handleChatModalOpen = () => {
    setShowChatModal(true)
    setNewMessageCount(0) // 打開聊天視窗後重置新訊息計數
  }

  // 更新新訊息計數
  const handleNewMessage = () => {
    setNewMessageCount((prev) => prev + 1)
  }

  // 切換聊天框顯示狀態
  const toggleChatVisibility = () => {
    setChatVisible((prevVisible) => !prevVisible)
    // 如果聊天框被顯示，重置新訊息計數
    if (!chatVisible) {
      setNewMessageCount(0)
    }
  }

  // 提交客服單表單
  const handleSubmit = (event) => {
    event.preventDefault()
    // 處理表單提交
    // console.log('客服單已提交');
    setShowModal(false)
  }

  // 分頁
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // 顯示客服單詳細資料
  const handleDetailClick = (ticket) => {
    setSelectedTicket(ticket)
    setShowDetailModal(true)
  }

  // 顯示選擇訂單編號
  const handleNestedModalClick = () => {
    setShowNestedModal(true)
  }

  const handleNestedModalClose = () => {
    setShowNestedModal(false)
  }

  // 排序狀態
  const [sortField, setSortField] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  const handleSort = (field) => {
    const newSortOrder =
      sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortField(field)
    setSortOrder(newSortOrder)
  }

  // 資料庫
  const data = [
    {
      id: '00001',
      orderId: 'AA000123',
      category: '營地相關',
      description: '環境髒亂環境髒亂環境髒亂環境髒亂環境髒亂環境髒亂環境髒亂環境髒亂',
      createTime: '2024/07/12',
      status: '已處理',
    },
    {
      id: '00002',
      orderId: 'AA000123',
      category: '營地相關',
      description: '環境髒亂...',
      createTime: '2024/07/09',
      status: '待回覆',
    },
    {
      id: '00003',
      orderId: 'BB000456',
      category: '用品租借相關',
      description: '用品破損用品破損用品破損用品破損用品破損用品破損用品破損用品破損',
      createTime: '2024/07/10',
      status: '處理中',
    },
    {
      id: '00004',
      orderId: 'CC000789',
      category: '費用相關',
      description: '退款問題...',
      createTime: '2024/07/11',
      status: '已處理',
    },
    {
      id: '00005',
      orderId: 'BB000457',
      category: '用品租借相關',
      description: '用品丟失...',
      createTime: '2024/07/12',
      status: '處理中',
    },
  ]

  const sortedData = [...data].sort((a, b) => {
    if (sortField === 'id' || sortField === 'orderId') {
      // 排序數字
      const numA = parseInt(a[sortField].replace(/[^\d]/g, ''), 10)
      const numB = parseInt(b[sortField].replace(/[^\d]/g, ''), 10)
      if (numA < numB) return sortOrder === 'asc' ? -1 : 1
      if (numA > numB) return sortOrder === 'asc' ? 1 : -1
    } else if (sortField === 'createTime') {
      // 排序日期
      const dateA = new Date(a[sortField])
      const dateB = new Date(b[sortField])
      if (dateA < dateB) return sortOrder === 'asc' ? -1 : 1
      if (dateA > dateB) return sortOrder === 'asc' ? 1 : -1
    } else if (sortField === 'status') {
      // 排序狀態
      const statusA = statusOrder[a[sortField]]
      const statusB = statusOrder[b[sortField]]
      if (statusA < statusB) return sortOrder === 'asc' ? -1 : 1
      if (statusA > statusB) return sortOrder === 'asc' ? 1 : -1
      if (statusA === statusB) {
        if (a.id < b.id) return sortOrder === 'asc' ? -1 : 1
        if (a.id > b.id) return sortOrder === 'asc' ? 1 : -1
      }
    } else {
      // 默認字母排序
      if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1
      if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1
    }
    return 0
  })

  return (
    <>
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          <button
            href="#"
            className={styles.addTicket}
            onClick={(e) => {
              e.preventDefault()
              setShowModal(true)
            }}
          >
            <MdOutlinePostAdd className={styles.addTicketIcon} />
          </button>
          <button
            className={styles.chatBtn}
            onClick={() => handleChatModalOpen()}
          >
            <IoChatboxEllipsesOutline className={styles.chatIcon} />
            {newMessageCount > 0 && (
              <span className={styles.badge}>{newMessageCount}</span>
            )}
          </button>
        </div>

        <div>
          <div>
            <table className={styles.tableStyle}>
              <thead className={styles.theadStyle}>
                <tr>
                  <th onClick={() => handleSort('id')}>客服單編號</th>
                  <th onClick={() => handleSort('orderId')}>訂單編號</th>
                  <th onClick={() => handleSort('category')}>問題分類</th>
                  <th>問題說明</th>
                  <th onClick={() => handleSort('createTime')}>建立時間</th>
                  <th onClick={() => handleSort('status')}>檢視狀態</th>
                  <th>查看詳細</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((ticket) => (
                  <tr key={ticket.id} className={styles.tdStyle}>
                    <td>{ticket.id}</td>
                    <td>{ticket.orderId}</td>
                    <td>{ticket.category}</td>
                    <td className={styles.CsDescription}>
                      {ticket.description}
                    </td>
                    <td>{ticket.createTime}</td>
                    <td className={styles.CsState}>
                      <div
                        className={
                          ticket.status === '待回覆'
                            ? styles.CsState1
                            : ticket.status === '處理中'
                            ? styles.CsState2
                            : styles.CsState3
                        }
                      >
                        {ticket.status}
                      </div>
                    </td>
                    <td>
                      <button
                        href=""
                        className={styles.checkBg}
                        onClick={() => handleDetailClick(ticket)}
                      >
                        <IoEyeOutline className={styles.checkIcon} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className={styles.pagination}>
          <button
            className={`${styles.pageItem} ${
              currentPage === 1 ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`${styles.pageItem} ${
                currentPage === index + 1 ? styles.active : ''
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`${styles.pageItem} ${
              currentPage === totalPages ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div> */}
      </div>

      {/* 新增客服單 */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formTitle}>聯絡我們</div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketEmail">電子郵件*</label>
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="請輸入您的Email"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketPhone">連絡電話*</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    maxLength="11"
                    pattern="09\d{8}"
                    placeholder="請輸入您的電話"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketOrderNum">訂單編號</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="請輸入或選擇您的訂單編號"
                  />
                  <div
                    className={styles.checkBg}
                    onClick={handleNestedModalClick}
                    role="button"
                    tabIndex={0} // 使 div 成為可聚焦的元素
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNestedModalClick()
                      }
                    }}
                  >
                    <MdOutlineFactCheck className={styles.checkIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketCategory">問題分類*</label>
                  <select className={styles.formInput} required>
                    <option className={styles.optionTextDefault} value="">
                      請選擇問題分類
                    </option>
                    <option value="option1">營地相關</option>
                    <option value="option2">用品租借相關</option>
                    <option value="option3">費用相關</option>
                    <option value="option4">網站操作相關</option>
                    <option value="option5">其他</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroupExplain}>
                <div className={styles.formQusExplain}>
                  <label htmlFor="ticketOrderNum">問題說明*</label>
                  <textarea
                    className={styles.formInputExplain}
                    id="description"
                    name="description"
                    placeholder="請詳細敘述問題"
                    required
                  ></textarea>
                </div>
              </div>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button type="submit" className={styles.submitButton}>
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 選擇訂單編號 */}
      {showNestedModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={handleNestedModalClose}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className={styles.ticketOrderNum}>
              <div className={styles.formTitle}>選擇訂單</div>
              <table striped bordered hover className={styles.orderNumTable}>
                <thead className={styles.orderThead}>
                  <tr>
                    <th>訂單編號</th>
                    <th>訂單成立時間</th>
                    <th>交易金額</th>
                    <th>選擇訂單</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button
                    className={styles.backButton}
                    onClick={handleNestedModalClose}
                  >
                    <MdOutlineLowPriority className={styles.backIcon} />
                    返回
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 客服單詳細 */}
      {showDetailModal && selectedTicket && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={() => setShowDetailModal(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <form className={styles.form}>
              <div className={styles.formTitle}>客服單詳細資料</div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketId">客服單編號</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.id}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="orderId">訂單編號</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.orderId}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="category">問題分類</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.category}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="description">問題說明</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.description}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="createTime">建立時間</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.createTime}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="status">客服單狀態</label>
                  <div className={styles.DetailContent}>
                    {selectedTicket.status}
                  </div>
                </div>
              </div>
              {/* 顯示客服回覆及回覆時間 */}
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="reply">客服回覆</label>
                  <div className={styles.DetailContent}>
                    {/* 可以顯示或是獲取客服回覆內容 */}
                    {selectedTicket.reply || '待回覆'}
                  </div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="replyTime">回覆時間</label>
                  <div className={styles.DetailContent}>
                    {/* 可以顯示回覆時間 */}
                    {selectedTicket.replyTime || '待回覆'}
                  </div>
                </div>
              </div>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button
                    className={styles.backButton}
                    onClick={() => setShowDetailModal(false)}
                  >
                    <MdOutlineLowPriority className={styles.backIcon} />
                    返回客服單列表
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 即時客服 */}
      {showChatModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalChatContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={() => setShowChatModal(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className={styles.modalChat}>
              <UserChat onNewMessage={handleNewMessage} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
