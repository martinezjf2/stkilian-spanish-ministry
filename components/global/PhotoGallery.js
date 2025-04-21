const PhotoGallery = () => {
  const images = [
    "/images/activity1.jpg",
    "/images/activity2.jpg",
    "/images/activity3.jpg",
    "/images/activity4.jpg",
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Memories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
