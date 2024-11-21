import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { format } from 'date-fns';
import { Clock, ArrowLeft } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { BlogPost, BlogPostFields } from '../types/contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntry<BlogPostFields>(id!, {
          include: 2,
        });
        setPost(response);
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error || 'Post not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/blog" className="inline-flex items-center text-blue-600 mb-8 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
        
        <div className="flex items-center text-gray-500 mb-8">
          <Clock className="w-4 h-4 mr-2" />
          {format(new Date(post.sys.createdAt), 'MMMM d, yyyy')}
        </div>

        {post.fields.image && (
          <img
            src={post.fields.image.fields.file.url}
            alt={post.fields.image.fields.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
        )}

        <div className="prose prose-lg max-w-none">
          {post.fields.body && documentToReactComponents(post.fields.body)}
        </div>

        {post.fields.recommendedPosts && post.fields.recommendedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Recommended Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.fields.recommendedPosts.map((recommendedPost) => (
                <Link
                  key={recommendedPost.sys.id}
                  to={`/blog/${recommendedPost.sys.id}`}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold mb-2">{recommendedPost.fields.title}</h3>
                  <div className="text-sm text-gray-500">
                    {format(new Date(recommendedPost.sys.createdAt), 'MMMM d, yyyy')}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}