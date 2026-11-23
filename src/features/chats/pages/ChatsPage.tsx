import { useParams } from 'react-router-dom'

export function ChatsPage() {
  const { conversationId } = useParams()

  return (
    <h1 className="text-h4 text-text">
      Chats{conversationId ? ` — ${conversationId}` : ''}
    </h1>
  )
}
