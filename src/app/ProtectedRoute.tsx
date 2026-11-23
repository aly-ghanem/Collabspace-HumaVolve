import type { ReactNode } from 'react'

type ProtectedRouteProps = {
  children: ReactNode
}

/** Auth gate lands in T1.8 — allow all routes until session store exists. */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return children
}
