import Head from 'next/head';
import Link from 'next/link';
import useAspidaSWR from '@aspida/swr';
import aspida from '@aspida/node-fetch';
import api from '~/server/api/$api';

const client = api(aspida());
const Articles = () => {
  const { data, error } = useAspidaSWR(client.articles);
  if (error) {
    return <p>記事の取得に失敗しました</p>
  }
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Head>
        <title>あったらいいなと思う「欲しい」一覧</title>
      </Head>
      <p>記事一覧</p>
      {(
        data.map(article => (
          <p>
            <Link href={`articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </p>
        ))
      )}
    </>
  );
};

export default Articles;