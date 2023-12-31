export async function POST(request: Request) {
  const data = (await request.json()) as { type: string; value: string };

  return Response.json({
    success: true,
  });
}
