import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

const Articles = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>記事</title>
      </Head>
      <p>記事一覧</p>
      <Link href="/articles/1">
        <a>Link to article</a>
      </Link>
    </>
  )
}

const getServerSideProps: GetServerSideProps = async (_context: GetServerSidePropsContext) => {
  const articles = [{ id: 1, title: 'TITLE' }, { id: 2, title: 'TITLE' }] as const;
  return {
    props: {
      articles
    },
  }
}

export default Articles