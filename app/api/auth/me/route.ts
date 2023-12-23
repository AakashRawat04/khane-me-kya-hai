import { NextResponse } from "next/server"
import { getToken } from "@/utils/getToken"
import { verify } from "jsonwebtoken"

import { environment } from "@/config/environment"

export async function GET() {
  const token = getToken()

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    )
  }

  const secret = environment.JWT_SECRET || ""

  try {
    verify(token, secret)

    const response = {
      user: "Super Top Secret User",
    }

    return new Response(JSON.stringify(response), {
      status: 200,
    })
  } catch (e) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 400,
      }
    )
  }
}
