import { Article } from '$/types/articles'
import { Articles } from '../../types/articles/index';

export type Methods = {
  get: {
    resBody: Articles
  }
  post: {
    reqBody: Pick<Article, 'title' | 'content'>
    status: 201
    resBody: Article
  }
}
