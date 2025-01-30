import React from 'react'

const FilterPage = () => {
  return (
    <div className='flex justify-between mt-12'>
        <div className='flex flex-wrap gap-6'>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name='min' placeholder='min price' className='text-sm rounded-xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input type="text" name='max' placeholder='max price' className='text-sm rounded-xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Size</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Color</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Category</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>All Filters</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
        </div>
        <div className=''>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default FilterPage