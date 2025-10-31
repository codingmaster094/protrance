import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  publishedDate?: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://protrance.vercel.app/api/posts', {
    next: { revalidate: 3600 }, // ISR, revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  return data.docs || [];
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <span className="text-blue-600 underline cursor-pointer">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
