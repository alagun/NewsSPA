import React, { useState, useMemo } from 'react'
import { List, Button, Spin, Pagination, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import formatDate from '@/shared/lib/formatDate'
import { useGetItemQuery, useGetNewStoriesIdsQuery } from '@/features/hacker-news-api/hackerNewsApi'
import styles from './NewsList.module.scss'

const { Text } = Typography

const PAGE_SIZE = 10

const NewsRow: React.FC<{ id: number }> = ({ id }) => {
  const { data: item, isLoading } = useGetItemQuery(id)

  if (isLoading) {
    return (
      <List.Item className={styles.newsItem}>
        <Spin size='small' />
      </List.Item>
    )
  }

  if (!item) return null

  return (
    <List.Item className={styles.newsItem}>
      <List.Item.Meta
        title={<Link to={`/item/${id}`}>{item.title ?? 'Без названия'}</Link>}
        description={
          <Space direction='vertical' size={2}>
            <Text type='secondary' className={styles.metaText}>
              by {item.by ?? '—'} • {formatDate(item.time ?? Date.now())}
            </Text>
            <Text type='secondary' className={styles.metaText}>
              {item.score ?? 0} points • {item.descendants ?? 0} comments
            </Text>
          </Space>
        }
      />
    </List.Item>
  )
}

export default function NewsList () {
  const { data: ids = [], isLoading, refetch } = useGetNewStoriesIdsQuery()
  const [currentPage, setCurrentPage] = useState(1)

  const currentPageIds = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE

    return ids.slice(startIndex, startIndex + PAGE_SIZE)
  }, [ids, currentPage])

  const totalPages = Math.ceil(ids.length / PAGE_SIZE)

  const handleRefresh = () => {
    refetch()
    setCurrentPage(1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Последние 100 новостей</h2>
        <Button onClick={handleRefresh} type='primary' loading={isLoading}>
          Обновить
        </Button>
      </div>

      <div className={styles.paginationInfo}>
        <Text type='secondary'>
          Страница {currentPage} из {totalPages} • Показано {currentPageIds.length} из {ids.length} новостей
        </Text>
      </div>

      <List
        dataSource={currentPageIds}
        renderItem={(id: number) => <NewsRow key={id} id={id} />}
        className={styles.list}
        loading={isLoading}
      />

      {ids.length > 0 && (
        <div className={styles.pagination}>
          <Pagination
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={ids.length}
            onChange={setCurrentPage}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total, range) => `${range[0]}-${range[1]} из ${total} новостей`
            }
          />
        </div>
      )}
    </div>
  )
}