import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'


const prisma = new PrismaClient()

const main = async () => {
  const userQueries = [
    prisma.users.upsert({
      where: { email: 'machiren111@gmail.com' },
      update: {},
      create: {
        name: 'マッチ',
        email: `machiren111@gmail.com`,
        age: 21,
        password: await hash('machiren', 10),
      },
    }),
    prisma.users.upsert({
      where: { email: 'test@example.com' },
      update: {},
      create: {
        email: `test@example.com`,
        name: 'test',
        age: 21,
        password: await hash('test', 10)
      },
    }),
    prisma.users.upsert({
      where: { email: 'commentator@example.com' },
      update: {},
      create: {
        email: `commentator@example.com`,
        name: 'commentator',
        age: 21,
        password: await hash('comment', 10)
      },
    })
  ];
  const [match, testUser, commentator] = await prisma.$transaction(userQueries)

  const articleQueries = [
    prisma.articles.upsert({
      where: { id: 1 },
      update: {},
      create: {
        userId: match.id,
        title: 'ニコニコ風つぶやきアプリ',
        content: 'つぶやいた投稿がリアルタイムで画面上を流れるアプリ。\nつぶやきを収集してトレンドのデータを集計する'
      },
    }),
    prisma.articles.upsert({
      where: { id: 2 },
      update: {},
      create: {
        userId: match.id,
        title: 'あったらいいなが気軽に投稿できて作成されるアプリ',
        content: 'そこまで重要じゃないけどあったら便利で欲しいものを投稿する。\n投稿された記事からエンジニアやデザイナーが集まって作成されていく。'
      },
    }),
    prisma.articles.upsert({
      where: { id: 3 },
      update: {},
      create: {
        userId: testUser.id,
        title: 'ボイスシェアプラットフォーム',
        content: 'あなたが推しにリクエストした言葉が音声となってあなただけに送信されます。\nまずはサンプルボイスを聞いて推しボイスを見つけましょう！'
      },
    })
  ]
  const [articles1, articles2, articles3] = await prisma.$transaction(articleQueries)

  const commentQueries = [
    prisma.comments.upsert({
      where: { id: 1 },
      update: {},
      create: {
        articleId: articles1.id,
        userId: commentator.id,
        content: '革新的！いいね！'
      },
    }),
    prisma.comments.upsert({
      where: { id: 2 },
      update: {},
      create: {
        articleId: articles1.id,
        userId: commentator.id,
        content: '未開拓の分野じゃない？いいね！'
      },
    }),
    prisma.comments.upsert({
      where: { id: 3 },
      update: {},
      create: {
        articleId: articles2.id,
        userId: commentator.id,
        content: '皆で開発したい！'
      },
    }),
    prisma.comments.upsert({
      where: { id: 4 },
      update: {},
      create: {
        articleId: articles2.id,
        userId: commentator.id,
        content: 'デザインしてみたいな〜'
      },
    }),
    prisma.comments.upsert({
      where: { id: 5 },
      update: {},
      create: {
        articleId: articles3.id,
        userId: commentator.id,
        content: '作ってくれたら利用したい！'
      },
    }),
    prisma.comments.upsert({
      where: { id: 6 },
      update: {},
      create: {
        articleId: articles3.id,
        userId: commentator.id,
        content: 'エンジニア集まれ〜！'
      },
    })
  ]

  const comments = await prisma.$transaction(commentQueries)

  console.info({ match, testUser })
  console.info({ articles1, articles2, articles3 })
  console.info({ ...comments })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })