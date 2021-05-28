import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";

const Articles = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>あったらいいなと思う「欲しい」一覧</title>
      </Head>
      <p>記事一覧</p>
      <Link href="/articles/1">
        <a>Link to article</a>
      </Link>
    </>
  );
};

const getStaticProps: GetStaticProps = async (_context: GetStaticPropsContext) => {
  const articles = [{ id: 1, title: 'TITLE' }, { id: 2, title: 'TITLE' }] as const;
  return {
    props: {
      articles
    },
  };
};

export default Articles;