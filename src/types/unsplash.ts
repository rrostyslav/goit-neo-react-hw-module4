export interface UnsplashUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
    paypal_email: string | null;
  };
}

export interface UnsplashImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface UnsplashImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface UnsplashSponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: UnsplashUser;
}

export interface UnsplashImage {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
    id: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  breadcrumbs: any[];
  urls: UnsplashImageUrls;
  links: UnsplashImageLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: UnsplashSponsorship | null;
  topic_submissions: Record<string, any>;
  asset_type: string;
  user: UnsplashUser;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export interface GetPhotosParams {
  queryKey: [string, string, number];
  signal?: AbortSignal | null;
}

export interface ApiError {
  message: string;
  status?: number;
}
