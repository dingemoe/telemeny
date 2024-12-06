import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookieStore = cookies();
  cookieStore.set("userAuth", "myToken", { secure: true, httpOnly: true });
  return new Response("Auth cookie created", { status: 201 });
}

export async function DELETE(req: Request) {
  const cookieStore = cookies();
  cookieStore.delete("userAuth");
  return new Response("Auth cookie deleted", { status: 200 });
}
