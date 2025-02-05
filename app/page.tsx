import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/lib/features/counter/cartSlice";
import { Suspense } from "react";

interface Props {
  product: Product
}

export default function Home(props: Props) {
  return (
    <div className="">
      <Slider/>
      <Suspense fallback={<Skeleton/>}>
        <div className="mt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <ProductList product={props.product}/>
        </div>
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-10"/>}>
        <div className="mt-20">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
          <CategoryList/>
        </div>
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-10"/>}>
        <div className="my-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">New Products</h1>
          <ProductList product={props.product}/>
        </div>
      </Suspense>
    </div>
  );
}
