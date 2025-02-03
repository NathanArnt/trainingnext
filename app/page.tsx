import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";


export default async function Home({searchParams} : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  return (
    <div className="">
      <Slider/>
      <Suspense fallback={<Skeleton/>}>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <ProductList/>
        </div>
      </Suspense>
      <Suspense fallback={<Skeleton/>}>
        <div className="mt-24">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
          <CategoryList/>
        </div>
      </Suspense>
      <Suspense fallback={<Skeleton/>}>
        <div className="my-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h1 className="text-2xl">New Products</h1>
          <ProductList query={query}/>
        </div>
      </Suspense>
    </div>
  );
}
