import React from 'react'
import { Switch, Tooltip } from 'antd'
import { Moon, Sun } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/app/store/store.hooks'
import { toggle } from '../themeSlice'
import { selectThemeMode } from '@/app/store/selectors'
import styles from './ThemeToggle.module.scss'

export const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectThemeMode)

  const handleToggle = () => {
    dispatch(toggle())
  }

  return (
    <Tooltip>
      <div className={styles.themeToggle}>
        {theme === 'dark'? <Moon size={12} />:<Sun size={12} />}
        <Switch
          checked={theme === 'dark'}
          onChange={handleToggle}
          className={styles.themeSwitch}
        />
      </div>
    </Tooltip>
  )
}