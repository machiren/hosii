import { PrismaClient } from '@prisma/client'
import { Article } from '$/types/articles';

const prisma = new PrismaClient()

export const findArticle = (id: Article['id']) => prisma.articles.findUnique({ where: { id } });
export const findArticles = () => prisma.articles.findMany();
export const addArticle = (body: Pick<Article, 'title' | 'content'>) => prisma.articles.create({ data: body })