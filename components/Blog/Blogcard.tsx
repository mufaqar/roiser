import Link from 'next/link';
import React from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaTruck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

function Blogcard() {
  const products = [
    {
      id: 1,
      image: '/images/card-img.png', // Replace with actual image paths
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
     
    },
    {
      id: 2,
      image: '/images/card-img.png',
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
    },
    {
      id: 3,
      image: '/images/card-img.png',
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
    },
     {
      id: 6,
      image: '/images/card-img.png', // Replace with actual image paths
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
     
    },
    {
      id: 7,
      image: '/images/card-img.png',
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
    },
    {
      id: 8,
      image: '/images/card-img.png',
      name: '3 Seat Real Leather Electric Recliner Home Cinema Theatre Sofa...',
      rating: 4,
      reviews: 19,
      currentPrice: '$259.00',
      originalPrice: '$384.00',
      paymentPlan: 'Pay $23.99 / 12m with',
      expressDelivery: 'Express Delivery in 3-10 Days',
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <div className=" items-center">
          <button className="flex gap-1 items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-[#121314]">
            <CiMenuFries />
            Filters
          </button>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-2 py-1 text-sm mt-5">
            <span>Tag X</span>
            <button>
            <RxCross2 />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600">Showing 3 of 100</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden p-3">
            <img src={product.image} alt={product.name} className="w-full   rounded-md" />
            <div className="pt-4 py-4">
              <div className="flex items-center text-xs mb-2">
                <span className="bg-[#EFF0F2] px-2 py-0.5 rounded-sm mr-2 text-[#121314]">In stock</span>
                <div className='flex items-center gap-1 text-[#121314] bg-[#EFF0F2] p-1 px-3 rounded-sm'>
                   <FaTruck size={16} className="" />
                  <span>{product.expressDelivery}</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex text-[#121314]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${i < product.rating ? 'fill-current' : 'text-gray-300 stroke-current'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#121314]">{product.reviews} reviews</span>
              </div>
              <h3 className="text-xl font-semibold text-[#121314] mb-2 truncate">{product.name}</h3>
              
              <div className="flex items-baseline mb-2">
                <p className="text-xl font-bold text-[#F2675D] mr-2">{product.currentPrice}</p>
                <p className="text-sm text-[#121314] line-through">{product.originalPrice}</p>
              </div>
              <p className="text-lg text-[#121314] font-semibold">{product.paymentPlan} <span className="font-semibold text-gray-800">Klarna</span></p>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center mt-8 "> {/* Added flex and justify-center */}
        <Link href="/">
          <button className="text-white bg-[#1B4965] px-7 py-2 hover:underline text-sm font-semibold rounded-sm">Load More</button>
        </Link>
      </div>
    </div>
  );
}

export default Blogcard;