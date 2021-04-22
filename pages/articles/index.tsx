import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"

const Articles = ({ articles }): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return <p>記事一覧</p>
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