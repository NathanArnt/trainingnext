'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import AjouterPanier from "./ajouterPanier";
import Image from "next/image";

// Define the type of a product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (isLoading) {
    return (
        <div className="flex items-center justify-center">
            <p>Loading....</p>
        </div>
    );
  }
  return (
    <div className="w-screen h-screen max-w-[80%] m-auto ">
      <h1 className="text-2xl underline my-10">Liste des produits</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {products?.map((product) => (
          <Card
          key={product.id}
          className="min-w-[250px] cursor-pointer transition ease-linear"
          >
            <CardHeader>
              <Image
                src="/"
                alt="Product img"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <CardTitle>{product.name}</CardTitle>
                <div className="flex items-center">{product.price}<p className="pl-1">€</p></div> 
              </div>
              <CardDescription className="pt-2 pb-4">{product.description}</CardDescription>
              <AjouterPanier/>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
