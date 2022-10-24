import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/post"
import Head from "next/head"
import Date from "../../components/date"
import utilStyles from "../../styles/utils.module.css"

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  //console.log(paths)
  //contains an array of known paths returned by getAllPostIds()

  return {
    paths,
    fallback: false,
    // no idea what the above means!
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
// I cannot log the paths array with console.log(paths)
// When is the getAllPostIds() function called and how do I log it?
