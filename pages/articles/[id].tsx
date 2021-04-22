import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

const Article = ({article}: { article: { id: number, title: string} }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <p>記事</p>
}


const getStaticPaths: GetStaticPaths = async ()  =>  {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const hasArticle = true;
  const article = { id: 1, title: 'タイトル' };

  if(!hasArticle){
    return {
      notFound: true
    }
  }

  return {
    props: { article },
  }
}

export default Article