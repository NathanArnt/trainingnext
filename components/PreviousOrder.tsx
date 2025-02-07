'use client'

import { Orders } from '@prisma/client';
import React, { useEffect, useState } from 'react'

const PreviousOrder = () => {
    const [orders, setOrders] = useState<Orders[] | null>(null);
    const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("/api/orders")
        .then((res) => res.json())
        .then((data: Orders[]) => {
          setOrders(data); // Update state with fetched data
          return fetch("/api/users"); // Nouvelle requête pour récupérer les utilisateurs
        })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data); // Mettre à jour l'état avec les utilisateurs
          setLoading(false); // Stop loading
        })
        .catch((error) => {
          console.error("Error fetching orders or users:", error);
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
    <div className='p-6 bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-white mb-4'>Here are your previous orders</h2>
        {orders?.map((order) => (
            <div key={order.id} className='flex items-center justify-between p-4 mb-4 rounded-lg bg-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                <div className='flex-1'>
                    <p className='font-semibold text-white'>{order.status}</p>
                    <p className='text-gray-300'>Total Price: {order.totalPrice}$</p>
                </div>
                <div className='text-right'>
                    <p className='text-lg font-medium text-green-400'>User: {users.find(user => user.id === order.userId)?.name || 'N/A'}</p>
                    <p className='text-sm text-gray-400'>Products: {Array.isArray(order.products) ? order.products.join(', ') : 'N/A'}</p>
                    <p className='text-lg font-bold text-yellow-400'>Created At: {new Date(order.createdAt).toLocaleString()}$</p>
                </div>
            </div>
        ))}
        {orders?.length === 0 && <p className='text-gray-400 text-center'>Vous n'avez pas de commande.</p>}
    </div>
  )
}

export default PreviousOrder