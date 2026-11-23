import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/app/layouts/AppLayout'
import { AuthLayout } from '@/app/layouts/AuthLayout'
import { NotFoundPage } from '@/app/pages/NotFoundPage'
import { ProtectedRoute } from '@/app/ProtectedRoute'
import { AskAiPage } from '@/features/ai/pages/AskAiPage'
import { SignInPage } from '@/features/auth/pages/SignInPage'
import { SignUpPage } from '@/features/auth/pages/SignUpPage'
import { ChatsPage } from '@/features/chats/pages/ChatsPage'
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage'
import { MeetingDetailPage } from '@/features/meetings/pages/MeetingDetailPage'
import { MeetingsPage } from '@/features/meetings/pages/MeetingsPage'
import { ProfilePage } from '@/features/profile/pages/ProfilePage'
import { FilesPage } from '@/features/projects/pages/FilesPage'
import { ProjectDetailPage } from '@/features/projects/pages/ProjectDetailPage'
import { ProjectsPage } from '@/features/projects/pages/ProjectsPage'
import { ReportsPage } from '@/features/reports/pages/ReportsPage'
import { TasksPage } from '@/features/tasks/pages/TasksPage'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
    ],
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:projectId/:tab?', element: <ProjectDetailPage /> },
      { path: 'tasks', element: <TasksPage /> },
      { path: 'chats/:conversationId?', element: <ChatsPage /> },
      { path: 'meetings', element: <MeetingsPage /> },
      { path: 'meetings/:meetingId', element: <MeetingDetailPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'ai', element: <AskAiPage /> },
      { path: 'files', element: <FilesPage /> },
      { path: 'profile/:tab?', element: <ProfilePage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
