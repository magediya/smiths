/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Homepage from '@/components/home/homePage';
import PageBanner from '@/components/pageBanner';
// import { getHomeContent } from '@/components/home/core/_request';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Submit = () => {
  const homeData: any = {};
  return (
    <Main meta={<Meta 
      title={homeData?.attributes?.seo?.metaTitle ? homeData?.attributes?.seo?.metaTitle : homeData?.attributes?.title } 
      description={homeData?.attributes?.seo?.metaDescription ? homeData?.attributes?.seo?.metaDescription : ""} 
      canonical={ homeData?.attributes?.seo?.canonicalUrl ? homeData?.attributes?.seo?.canonicalUrl : '' } 
      ogType = {homeData?.attributes?.seo?.og_type ? homeData?.attributes?.seo?.og_type : ""}
      ogTitle = {homeData?.attributes?.seo?.og_title ? homeData?.attributes?.seo?.og_title : ""}
      ogLocale = {homeData?.attributes?.seo?.og_locale ? homeData?.attributes?.seo?.og_locale : ""}
      ogDescription = {homeData?.attributes?.seo?.og_description ? homeData?.attributes?.seo?.og_description : ""}
      ogImage = {homeData?.attributes?.seo?.metaImage?.data?.attributes ? homeData?.attributes?.seo?.metaImage?.data?.attributes : ""}
      structuredData = {homeData?.attributes?.seo?.structuredData ? homeData?.attributes?.seo?.structuredData : ""}
      ogSitename = {homeData?.attributes?.seo?.og_site_name ? homeData?.attributes?.seo?.og_site_name : ""}
    />}>
      <PageBanner />
      <div className='container my-10'>
        <div className='mb-4 md:mb-8 lg:mb-10'><h2 className='text-2xl md:text-3xl lg:text-4xl font-medium text-black'>Cable Assembly Configurator</h2></div>
        <div className='grid md:grid-cols-5 gap-8'>
          <div className='border-2 border-ultramarine-500 col-span-1 md:col-span-3 p-6'>
            <div className='flex flex-wrap'>
              <div className='flex-1 pr-10'>
                <h3 className='text-lg md:text-xl font-medium mb-3'>Assembley Part Number: SMS-200-24.0-KMS</h3>
                <h4 className='text-left'>Configuration: SMA Straight Male to 2.9mm Straight Male 24’ Lab-Flex 100T Coax Cable Assembly</h4>
              </div>
              <div>
              <button className='inline-flex items-center bg-ultramarine-500 hover:bg-ultramarine-400 transition-all text-white py-0.5 rounded px-4 md:px-10  text-center font-bold'>
              <svg className="mr-2 w-4" enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="50" width="50"/><circle cx="43" cy="21" r="2"/><path d="M40,15V1H10v14" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M40,29v20H10V29H40z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M10,40H3  c-1.104,0-2-0.896-2-2V17c0-1.104,0.896-2,2-2h44c1.104,0,2,0.896,2,2v21c0,1.104-0.896,2-2,2h-7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="35" x2="15" y1="35" y2="35"/><line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="31" x2="15" y1="39" y2="39"/><line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="35" x2="15" y1="43" y2="43"/></svg>
                Print</button>
              </div>
            </div>
            <div className='py-6'>
              <img src='/assets/images/img1.png' alt=''  className='mx-auto block' />
            </div>
            <div className='grid xl:grid-cols-5 gap-8'>
              <div className='col-span-1 md:col-span-3'>
                <h5 className='font-semibold mb-3'>Product Configuration</h5>
                <div className='border-b border-ultramarine-500'>
                    <div className='border border-r-0 border-b-0 border-ultramarine-500 flex flex-wrap'>
                      <div className='w-2/5 px-3 py-1 border-r border-ultramarine-500 font-medium text-ultramarine-500'>Part Number</div>
                      <div className='w-3/5 px-3 py-1 border-r border-ultramarine-500 text-concrete-900'>SMS-200-24.0-KMS</div>
                    </div>
                    <div className='border border-r-0 border-b-0 border-ultramarine-500 flex flex-wrap'>
                      <div className='w-2/5 px-3 py-1 border-r border-ultramarine-500 font-medium text-ultramarine-500'>Part Number</div>
                      <div className='w-3/5 px-3 py-1 border-r border-ultramarine-500 text-concrete-900'>SMS-200-24.0-KMS</div>
                    </div>
                    <div className='border border-r-0 border-b-0 border-ultramarine-500 flex flex-wrap'>
                      <div className='w-2/5 px-3 py-1 border-r border-ultramarine-500 font-medium text-ultramarine-500'>Part Number</div>
                      <div className='w-3/5 px-3 py-1 border-r border-ultramarine-500 text-concrete-900'>SMS-200-24.0-KMS</div>
                    </div>
                    <div className='border border-r-0 border-b-0 border-ultramarine-500 flex flex-wrap'>
                      <div className='w-2/5 px-3 py-1 border-r border-ultramarine-500 font-medium text-ultramarine-500'>Part Number</div>
                      <div className='w-3/5 px-3 py-1 border-r border-ultramarine-500 text-concrete-900'>SMS-200-24.0-KMS</div>
                    </div>
                    <div className='border border-r-0 border-b-0 border-ultramarine-500 flex flex-wrap'>
                      <div className='w-2/5 px-3 py-1 border-r border-ultramarine-500 font-medium text-ultramarine-500'>Part Number</div>
                      <div className='w-3/5 px-3 py-1 border-r border-ultramarine-500 text-concrete-900'>SMS-200-24.0-KMS</div>
                    </div>
                </div>
                <span className='text-sm font-medium block mt-5'>Unit of measurement: inches</span>
              </div>
              <div className='col-span-1 md:col-span-2'>
                <h5 className='font-semibold mb-3'>Additional Assembley Options</h5>
                <div className='border border-ultramarine-500 p-6'>
                  <div className="flex flex-wrap items-center text-sm mb-5">
                    <input id="default-checkbox1" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox1" className="flex-1 ml-2 px-2 text-concrete-900">Add Cable Armoring</label>
                  </div>
                  <div className="flex flex-wrap items-center text-sm mb-5">
                    <input id="default-checkbox2" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox2" className="flex-1 ml-2 px-2 text-concrete-900">Add Cable Weatherization</label>
                  </div>
                  <div className="flex flex-wrap items-center text-sm mb-0">
                    <input id="default-checkbox3" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox3" className="flex-1 ml-2 px-2 text-concrete-900">Add Phase Matching</label>
                  </div>
                </div>
                <span className='text-sm font-medium block mt-5 text-ultramarine-500 text-right'>Unit of measurement: inches</span>
              </div>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2'>
            <form action="">
              <div className='mb-4'>
                <input type="text" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='First Name*' />
              </div>
              <div className='mb-4'>
                <input type="text" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='Last Name*' />
              </div>
              <div className='mb-4'>
                <input type="email" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='Email Address*' />
              </div>
              <div className='mb-4'>
                <input type="text" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='Phone Number' />
              </div>
              <div className='mb-4'>
                <input type="text" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='Company Name' />
              </div>
              <div className='mb-4'>
                <input type="text" className='border border-ultramarine-500 py-2 px-3 text-sm w-full' placeholder='Zip Code' />
              </div>
              <div className='mb-4 mt-10'>
                <button className='bg-ultramarine-500 hover:bg-ultramarine-300 text-white px-9 py-3 rounded font-medium w-full'>Submit</button>
              </div>
              <div className='mb-4'>
                <button className='bg-well-read-500 hover:bg-well-read-300 text-white px-9 py-3 rounded font-medium w-full'>Return</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Submit;

