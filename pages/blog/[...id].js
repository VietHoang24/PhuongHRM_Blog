import LayoutWrapper from '@/components/LayoutWrapper'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import PostLayout from '@/layouts/PostLayout'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getArticleId, getArticleStatic, useInfGetArticleById } from 'api/article'
const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const paths= await getArticleId()
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let post = new QueryClient();
  await post.fetchInfiniteQuery(['get-articles-by-id'],
    ()=>getArticleStatic({id: params.id}));
  // const post = useInfGetArticleById(params.id)
  post = JSON.parse(JSON.stringify(dehydrate(post)));

  return { props: { post} }
  // return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc } = post
  const frontMatter=post?.queries[0]?.state?.data?.pages[0]

  console.log("post là: ",frontMatter)
  return (
    <>
      {/* {frontMatter?.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter?.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={frontMatter?.content}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : ( */}
      <PostLayout frontMatter={frontMatter}>
        <p>
          {frontMatter.content}
        </p>
         {/* <div className="mt-24 text-center">
          <PageTitle>
            <p>{frontMatter.content}</p>{''}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div> */}
      </PostLayout>
       
      {/* )} */}
    </>
  )
}
Blog.layout = LayoutWrapper
