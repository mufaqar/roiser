
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaTruck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

function Blogcard() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedItemSize, setSelectedItemSize] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

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

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleApplyFilters = () => {
    // Here you would typically apply the filters to your products data
    // and potentially fetch new data or update the displayed products.
    // For this example, we'll just close the modal.
    console.log("Applying filters:", {
      selectedBrands,
      selectedItemSize,
      minPrice,
      maxPrice,
    });
    setIsFilterModalOpen(false);
  };

  const handleClearAll = () => {
    setSelectedItemSize('All');
    setMinPrice('');
    setMaxPrice('');
    setSelectedBrands([]);
  };

  const brands = ['Option One', 'Option Two', 'Option Three', 'Option Four', 'Option Five'];
  const itemSizes = ['All', 'Option One', 'Option Two', 'Option Three', 'Option Four', 'Option Five'];


  return (
    <div className="container mx-auto p-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start"> {/* Changed to flex-col to stack items */}
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="flex gap-1 items-center px-3 py-1 border border-gray-300 rounded-md text-sm text-[#121314]"
          >
            <CiMenuFries />
            Filters
          </button>
          {/* Example of active filter tags (you'll need to manage these based on actual filters applied) */}
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
            <img src={product.image} alt={product.name} className="w-full rounded-md" />
            <div className="pt-4 py-4">
              <div className="flex items-center text-xs mb-2">
                <span className="bg-[#EFF0F2] px-2 py-0.5 rounded-sm mr-2 text-[#121314]">In stock</span>
                <div className="flex items-center gap-1 text-[#121314] bg-[#EFF0F2] p-1 px-3 rounded-sm">
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
      <div className="flex justify-center mt-8 ">
        <Link href="/">
          <button className="text-white bg-[#1B4965] px-7 py-2 hover:underline text-sm font-semibold rounded-sm">Load More</button>
        </Link>
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#121314]">Filters</h2>
              <button onClick={() => setIsFilterModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <RxCross2 size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex-grow">
              {/* Brand Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#121314] mb-4">Brand</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center text-base text-[#121314]">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="form-checkbox h-4 w-4 text-blue-600 rounded-sm focus:ring-blue-500 mr-2"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* Item Size Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#121314] mb-4">Item Size</h3>
                <div className="space-y-3">
                  {itemSizes.map((size) => (
                    <label key={size} className="flex items-center text-base text-[#121314]">
                      <input
                        type="radio"
                        name="itemSize"
                        value={size}
                        checked={selectedItemSize === size}
                        onChange={(e) => setSelectedItemSize(e.target.value)}
                        className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-semibold text-[#121314] mb-4">Price</h3>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 sr-only">Min</label>
                    <input
                      type="number"
                      id="minPrice"
                      placeholder="Enter min price"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 sr-only">Max</label>
                    <input
                      type="number"
                      id="maxPrice"
                      placeholder="Enter max price"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleClearAll}
                className="text-gray-600 hover:text-gray-800 font-semibold text-base"
              >
                Clear all
              </button>
              <button
                onClick={handleApplyFilters}
                className="bg-[#1B4965] text-white px-6 py-2 rounded-md hover:bg-[#123d51] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-base"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogcard;