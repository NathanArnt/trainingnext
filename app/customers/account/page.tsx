import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";

const AccountPage = async () => {

    const session = await auth();
    if (!session) {
        redirect("/sign-in")
    }
  return (
    <div className="flex items-center justify-center">
      <div className="border- border rounded-md p-4 shadow-lg">
        <p>Account {session?.user?.email}</p>
        <p>Name : {session?.user?.name}</p>
      </div>
        
    </div>
  )
}
export default AccountPage