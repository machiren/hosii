import { findArticle } from '$/service/articles'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ params }) => {
    const article = await findArticle(params.articleId);
    return { status: 200, body: article }
  }
}))
