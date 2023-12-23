import { cookies } from "next/headers"
import { COOKIE_NAME } from "@/constants"

export const getToken = () => {
  const cookieStore = cookies()

  const token = cookieStore.get(COOKIE_NAME)
  console.log("token", token)

  if (!token) {
    return null
  }

  const { value } = token

  return value
}
