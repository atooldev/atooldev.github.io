// app head to handle all possible needs for seo and meta tags

import Head from "next/head";

//
export type AppHeadProps = {
    title: string;
    description: string;
    image: string;
    url: string;
};
const AppHead = ({ title, description, image, url }: AppHeadProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@ofbytes" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="theme-color" content="000212" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        </Head>

    );
};

export default AppHead;