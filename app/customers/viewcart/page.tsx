import Checkout from "@/components/Checkout"
import ViewCart from "@/components/ViewCart"

const OrdersPage = () => {

  return (
    <div className="mt-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <ViewCart />
      <div className="mt-6"><Checkout/></div>
    </div>
  )
}
export default OrdersPage