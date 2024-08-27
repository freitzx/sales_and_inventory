import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  const response = await fetch("http://localhost:5117/api/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  if (response.ok) {
    redirect("/dashboard");
  } else {
    console.log("Login failed");
  }
}

export async function logout() {
  redirect("/login");
}
