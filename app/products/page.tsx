'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightCircle} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the type of a product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
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
        className="min-w-[250px] hover:scale-110 cursor-pointer transition ease-linear"
        >
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
                <p>Price: ${product.price}</p>
                <Link href={`/products/${product.id}`}>
                    <ArrowRightCircle/>
                </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}
