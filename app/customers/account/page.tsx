import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";

const AccountPage = async () => {

    const session = await auth();
    if (!session) {
        redirect("/sign-in")
    }
  return (
    <div>
        <p>Account {session?.user?.email}</p>
    </div>
  )
}
export default AccountPage