import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useRouter } from 'next/router';

const Articles = ({ articles }): InferGetServerSidePropsType<typeof getServerSideProps> => {
  const router = useRouter();
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

const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const articles = [{ id: 1, title: 'TITLE' }, { id: 2, title: 'TITLE' }];
  return {
    props: {
      articles
    },
  }
}

export default Articles