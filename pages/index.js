import LayoutWrapper from '@/components/LayoutWrapper'
import Link from '@/components/Link'
import NewsletterForm from '@/components/NewsletterForm'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { getArticleStatic, useInfArticles } from '../api/article'
const MAX_DISPLAY = 5
// export async function getStaticProps() {
//   // const posts = await getAllFilesFrontMatter('blog')
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['get-articles'], getArticleStatic)
//   return {
//     props: { dehydratedState: dehydrate(queryClient) },
//   }
// }
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.fetchInfiniteQuery(['get-articles'],getArticleStatic);

  // https://github.com/tannerlinsley/react-query/issues/1458
  const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)));

  return {
    props: {
      dehydratedState,
    },
  };
}
const Home = () => {
  let posts
  const  {data , isLoading} = useInfArticles()
  posts=data?.pages[0]
  // const abc = getArticleId();
  // console.log("abcd:",abc)
  // console.log("data là: ",data)
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mới nhất
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts?.length && 'No posts found.'}
          {/* {posts.slice(0, MAX_DISPLAY).map((frontMatter) => { */}
          {posts?.map((frontMatter) => {
            const { slug, date, title, sumary, tag,_id } = frontMatter
            return (
              <li key={date} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${_id}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tag?.map((tagItem) => (
                              <Tag key={tagItem} text={tagItem} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {sumary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${_id}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Xem thêm &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts?.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </div>
  )
}
Home.layout = LayoutWrapper

export default Home
