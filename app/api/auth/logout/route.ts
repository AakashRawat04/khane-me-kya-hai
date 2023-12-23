import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { COOKIE_NAME } from "@/constants"

import { environment } from "@/config/environment"

export async function GET() {
  cookies().delete(COOKIE_NAME)
  return NextResponse.redirect(`${environment.BASE_URL}`)
}
