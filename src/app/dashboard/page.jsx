import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const role = session.user.role;

  switch (role) {
    case "reader":
      redirect("/dashboard/user");

    case "librarian":
      redirect("/dashboard/librarian");

    case "admin":
      redirect("/dashboard/admin");

    default:
      redirect("/");
  }
}