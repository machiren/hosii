import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

const Article = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <p>記事</p>
}

const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const article = { id: 1, title: 'TITLE' };
  return {
    props: {
      article
    },
  }
}

export default Article