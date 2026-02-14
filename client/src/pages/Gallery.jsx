import React, { useState } from "react";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "wedding", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
    { id: "birthday", name: "Birthdays" },
    { id: "anniversary", name: "Anniversaries" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      category: "wedding",
      title: "Elegant Wedding Setup",
      description: "Beautiful outdoor wedding ceremony with floral decorations",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      category: "corporate",
      title: "Corporate Event",
      description: "Professional conference setup with modern amenities",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      category: "birthday",
      title: "Birthday Celebration",
      description: "Colorful birthday party with themed decorations",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      category: "wedding",
      title: "Wedding Reception",
      description: "Grand wedding reception with elegant table settings",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      category: "anniversary",
      title: "Anniversary Party",
      description: "Romantic anniversary celebration with candlelit ambiance",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519167758481-83f1426e6b1a?w=600&h=400&fit=crop",
      category: "corporate",
      title: "Product Launch",
      description: "Modern product launch event with interactive displays",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      category: "wedding",
      title: "Wedding Ceremony",
      description: "Traditional wedding ceremony with cultural elements",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
      category: "birthday",
      title: "Kids Birthday",
      description: "Fun-filled kids birthday party with games and activities",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      category: "corporate",
      title: "Team Building",
      description: "Corporate team building event with outdoor activities",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful events. From intimate gatherings
            to grand celebrations, each event tells a unique story of joy,
            elegance, and unforgettable memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <FaSearch className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              >
                <FaTimes />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
              >
                <FaChevronRight />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-lg opacity-90">
                  {selectedImage.description}
                </p>
                <p className="text-sm opacity-75 mt-2">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Want to See Your Event Here?
          </h2>
          <p className="text-xl mb-6">
            Let us help you create memories that will last a lifetime. Contact
            us to start planning your perfect event.
          </p>
          <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Plan Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
