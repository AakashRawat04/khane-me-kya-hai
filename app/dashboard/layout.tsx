"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface UserResponse {
  user: string | null
  error: Error | null
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const { replace } = useRouter()

  useEffect(() => {
    ;(async () => {
      const { user, error } = await getUser()

      if (error) {
        replace("/login")
        return
      }
      setIsSuccess(true)
    })()
  })

  if (!isSuccess) {
    return <p>Loading...</p>
  }

  return <>{children}</>
}

async function getUser(): Promise<UserResponse> {
  try {
    const res = await fetch(`/api/auth/me`)
    if (!res.ok) {
      throw new Error("Not authorized")
    }

    const { user } = await res.json()

    return {
      user: user,
      error: null,
    }
  } catch (e) {
    const error = e as Error

    return {
      user: null,
      error,
    }
  }
}
