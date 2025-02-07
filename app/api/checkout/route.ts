import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { cartItems, totalPrice, userId } = await req.json();

    // Vérifier si le panier est vide
    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Panier vide" }, { status: 400 });
    }

    console.log("Utilisateur reçu dans l'API :", userId);

    if (!userId) {
      return NextResponse.json({ error: "Utilisateur non spécifié" }, { status: 400 });
    }

    // Sauvegarde de la commande dans la base de données
    const order = await prisma.orders.create({
      data: {
        userId, // Associe la commande à l'utilisateur via userId
        products: cartItems, // Prisma doit accepter JSON ici
        totalPrice,
      },
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error("Erreur dans /api/checkout :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
