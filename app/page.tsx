import { SignOut } from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";


export default async function Home() {

  const session = await auth()
  return (
    <div className="p-10 text-center text-xl">
      <h1>Bienvenue sur notre boutique !</h1>
      <p>Vous pourrez y retrouver une large sélection de produits.</p>
      <div className="m-10 hover:scale-110 transition ease-linear">
        <Button><Link href="/products">Shop</Link></Button>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>
        <p className="font-medium text-black">{session?.user?.email}</p>
        <div className="mt-6">
          <SignOut />
        </div>
      </div>
    </div>
  );
}
