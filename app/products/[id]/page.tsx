import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function ProductId(props: {
  params: {
    productId: string;
  };
}) {
  console.log("Props received:", props);

  // Log the productId to ensure it's being passed correctly
  const productId = props.params.productId;
  console.log("Product ID:", productId);

  const product = await prisma.products.findUnique({
    where: {
      id: Number(productId), 
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
    },
  });

  if (!product) {
    return (
      <div className="p-10">
        <Card>
          <CardHeader>
            <h1>Product Not Found</h1>
          </CardHeader>
          <CardContent>
            <p>The product with ID {productId} does not exist.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-10">
      <Card>
        <CardHeader>
          <h1>{product.name}</h1>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </CardContent>
      </Card>
    </div>
  );
}
