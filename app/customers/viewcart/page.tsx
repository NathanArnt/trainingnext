import Checkout from "@/components/Checkout"
import ViewCart from "@/components/ViewCart"



const OrdersPage = () => {
  return (
    <div className="my-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Here is your detailed card</h1>
      <ViewCart/>
      <Checkout/>
    </div>
  )
}
export default OrdersPage