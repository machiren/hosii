import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

const Article = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>記事</title>
      </Head>
      <p>記事</p>
    </>
  )
}

const getServerSideProps: GetServerSideProps = async (_context: GetServerSidePropsContext) => {
  const article = { id: 1, title: 'TITLE' };
  return {
    props: {
      article
    },
  }
}

export default Article