import { Document } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

interface AssetFile {
  url: string;
  details?: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

interface AssetFields {
  title: string;
  description?: string;
  file: AssetFile;
}

export interface BlogPostFields {
  title: string;
  image?: Asset;
  body: Document;
  recommendedPosts?: Entry<BlogPostFields>[];
}

export interface BlogPost extends Entry<BlogPostFields> {}
