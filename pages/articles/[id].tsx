import Head from 'next/head';
import { useRouter } from 'next/router'
import useAspidaSWR from '@aspida/swr';
import aspida from '@aspida/node-fetch';
import api from '~/server/api/$api';
import Link from 'next/link';

const client = api(aspida());
const Article = () => {
  const router = useRouter();
  const query = router.query as unknown as { id: number };
  const { data, error } = useAspidaSWR(client.articles._articleId(query.id));
  if (error) {
    return <p>記事の取得に失敗しました</p>
  }
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Head>
        <title>記事</title>
      </Head>
      <p>記事</p>
      <p>
        <Link href={`articles/${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </p>
    </>
  );
};

export default Article;