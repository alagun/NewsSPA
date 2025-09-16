import React, { useState } from 'react'
import { Button, Space, Typography, Spin } from 'antd'
import formatDate from '@/shared/lib/formatDate'
import { useGetItemQuery } from '@/features/hacker-news-api/hackerNewsApi'
import styles from './CommentTree.module.scss'

const { Text, Paragraph } = Typography

interface CommentProps {
  id: number
  level?: number
}

const CommentNode: React.FC<CommentProps> = ({ id, level = 0 }) => {
  const { data, isLoading, isError } = useGetItemQuery(id)
  const [expanded, setExpanded] = useState(level < 2)

  if (isLoading) return (
    <div className={styles.loading}>
      <Spin size='small' />
    </div>
  )

  if (isError || !data) return null

  if (data.type === 'deleted' || !data.by) return null

  const hasChildren = data.kids && data.kids.length > 0

  return (
    <div className={styles.commentNode} style={{ marginLeft: level > 0 ? 16 : 0 }}>
      <div className={styles.commentHeader}>
        <Text className={styles.commentAuthor}>{data.by}</Text>
        <Text className={styles.commentTime}>{formatDate(data.time ?? Date.now())}</Text>
      </div>

      <Paragraph className={styles.commentText}>
        {data.text ? <span dangerouslySetInnerHTML={{ __html: data.text }} /> : 'Комментарий недоступен'}
      </Paragraph>

      {hasChildren && (
        <Space>
          <Button
            size='small'
            onClick={() => setExpanded(!expanded)}
            className={styles.toggleButton}
          >
            {expanded ? 'Скрыть' : `Показать ${data.kids?.length} ответов`}
          </Button>
        </Space>
      )}

      {expanded && hasChildren && data.kids?.map(childId => (
        <CommentNode key={childId} id={childId} level={level + 1} />
      ))}
    </div>
  )
}

interface CommentTreeProps {
  rootIds: number[]
}

export default function CommentTree ({ rootIds }: CommentTreeProps) {
  if (!rootIds.length) return (
    <div className={styles.noComments}>
      Нет комментариев для отображения
    </div>
  )

  return (
    <div className={styles.commentTree}>
      {rootIds.map(id => (
        <CommentNode key={id} id={id} />
      ))}
    </div>
  )
}