import { useParams } from 'react-router-dom'

export function ProjectDetailPage() {
  const { projectId, tab = 'overview' } = useParams()

  return (
    <h1 className="text-h4 text-text">
      Project {projectId} — {tab}
    </h1>
  )
}
