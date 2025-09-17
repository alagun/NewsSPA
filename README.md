# Hacker News Clone

Современный клон Hacker News, построенный на React с использованием современных инструментов и методологий.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.12.8-red)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.5-purple)

## 🚀 Технологии

- **React 19** с TypeScript
- **Vite** - быстрый сборщик
- **Ant Design** - UI библиотека
- **Redux Toolkit** с RTK Query - управление состоянием
- **SCSS Modules** - стилизация
- **Feature-Sliced Design** - архитектура проекта
- **React Router v6** - навигация
- **ESLint** - линтинг кода
- **GitHub Pages** - деплой

## 📦 Функциональности

### Главная страница
- 📃 Показывает последние 100 новостей
- 📖 Пагинация по 10 новостей на страницу
- 🎨 Адаптивный дизайн
- 🌙 Поддержка светлой и темной тем

### Страница новости
- 📰 Полная информация о новости
- 💬 Древовидные комментарии
- 🔍 Ленивая загрузка вложенных комментариев
- 🕐 Форматирование дат
- ↩️ Навигация назад к списку

## 🏗️ Архитектура (Feature-Sliced Design)


## 🚀 Установка и запуск

### Предварительные требования
- Node.js 16+
- npm или yarn

### Установка
```bash
# Клонирование репозитория
git clone git@github.com:alagun/NewsSPA.git
cd hacker-news-clone

# Установка зависимостей
npm install

# Запуск в development режиме
npm run dev

# Сборка для production
npm run build

# Линтинг кода
npm run lint

# Деплой на GitHub Pages
npm run deploy