import type { NextRequest } from "next/server";
import { env } from "process";
import { phone } from "phone";
import { validate as email } from "email-validator";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as {
    type: "whatsapp" | "email";
    value: string;
  };

  // additional layer of protection
  if (data.type == "whatsapp" && !phone(data.value).isValid) {
    // phone number invalid
    return Response.json({
      error: "WhatsApp Number is invalid",
      success: false,
    });
  }

  if (data.type == "email" && !email(data.value)) {
    // email invalid
    return Response.json({
      error: "Email is invalid",
      success: false,
    });
  }

  const apiUrl = `https://api.airtable.com/v0/${env.AIRBASE_BASE_ID}/${env.AIRBASE_TABLE_ID}`;
  const token = env.AIRBASE_TOKEN;

  const forwarded = request.headers.get("x-forwarded-for");
  const ipAddress = forwarded ? forwarded.split(/, /)[0] : request.ip;

  const repsonse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Contact: data.value,
            ContactType: data.type,
            IpAddress: ipAddress,
          },
        },
      ],
    }),
  });

  const responseData = await repsonse.json();

  return Response.json({
    success: !responseData.error,
  });
}
