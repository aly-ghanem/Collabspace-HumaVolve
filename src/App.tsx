import { RouterProvider } from 'react-router-dom'
import { Providers } from '@/app/providers'
import { router } from '@/app/router'

/** Kept for tests; production entry uses main.tsx → RouterProvider directly. */
export default function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
