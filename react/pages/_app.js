import { useEffect } from 'react'
// 樣式
import '@/styles/globals.scss'
import '@/styles/product.scss'
import '@/styles/cart.scss'
import '@/styles/loader.scss'
// template 樣式
import '@/styles/sidebar.css'
// 日曆樣式
import '@/styles/calender.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 載入購物車context
import { CartProvider } from '@/hooks/use-cart-state'
// 載入認証用context
import { AuthProvider } from '@/hooks/use-auth'
// 載入動畫context
import { LoaderProvider } from '@/hooks/use-loader'
// 載入搜尋共用 context
import SearchProvider from '@/hooks/use-search'

import DefaultLayout from '@/components/layout/default-layout'
// 自訂用載入動畫元件
import { CatLoader, NoLoader } from '@/hooks/use-loader/components'

export default function MyApp({ Component, pageProps }) {
  // 導入bootstrap的JS函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 不知道為什麼打開會都是預設畫面，先comment
  // 使用預設排版檔案，對應`components/layout/default-layout/index.js`
  // 或`components/layout/default-layout.js`
  // const getLayout =
  //   Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  const getLayout = Component.getLayout || ((page) => page)

  return (
    // 這個打開會報錯，也先comment起來
    // <AuthProvider>
    <LoaderProvider close={2} CustomLoader={CatLoader}>
      <CartProvider>
        <SearchProvider>
          {getLayout(<Component {...pageProps} />)}
        </SearchProvider>
      </CartProvider>
    </LoaderProvider>
    // </AuthProvider>
  )
}
