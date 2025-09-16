import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import NewsList from '@/pages/news-list/NewsList'
import NewsDetail from '@/pages/news-detail/NewsDetail'
import { useAppSelector } from './store/store.hooks'
import { getCustomTheme } from '@/shared/config/antd-theme'
import { ThemeToggle } from '@/features/theme/theme-toggle/ThemeToggle'
import { selectTheme } from './store/selectors'
import styles from './styles/App.module.scss'

const { Header, Content } = Layout

export default function App () {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme.mode)
  }, [theme.mode])

  return (
    <ConfigProvider theme={getCustomTheme(theme)}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Link to='/' className={styles.logo}>
            <span className={styles.logoIcon}>Y</span>
            <span className={styles.logoText}>Hacker News</span>
          </Link>

          <div className={styles.headerRight}>
            <ThemeToggle />
          </div>
        </Header>
        <Content className={styles.content}>
          <Routes>
            <Route path='/' element={<NewsList />} />
            <Route path='/item/:id' element={<NewsDetail />} />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}