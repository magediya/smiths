/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Products = () => {
  return (
    <div className='container mt-12'>
        <div className='mb-4 md:mb-8 lg:mb-12'><h2 className='text-2xl md:text-3xl lg:text-4xl font-medium text-black'>Cable Assembly Configurator</h2></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className=''>
            <div className='border-2 border-ultramarine-500'>
              <div className='aspect-w-16 aspect-h-9'>
                <div className='flex flex-wrap justify-center items-center'>
                  <img src='/assets/images/connector-a 1.png' alt='' />
                </div>
              </div>
              <div className='bg-concrete-500 text-sm py-3 px-5 text-center'>38999 SMPM Size 12 Pin</div>
            </div>
            <div className='flex flex-wrap mt-6 border-2 border-ultramarine-500 rounded overflow-hidden bg-ultramarine-500'>
              <button className='bg-ultramarine-500 hover:bg-ultramarine-400 transition-all text-white py-3 px-4 md:px-10 flex-1 text-center text-sm font-bold'>SELECT CONNECTOR A</button>
            </div>
          </div>
          <div className=''>
            <div className='border-2 border-ultramarine-500'>
              <div className='aspect-w-16 aspect-h-9'>
                <div className='flex flex-wrap justify-center items-center'>
                  <img src='/assets/images/connector-a 1.png' alt='' />
                </div>
              </div>
              <div className='bg-concrete-500 text-sm py-3 px-5 text-center'>38999 SMPM Size 12 Pin</div>
            </div>
            <div className='flex flex-wrap mt-6 border-2 border-ultramarine-500 rounded overflow-hidden bg-ultramarine-500'>
              <button className='bg-ultramarine-500 hover:bg-ultramarine-400 transition-all text-white py-3 px-4 md:px-10 flex-1 text-center text-sm font-bold'>SELECT CABLE</button>
              <input className='w-20 p-3 bg-concrete-500' type="number" />
              <span className='bg-ultramarine-500 py-3 px-5 text-wrap text-sm font-bold text-white'>Inches</span>
            </div>
          </div>
          <div className=''>
            <div className='border-2 border-ultramarine-500'>
              <div className='aspect-w-16 aspect-h-9'>
                <div className='flex flex-wrap justify-center items-center'>
                  <img src='/assets/images/connector-a 1.png' alt='' />
                </div>
              </div>
              <div className='bg-concrete-500 text-sm py-3 px-5 text-center'>38999 SMPM Size 12 Pin</div>
            </div>
            <div className='flex flex-wrap mt-6 border-2 border-ultramarine-500 rounded overflow-hidden bg-ultramarine-500'>
              <button className='bg-ultramarine-500 hover:bg-ultramarine-400 transition-all text-white py-3 px-4 md:px-10 flex-1 text-center text-sm font-bold'>SELECT CONNECTOR A</button>
            </div>
          </div>
          <div className=''>
            <div className='border-2 border-ultramarine-500 relative'>
              <span className='absolute top-3 right-3'>
                <svg width="24" height="24" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 7.7614 7.7614 10 5 10C2.23857 10 0 7.7614 0 5C0 2.23857 2.23857 0 5 0C7.7614 0 10 2.23857 10 5ZM5 7.875C5.2071 7.875 5.375 7.7071 5.375 7.5V4.5C5.375 4.2929 5.2071 4.125 5 4.125C4.7929 4.125 4.625 4.2929 4.625 4.5V7.5C4.625 7.7071 4.7929 7.875 5 7.875ZM5 2.5C5.27615 2.5 5.5 2.72386 5.5 3C5.5 3.27614 5.27615 3.5 5 3.5C4.72385 3.5 4.5 3.27614 4.5 3C4.5 2.72386 4.72385 2.5 5 2.5Z" fill="#0077C8"/>
                </svg>
              </span>
              <div className='aspect-w-16 aspect-h-9'>
                <div className='flex flex-wrap justify-center items-center'>
                  <img src='/assets/images/connector-a 1.png' alt='' />
                </div>
              </div>
              <div className='bg-concrete-500 text-sm py-3 px-5 text-center'>38999 SMPM Size 12 Pin</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products

