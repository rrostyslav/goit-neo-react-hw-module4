import axios from 'axios';
import env from '@/lib/env';

const { ACCESS_KEY } = env;

/**
 * @typedef {Object} UnsplashUser
 * @property {string} id
 * @property {string} name
 * @property {string} username
 * @property {Object} profile_image
 * @property {string} profile_image.small
 * @property {string} profile_image.medium
 * @property {string} profile_image.large
 */

/**
 * @typedef {Object} UnsplashImage
 * @property {string} id
 * @property {string} alt_description
 * @property {string} description
 * @property {Object} urls
 * @property {string} urls.small
 * @property {string} urls.regular
 * @property {string} urls.full
 * @property {Object} links
 * @property {string} links.html
 * @property {number} likes
 * @property {UnsplashUser} user
 */

/**
 * @typedef {Object} UnsplashSearchResponse
 * @property {number} total
 * @property {number} total_pages
 * @property {UnsplashImage[]} results
 */

/**
 * @typedef {Object} GetPhotosParams
 * @property {[string, string, number]} queryKey
 * @property {AbortSignal|null} [signal]
 */

/**
 * Fetch photos from Unsplash API
 * @param {GetPhotosParams} params
 * @returns {Promise<UnsplashSearchResponse>}
 */
export default async function getPhotos({ queryKey, signal = null }) {
  const [, searchQuery, page] = queryKey;

  if (!searchQuery) {
    const res = await axios.get(`https://api.unsplash.com/photos`, {
      params: {
        client_id: ACCESS_KEY,
        page: page || 1,
        per_page: 12,
        order_by: 'popular',
      },
      signal,
    });

    return res.data;
  }

  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page: page || 1,
      per_page: 12,
      orientation: 'landscape',
    },
    signal,
  });

  return res.data;
}
