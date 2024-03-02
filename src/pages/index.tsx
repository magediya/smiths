import type { ReactNode } from 'react';
import { Meta } from '@/layout/Meta';
import { Main } from '@/layout/Main';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Homepage from '@/components/home/homePage';
// import { getHomeContent } from '@/components/home/core/_request';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};


/* export async function getServerSideProps(context: any) {
  
  // get full url with protocol and host
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const siteUrl = `${protocol}://${host}${context.req.url}`;

  // locale language
  let locale= await context?.locale ? context?.locale : 'en';

  try{
    let homeData = await getHomeContent({locale})
      return {
        props: { homeData:homeData?.data?.[0] ? homeData?.data?.[0] : "", siteUrl }
      }
  }catch(err:any){
    return {
      props: { homeData: "", siteUrl, error:err?.response?.data?.error ? err?.response?.data?.error : "" }
    }
  }
  
} */

const homePage = () => {
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
      <Homepage />
    </Main>
  );
};

export default homePage;

