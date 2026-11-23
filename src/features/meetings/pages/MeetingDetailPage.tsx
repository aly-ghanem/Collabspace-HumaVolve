import { useParams } from 'react-router-dom'

export function MeetingDetailPage() {
  const { meetingId } = useParams()

  return <h1 className="text-h4 text-text">Meeting {meetingId}</h1>
}
