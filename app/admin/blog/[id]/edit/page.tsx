import { BlogPostForm } from '@/components/admin/blog-post-form'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function EditBlogPostPage({ params }: PageProps) {
  const { id } = await params

  return <BlogPostForm mode="edit" postId={id} />
}
