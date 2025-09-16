import { ThemeState } from '@/features/theme/themeSlice'
import { ThemeConfig } from 'antd'

export const getCustomTheme = (theme: ThemeState): ThemeConfig => ({
  token: {
    colorPrimary: '#ff6600',
    colorBgBase: theme.mode === 'light' ? '#f6f6ef' : '#1a1a1a',
    colorTextBase: theme.mode === 'light' ? '#000000' : '#ffffff',
    colorBorder: theme.mode === 'light' ? '#d6d6d6' : '#404040',
    borderRadius: 4,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    Layout: {
      headerBg: '#ff6600',
      bodyBg: theme.mode === 'light' ? '#f6f6ef' : '#1a1a1a',
    },
    Card: {
      colorBgContainer: theme.mode === 'light' ? '#ffffff' : '#2a2a2a',
      colorBorderSecondary: theme.mode === 'light' ? '#d6d6d6' : '#404040',
    },
    Button: {
      colorPrimary: '#ff6600',
      colorPrimaryHover: '#e65c00',
      colorPrimaryActive: '#cc5200',
    },
    List: {
      colorBgContainer: theme.mode === 'light' ? '#ffffff' : '#2a2a2a',
      colorBorder: theme.mode === 'light' ? '#d6d6d6' : '#404040',
    },
    Typography: {
      colorText: theme.mode === 'light' ? '#000000' : '#ffffff',
      colorTextSecondary: theme.mode === 'light' ? '#828282' : '#a0a0a0',
    },
    Switch: {
      colorPrimary: '#ff6600',
      colorPrimaryHover: '#e65c00',
    },
  },
})