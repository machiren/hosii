import { GetServerSideProps, GetServerSidePropsContext } from "next"

const Articles = () => {
  return <p>記事一覧</p>
}

const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}

export default Articles