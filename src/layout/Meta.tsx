/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogType?: string;
  ogLocale?: string;
  ogDescription?: string;
  ogImage?: any;
  structuredData?: any;
  ogSitename?: any;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        {/* structured data */}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props?.structuredData),
          }}
        />
      </Head>

     
      {/* meta tags */}
      <NextSeo
        noindex={
          process.env.NEXT_PUBLIC_WEBSITE_ENV !== undefined &&
          process.env.NEXT_PUBLIC_WEBSITE_ENV == "Production"
            ? false
            : true
        }
        nofollow={
          process.env.NEXT_PUBLIC_WEBSITE_ENV !== undefined &&
          process.env.NEXT_PUBLIC_WEBSITE_ENV == "Production"
            ? false
            : true
        }
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          type: props?.ogType,
          title: props?.ogTitle,
          description: props?.ogDescription,
          locale: props?.ogLocale,
          siteName: props?.ogSitename ? props?.ogSitename : "Smiths Interconnect",
          images: [
            {
              url: props?.ogImage?.url,
              alt: props?.ogImage?.alternativeText,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
