import { useState } from 'react'
import styles from './footer-m.module.css'
import { SlArrowUp } from 'react-icons/sl'
import Link from 'next/link'

export default function FooterM() {
  const [toggles, setToggles] = useState({
    header: false,
  })

  const handleToggle = (target) => {
    setToggles({
      ...toggles,
      [target]: !toggles[target],
    })
  }
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.titleLinksWrapper}>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('menu')}
              >
                <p>Menu</p>
                <SlArrowUp
                  className={
                    toggles.menu
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.menu
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  露營商品租借
                </Link>
                <Link href="" className={styles.subTitle}>
                  營位訂位
                </Link>
                <Link href="" className={styles.subTitle}>
                  揪團
                </Link>
                <Link href="" className={styles.subTitle}>
                  會員中心
                </Link>
                <Link href="" className={styles.subTitle}>
                  購物車
                </Link>
                <Link href="" className={styles.subTitle}>
                  客服
                </Link>
              </div>
            </div>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('rent')}
              >
                <p>Rent</p>
                <SlArrowUp
                  className={
                    toggles.rent
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.rent
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  商品列表
                </Link>
                <Link href="" className={styles.subTitle}>
                  所有商品分類
                </Link>
                <Link href="" className={styles.subTitle}>
                  品牌館
                </Link>
              </div>
            </div>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('ground')}
              >
                <p>Ground</p>
                <SlArrowUp
                  className={
                    toggles.ground
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.ground
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  營地列表
                </Link>
                <Link href="" className={styles.subTitle}>
                  營區地圖
                </Link>
                <Link href="" className={styles.subTitle}>
                  所有營地主
                </Link>
              </div>
            </div>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('group')}
              >
                <p>Group</p>
                <SlArrowUp
                  className={
                    toggles.group
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.group
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  揪團列表
                </Link>
                <Link href="" className={styles.subTitle}>
                  新增揪團
                </Link>
              </div>
            </div>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('coupon')}
              >
                <p>Coupon</p>
                <SlArrowUp
                  className={
                    toggles.coupon
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.coupon
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  優惠券列表
                </Link>
                <Link href="" className={styles.subTitle}>
                  領取優惠券
                </Link>
                <Link href="" className={styles.subTitle}>
                  使用方式
                </Link>
              </div>
            </div>
            <div className={styles.titles}>
              <div
                className={styles.mainTitle}
                onClick={() => handleToggle('help')}
              >
                <p>Help</p>
                <SlArrowUp
                  className={
                    toggles.help
                      ? `${styles.arrow} ${styles.open}`
                      : `${styles.arrow}`
                  }
                />
              </div>
              <div
                className={
                  toggles.help
                    ? `${styles.footerLinks} ${styles.open}`
                    : `${styles.footerLinks}`
                }
              >
                <Link href="" className={styles.subTitle}>
                  顧客服務
                </Link>
                <Link href="" className={styles.subTitle}>
                  問與答
                </Link>
                <Link href="" className={styles.subTitle}>
                  服務條款
                </Link>
                <Link href="" className={styles.subTitle}>
                  隱私條款
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.whiteLine}></div>
          <div className={styles.footerBottom}>
            <svg
              className={styles.headerLogo}
              xmlns="http://www.w3.org/2000/svg"
              width={160}
              height={16}
              fill="none"
              viewBox="0 0 160 16"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#f5f5f7"
                  d="M15.721 4.142c-1.627-1.68-4.028-1.929-5.313-1.929C7.194 2.213 3.76 3.734 3.76 8s3.433 5.787 6.654 5.787c1.285 0 3.685-.25 5.313-1.93l.15-.158 1.183.65-.26.276c-1.689 1.805-4.465 2.883-7.433 2.883C4.828 15.508 0 12.874 0 8 0 3.126 4.828.492 9.368.492c2.968 0 5.751 1.078 7.427 2.883l.26.276-1.184.65-.15-.159ZM28.816.547c1.033 0 1.675.401 1.97 1.217h.006c1.272 3.733 3.932 8.227 7.693 12.997l.377.478H34.58l-.09-.125C31.443 10.8 29.186 6.79 27.778 3.209c-1.573 3.975-3.727 7.888-6.544 11.905l-.09.124h-1.79l.341-.47c2.981-4.106 5.402-8.483 7.187-13.01.314-.837.903-1.21 1.935-1.21Zm27.845 0c-.403 0-.937.07-1.436.616l-4.24 4.39-.017.017c-.154.156-.501.508-.653.508-.04 0-.109-.014-.198-.104L45.85 1.467c-.608-.643-1.197-.92-1.962-.92-1.108 0-1.826.602-1.826 1.542v13.15h1.456V3.527l4.288 4.438c.39.395.84.581 1.381.581.609 0 1.067-.263 1.792-1.03l4.205-4.362v12.084h3.317V2.061c0-.917-.722-1.511-1.84-1.514Z"
                />
                <path
                  fill="#f5f5f7"
                  fillRule="evenodd"
                  d="M69.291 1.764c1.519-.657 2.866-.94 4.52-.94 4.808 0 7.673 2.343 7.673 6.104s-2.865 6.098-7.481 6.098c-2.387 0-4.315-.608-5.642-1.756v3.969h-3.316V1.48c0-.595.349-.934.97-.934.507 0 .849.25 1.136.83.26.49.588.747.971.747.26 0 .622-.111 1.17-.36Zm-.93 2.192v5.33c1.026 1.452 2.893 2.316 5.013 2.316 3.125 0 5.067-1.84 5.067-4.68 0-2.842-1.935-4.681-4.93-4.681-1.867 0-4.049.733-5.15 1.715Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#f5f5f7"
                  d="M100.973.547c-.404 0-.937.07-1.436.616l-4.24 4.39-.017.017c-.154.156-.502.508-.653.508-.041 0-.11-.014-.198-.104l-4.267-4.507c-.61-.643-1.197-.92-1.963-.92-1.108 0-1.819.602-1.819 1.542v13.15h1.457V3.527l4.287 4.438c.39.395.841.581 1.381.581.609 0 1.067-.263 1.792-1.03l4.206-4.362v12.084h3.316V2.061c0-.92-.725-1.514-1.846-1.514Zm14.688 0c1.033 0 1.676.401 1.97 1.217h.006c1.272 3.733 3.932 8.227 7.693 12.997l.376.478h-4.28l-.089-.125c-3.05-4.314-5.307-8.324-6.715-11.905-1.573 3.975-3.727 7.888-6.544 11.905l-.089.124h-1.792l.342-.47c2.981-4.106 5.402-8.483 7.187-13.01.315-.837.903-1.21 1.935-1.21Zm10.654 1.749h5.197V15.24h3.317V2.296h5.197V.824h-13.711v1.472Z"
                />
                <path
                  fill="#f5f5f7"
                  fillRule="evenodd"
                  d="M151.774.547c4.841 0 8.219 3.063 8.219 7.453l.007-.014v.297h-12.958c.136 3.381 2.537 5.8 5.805 5.8 2.271 0 4.671-1.16 5.573-2.702l.144-.242 1.176.643-.171.27c-1.415 2.232-4.027 3.456-7.358 3.456-5.258 0-8.93-3.146-8.93-7.48 0-4.335 3.651-7.48 8.493-7.48Zm-4.712 6.326h9.416c-.123-2.897-1.99-4.888-4.656-4.888-2.667 0-4.63 2.04-4.76 4.888Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 .492h160v15.016H0z" />
                </clipPath>
              </defs>
            </svg>
            <p className="mb-0">© 2024 Campmate. All Rights Reserved.</p>
            <div className={styles.footerBottomIconGroup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  fill="#F5F5F7"
                  d="M24.219 12.11c0-6.69-5.42-12.11-12.11-12.11C5.42 0 0 5.42 0 12.11c0 6.043 4.428 11.053 10.217 11.962V15.61H7.141v-3.5h3.076V9.44c0-3.034 1.807-4.71 4.574-4.71 1.325 0 2.711.236 2.711.236v2.978h-1.527c-1.504 0-1.973.934-1.973 1.891v2.273h3.358l-.537 3.5H14v8.463c5.79-.909 10.218-5.919 10.218-11.963Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#F5F5F7"
                  d="M10.937 5.426a5.601 5.601 0 0 0-5.61 5.61 5.601 5.601 0 0 0 5.61 5.61 5.602 5.602 0 0 0 5.61-5.61 5.601 5.601 0 0 0-5.61-5.61Zm0 9.258a3.654 3.654 0 0 1-3.648-3.648 3.65 3.65 0 0 1 3.648-3.647 3.651 3.651 0 0 1 3.647 3.647 3.654 3.654 0 0 1-3.647 3.648Zm7.148-9.488c0 .728-.586 1.309-1.309 1.309a1.309 1.309 0 1 1 1.309-1.309Zm3.716 1.328c-.083-1.753-.484-3.305-1.768-4.585C18.753.66 17.201.26 15.448.172 13.642.069 8.227.069 6.42.172c-1.748.083-3.3.483-4.585 1.763C.551 3.214.155 4.767.067 6.52c-.102 1.806-.102 7.221 0 9.028.083 1.753.484 3.306 1.768 4.585 1.284 1.28 2.832 1.68 4.585 1.767 1.807.103 7.222.103 9.028 0 1.753-.083 3.306-.483 4.585-1.767 1.28-1.28 1.68-2.832 1.768-4.585.102-1.807.102-7.217 0-9.024Zm-2.334 10.962a3.693 3.693 0 0 1-2.08 2.08c-1.44.572-4.859.44-6.45.44-1.592 0-5.015.127-6.45-.44a3.693 3.693 0 0 1-2.08-2.08c-.572-1.44-.44-4.858-.44-6.45 0-1.592-.127-5.015.44-6.45a3.693 3.693 0 0 1 2.08-2.08c1.44-.571 4.858-.44 6.45-.44 1.591 0 5.014-.127 6.45.44a3.692 3.692 0 0 1 2.08 2.08c.571 1.44.44 4.858.44 6.45 0 1.592.131 5.015-.44 6.45Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={18}
                fill="none"
                viewBox="0 0 25 18"
              >
                <path
                  fill="#F5F5F7"
                  d="M23.858 3.31a2.978 2.978 0 0 0-2.096-2.109c-1.848-.498-9.26-.498-9.26-.498s-7.413 0-9.262.498a2.978 2.978 0 0 0-2.095 2.11C.649 5.17.649 9.053.649 9.053s0 3.882.496 5.742a2.934 2.934 0 0 0 2.095 2.076c1.849.498 9.261.498 9.261.498s7.413 0 9.261-.498a2.934 2.934 0 0 0 2.096-2.076c.495-1.86.495-5.742.495-5.742s0-3.882-.495-5.742Zm-13.78 9.267V5.53l6.194 3.524-6.195 3.524Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#F5F5F7"
                  d="M13.411 8.507v3.472a.154.154 0 0 1-.156.156h-.557a.161.161 0 0 1-.127-.064L10.98 9.923v2.06a.154.154 0 0 1-.157.157h-.556a.154.154 0 0 1-.157-.157V8.512c0-.088.069-.157.157-.157h.551c.05 0 .103.025.127.069l1.592 2.148v-2.06c0-.088.068-.157.156-.157h.557a.154.154 0 0 1 .161.152ZM9.407 8.35h-.556a.154.154 0 0 0-.157.156v3.472c0 .087.069.156.157.156h.556a.154.154 0 0 0 .156-.156V8.507a.157.157 0 0 0-.156-.156Zm-1.343 2.91H6.546V8.507a.154.154 0 0 0-.156-.156h-.557a.154.154 0 0 0-.156.156v3.472a.14.14 0 0 0 .044.107.165.165 0 0 0 .107.044H8.06a.154.154 0 0 0 .156-.156v-.557a.156.156 0 0 0-.152-.156Zm8.277-2.91h-2.232a.157.157 0 0 0-.156.156v3.472c0 .083.069.156.156.156h2.232a.154.154 0 0 0 .156-.156v-.557a.154.154 0 0 0-.156-.156h-1.519v-.586h1.519a.154.154 0 0 0 .156-.157v-.561a.154.154 0 0 0-.156-.156h-1.519V9.22h1.519a.154.154 0 0 0 .156-.157v-.556c-.005-.083-.073-.156-.156-.156ZM22 4.088v13.93c-.005 2.188-1.797 3.96-3.99 3.956H4.08c-2.187-.005-3.96-1.802-3.955-3.99V4.054C.13 1.866 1.927.094 4.115.099h13.93c2.187.005 3.96 1.797 3.955 3.989Zm-3.008 5.986c0-3.564-3.574-6.465-7.964-6.465-4.39 0-7.964 2.9-7.964 6.465 0 3.194 2.832 5.87 6.66 6.377.933.2.826.542.616 1.797-.034.2-.161.786.688.43.85-.357 4.585-2.7 6.26-4.624 1.152-1.27 1.704-2.554 1.704-3.98Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
