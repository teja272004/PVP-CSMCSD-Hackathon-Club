import { useState } from "react";
import { X } from "lucide-react";

const HackathonGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const photos: string[] = [
    "/webdev/1.jpg",
    "/webdev/2.jpg",
    "/webdev/3.jpg",
    "/webdev/4.jpg",
    "/webdev/5.jpg",
    "/webdev/6.jpg",
    "/webdev/7.jpg",
    "/webdev/8.jpg",
    "/webdev/9.jpg",
    "/webdev/10.jpg",
    "/webdev/11.jpg"
  ];

  return (
    <section
      id="gallery"
      className="relative container mx-auto px-4 py-12"
      style={{ backgroundColor: "#e0f7fa" }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center z-10 relative">
        FullStack Hackathon Highlights
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10 relative">
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Hackathon ${idx + 1}`}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {/* Modal / Preview */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl mx-4">
            <img
              src={selected}
              alt="Preview"
              className="rounded-lg max-h-[80vh] w-auto mx-auto"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
              onClick={() => setSelected(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HackathonGallery;
