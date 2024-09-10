import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/group-camping/event-list.module.scss'
// components
import Header from '@/components/template/header'
import Footer from '@/components/template/footer'

export default function EventDetail() {
  return (
    <>
      <Header />
      <h1>團露詳細頁</h1>
      <Footer />
    </>
  )
}
