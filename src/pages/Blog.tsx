import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import type { BlogPost, BlogPostFields } from '../types/contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries<BlogPostFields>({
          content_type: 'blogPage-2',
          order: '-sys.createdAt',
          include: 2,
        });
        setPosts(response.items);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Contentful Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Latest Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert perspectives on real estate investment and financing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.sys.id}
                to={`/blog/${post.sys.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {post.fields.image && (
                  <img
                    src={post.fields.image.fields.file.url}
                    alt={post.fields.image.fields.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {post.fields.title}
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {format(new Date(post.sys.createdAt), 'MMMM d, yyyy')}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
