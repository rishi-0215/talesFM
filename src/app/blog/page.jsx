import ContentSection from '@/components/contentSection/contentSection';
import { loadAllBlogs } from '@/lib/blog';
import { loadPageMetadata } from '@/lib/metadata';

export async function generateMetadata() {
  return loadPageMetadata("blog");
}

const Page = async () => {
  const posts = await loadAllBlogs(); 
  return (
    <>
    <ContentSection posts={posts}/>
    </>
  )
}

export default Page

