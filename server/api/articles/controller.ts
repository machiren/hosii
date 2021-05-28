import { findArticles, addArticle } from '$/service/articles'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async () => {
    const articles = await findArticles();
    return  { status: 200, body: articles }
  },
  post: async ({ body }) => {
    const article = await addArticle(body)
    return { status: 201, body: article }
  }
}))
