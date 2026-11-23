import { useParams } from 'react-router-dom'

export function ProfilePage() {
  const { tab = 'overview' } = useParams()

  return <h1 className="text-h4 text-text">Profile — {tab}</h1>
}
