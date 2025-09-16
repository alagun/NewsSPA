import { useParams, Link } from 'react-router-dom'
import { Button, Card, Spin } from 'antd'
import formatDate from '@/shared/lib/formatDate'
import { useGetItemQuery } from '@/features/hacker-news-api/hackerNewsApi'
import CommentTree from '@/entities/comment/CommentTree'
import styles from './NewsDetail.module.scss'

export default function NewsDetail () {
  const { id } = useParams<{ id: string }>()
  const itemId = Number(id)
  const { data: item, refetch, isLoading } = useGetItemQuery(itemId, { skip: !itemId })

  if (!item && isLoading) return <Spin />

  if (!item) return <div>Новость не найдена</div>

  return (
    <div className={styles.container}>
      <div className={styles.backLink}>
        <Link to='/'>← К списку новостей</Link>
      </div>

      <Card title={item.title} extra={<a href={item.url} target='_blank' rel='noopener noreferrer'>Открыть</a>}>
        <p>{item.by} • {formatDate(item.time ?? Date.now())} • {item.score ?? 0} pts</p>
        <p>Комментарии: {item.descendants ?? 0}</p>
        <div className={styles.actions}>
          <Button onClick={() => refetch()}>Обновить комментарии</Button>
        </div>
      </Card>

      <div className={styles.comments}>
        <CommentTree rootIds={item.kids ?? []} />
      </div>
    </div>
  )
}