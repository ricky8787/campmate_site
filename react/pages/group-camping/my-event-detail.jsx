import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/group-camping/event-list.module.scss'
// components
import Header from '@/components/template/header'
import Footer from '@/components/template/footer'

export default function MyEventDetail() {
  return (
    <>
      <Header />
      <h1>會員中心/我的團露/詳細頁</h1>
      <Footer />
    </>
  )
}
