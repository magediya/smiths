import React from 'react'

const Filter = () => {
  return (
    <>
        <div className='container mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6'>
                <div className='col-span-1 md:col-span-2 border-2 border-ultramarine-500'>
                <div className='bg-ultramarine-500 px-5 py-3 text-white'>Additional Filters</div>
                <div className='p-5'>
                    <div className='flex flex-wrap'>
                    <div className='w-full md:w-2/5 flex flex-wrap flex-col items-start'>
                    <div className='mb-5'>
                        <select name="" id="" className='border-2 py-1 px-2 bg-transparent border-black/50 rounded text-sm'>
                            <option value="">Cable Type: Flexibile</option>
                            <option value="">Cable Type: Flexibile</option>
                        </select>
                    </div>
                        <div className="inline-flex items-center border-2 bg-transparent border-black/50 rounded text-sm mb-5">
                            <label htmlFor="default-checkbox" className="mr-2 px-2">Phase vs Temperature</label>
                            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div className="inline-flex items-center border-2 bg-transparent border-black/50 rounded text-sm mb-5">
                            <label htmlFor="default-checkbox-1" className="mr-2 px-2">Space</label>
                            <input id="default-checkbox-1" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </div>
                    <div className='w-full md:w-3/5'>
                        <div className='flex flex-wrap border-2 border-ultramarine-500 rounded text-sm mb-5'>
                        <div className='flex-1 px-2 py-1'>Current Max Frequency of Assembley</div>
                        <div className='w-12 px-2 py-1 bg-concrete-500 flex items-center'>40.0</div>
                        <div className='w-12 px-2 py-1 flex items-center'>Ghz</div>
                        </div>
                        <div className='flex flex-wrap border-2 border-ultramarine-500 rounded text-sm mb-5'>
                        <div className='flex-1 px-2 py-1'>Enter the Applications’s Maximum Frequency in Ghz:</div>
                        <div className='w-12 px-2 py-1 bg-concrete-500 flex items-center'>40.0</div>
                        <div className='w-12 py-1 flex items-center justify-center'>
                        <input type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className='col-span-1 border-2 border-ultramarine-500'>
                <div className='bg-ultramarine-500 px-5 py-3 text-white'>Assembley Add-ons</div>
                <div className='p-5'>
                    <div className='flex flex-wrap items-center justify-between mb-5'>
                    <div className="flex-1 flex items-center justify-between border-2 bg-transparent border-black/50 rounded text-sm">
                        <label htmlFor="default-checkbox3" className="mr-2 px-2">Cable Armour</label>
                        <input id="default-checkbox3" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className='pl-5'>
                        <svg width="24" height="24" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 7.7614 7.7614 10 5 10C2.23857 10 0 7.7614 0 5C0 2.23857 2.23857 0 5 0C7.7614 0 10 2.23857 10 5ZM5 7.875C5.2071 7.875 5.375 7.7071 5.375 7.5V4.5C5.375 4.2929 5.2071 4.125 5 4.125C4.7929 4.125 4.625 4.2929 4.625 4.5V7.5C4.625 7.7071 4.7929 7.875 5 7.875ZM5 2.5C5.27615 2.5 5.5 2.72386 5.5 3C5.5 3.27614 5.27615 3.5 5 3.5C4.72385 3.5 4.5 3.27614 4.5 3C4.5 2.72386 4.72385 2.5 5 2.5Z" fill="#0077C8"/>
                        </svg>
                    </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between mb-5'>
                    <div className="flex-1 flex items-center justify-between border-2 bg-transparent border-black/50 rounded text-sm">
                        <label htmlFor="default-checkbox4" className="mr-2 px-2">Cable Weatherization</label>
                        <input id="default-checkbox4" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className='pl-5'>
                        <svg width="24" height="24" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 7.7614 7.7614 10 5 10C2.23857 10 0 7.7614 0 5C0 2.23857 2.23857 0 5 0C7.7614 0 10 2.23857 10 5ZM5 7.875C5.2071 7.875 5.375 7.7071 5.375 7.5V4.5C5.375 4.2929 5.2071 4.125 5 4.125C4.7929 4.125 4.625 4.2929 4.625 4.5V7.5C4.625 7.7071 4.7929 7.875 5 7.875ZM5 2.5C5.27615 2.5 5.5 2.72386 5.5 3C5.5 3.27614 5.27615 3.5 5 3.5C4.72385 3.5 4.5 3.27614 4.5 3C4.5 2.72386 4.72385 2.5 5 2.5Z" fill="#0077C8"/>
                        </svg>
                    </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between mb-5'>
                    <div className="flex-1 flex items-center justify-between border-2 bg-transparent border-black/50 rounded text-sm">
                        <label htmlFor="default-checkbox5" className="mr-2 px-2">Phase Matching</label>
                        <input id="default-checkbox5" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className='pl-5'>
                        <svg width="24" height="24" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 7.7614 7.7614 10 5 10C2.23857 10 0 7.7614 0 5C0 2.23857 2.23857 0 5 0C7.7614 0 10 2.23857 10 5ZM5 7.875C5.2071 7.875 5.375 7.7071 5.375 7.5V4.5C5.375 4.2929 5.2071 4.125 5 4.125C4.7929 4.125 4.625 4.2929 4.625 4.5V7.5C4.625 7.7071 4.7929 7.875 5 7.875ZM5 2.5C5.27615 2.5 5.5 2.72386 5.5 3C5.5 3.27614 5.27615 3.5 5 3.5C4.72385 3.5 4.5 3.27614 4.5 3C4.5 2.72386 4.72385 2.5 5 2.5Z" fill="#0077C8"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div className='col-span-1'>
                <button className='bg-well-read-500 hover:bg-well-read-300 text-white px-9 py-3 rounded font-medium w-full mb-5'>Reset</button>
                <button className='bg-ultramarine-500 hover:bg-ultramarine-300 text-white px-9 py-3 rounded font-medium w-full mb-5'>Continue</button>
                </div>
            </div>
        </div>
        <div className='container mt-14'>
            <div className='flex flex-wrap justify-between  items-center'>
                <span className='text-lg'>SELECT CONNECTOR A</span>
                <button className='bg-ultramarine-500 hover:bg-ultramarine-300 text-white px-9 py-3 rounded font-medium min-w-64'>Return</button>
            </div>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6'>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>VITA</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>389999</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>Mini-Lock</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>1.85 mm</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>1.00 mm</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>SMA</button>
                <button className='border-2 border-black/25 rounded py-1 px-10 text-center text-sm'>2.92 mm</button>
            </div>
        </div>
    </>
  )
}

export default Filter

