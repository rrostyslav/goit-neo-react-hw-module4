import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import getPhotos from '@/lib/getPhotos.js';
import SearchBar from '@/components/SearchBar/index.js';
import ImageGallery from '@/components/ImageGallery/index.js';
import Loader from '@/components/Loader/index.js';
import ErrorMessage from '@/components/ErrorMessage/index.js';
import LoadMoreBtn from '@/components/LoadMoreBtn/index.js';
import ImageModal from '@/components/ImageModal/index.js';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isError, isLoading, error } = useQuery({
    queryFn: getPhotos,
    queryKey: ['photos', searchQuery, page],
    enabled: true,
  });

  useEffect(() => {
    if (data?.results) {
      if (page === 1) {
        setImages(data.results);
      } else {
        setImages((prev) => [...prev, ...data.results]);
      }
    }
  }, [data, page]);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery !== searchQuery) {
      setSearchQuery(trimmedQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const showLoadMore = data && data.results.length > 0 && page < data.total_pages;

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {isError && <ErrorMessage message={error?.message} />}

      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}

      {isLoading && <Loader />}

      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />

      <Toaster position="top-right" />
    </>
  );
}
