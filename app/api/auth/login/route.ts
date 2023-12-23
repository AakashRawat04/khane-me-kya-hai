import { NextResponse } from "next/server"
import { COOKIE_NAME } from "@/constants"
import { userTable } from "@/schema/schema"
import { db } from "@/utils/db"
import { serialize } from "cookie"
import { eq } from "drizzle-orm"
import { sign } from "jsonwebtoken"

import { environment } from "@/config/environment"

const MAX_AGE = 60 * 60 * 24 * 30 // days;

export async function POST(request: Request) {
  const body = await request.json()

  const { email, password } = body
  const [user] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email))
    .limit(1)
  if (!user) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    )
  }

  if (email !== user.email || password !== user.password) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    )
  }

  // Always check this
  const secret = environment.JWT_SECRET || ""

  const token = sign(
    {
      email: email,
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  )

  const seralized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: environment.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  })

  const response = {
    message: "Authenticated!",
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": seralized },
  })
}
