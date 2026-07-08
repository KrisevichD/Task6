import Title from '@/components/common/Title'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <Title
        title='Pharmaceutical company'
        subtitle='Task 7: React TypeScript Practice'
      />
      <h2>Описание</h2>
      <p>
        Данная задача направлена на закрепление практических навыков разработки современных приложений на стеке React + TypeScript + Vite + TanStack (Router, Query). Основной акцент сделан на типизации, освоить один из UI-фреймворков, работе с асинхронными данными и настройке архитектуры проекта. Дополнительно предлагается задание с использованием WebSocket (чат).
      </p>
      <br />

      <Separator />
      <br />
      <h2>Требования</h2>
      <p>Весь код написан на TypeScript (типизация обязательна, any запрещён).</p>

      <p>Реализована маршрутизация (TanStack Router).</p>

      <p>Работа с API выполнена через TanStack Query.</p>

      <p>Проект собран с помощью Vite.</p>

      <p>Код оформлен по best practices React (чистая архитектура).</p>

      <p>Интерфейс построен на основе выбранной UI-библиотеки.</p>

      <p>Структура проекта модульная и читаемая.</p>

      <p>Extra: добавить модуль чата с WebSocket.</p>
    </div>
  )
}
