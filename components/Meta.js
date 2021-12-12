import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Resonance and Wonder",
  keywords:
    "marketplace, shopping, feel good, self-care, eco-friendly, one-stop-shop, ecommerce, online shopping",
  description:
    "A marketplace representing brands who not only have great products, but have their heart in the right place. Every time you shop at Resonance and Wonder, you are doing something good for you and for the world!",
};

export default Meta;
