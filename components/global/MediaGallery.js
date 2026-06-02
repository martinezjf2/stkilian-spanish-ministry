// components/MediaGalleryPreview.jsx

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/*
  =========================
  YOUTUBE HELPERS
  =========================
*/
const isYouTube = (src) =>
  typeof src === "string" && src.includes("youtube.com/embed/");

const getYouTubeThumbnail = (src) => {
  const id = src?.split("youtube.com/embed/")[1]?.split("?")[0];
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
};

const getVideoThumbnail = (item) => {
  if (item.thumbnail) return item.thumbnail;
  if (isYouTube(item.src)) return getYouTubeThumbnail(item.src);
  return null;
};

export default function MediaGalleryPreview({
  title = "Gallery",
  items = [],
  previewCount = 6,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const videoRef = useRef(null);
  const savedTimes = useRef({});

  const previewItems = items.slice(0, previewCount);
  const selectedItem =
    selectedIndex !== null ? previewItems[selectedIndex] : null;

  /*
    =========================
    RESTORE VIDEO POSITION
    Only for local videos —
    YouTube iframes are sandboxed
    =========================
  */
  useEffect(() => {
    if (selectedIndex === null) return;
    if (selectedItem?.type !== "video") return;
    if (isYouTube(selectedItem.src)) return;
    if (!videoRef.current) return;

    const saved = savedTimes.current[selectedIndex] ?? 0;
    videoRef.current.currentTime = saved;

    if (saved > 0) {
      videoRef.current.play().catch(() => {});
    }
  }, [selectedIndex, selectedItem]);

  /*
    =========================
    SAVE CURRENT VIDEO TIME
    =========================
  */
  const saveCurrentTime = () => {
    if (
      videoRef.current &&
      selectedItem?.type === "video" &&
      !isYouTube(selectedItem.src)
    ) {
      savedTimes.current[selectedIndex] = videoRef.current.currentTime;
    }
  };

  /*
    =========================
    OPEN / CLOSE MODAL
    =========================
  */
  const openItem = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    saveCurrentTime();
    setSelectedIndex(null);
  };

  /*
    =========================
    NEXT / PREVIOUS
    =========================
  */
  const nextMedia = () => {
    saveCurrentTime();
    setSelectedIndex((prev) =>
      prev === previewItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    saveCurrentTime();
    setSelectedIndex((prev) =>
      prev === 0 ? previewItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[5px] text-sm text-neutral-400 mb-4">
              Captured Moments
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
          </div>

          {/* VIEW FULL ALBUM */}
          <Link
            href="/jon-carlo/gallery"
            className="
              group
              inline-flex
              items-center
              gap-3
              bg-white
              text-black
              px-6
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
            "
          >
            View Full Album
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4">
          {previewItems.map((item, index) => {
            const featured = index === 0 || index === 3;
            const thumb = getVideoThumbnail(item);

            return (
              <button
                type="button"
                key={index}
                onClick={() => openItem(index)}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  group
                  cursor-pointer
                  text-left
                  bg-neutral-900
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white/60
                  transition-all
                  duration-300
                  ${featured ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                {/* THUMBNAIL */}
                {item.type === "video" ? (
                  <>
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={item.alt || "Video Thumbnail"}
                        className="
                          w-full h-full object-cover
                          group-hover:scale-110
                          transition duration-500
                          pointer-events-none
                        "
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="
                          w-full h-full object-cover
                          pointer-events-none
                        "
                      />
                    )}

                    {/* PLAY BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="
                          w-16 h-16 rounded-full
                          bg-white/90 text-black
                          flex items-center justify-center
                          text-2xl shadow-lg
                        "
                      >
                        ▶
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition duration-500
                      pointer-events-none
                    "
                  />
                )}

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    opacity-80 pointer-events-none
                  "
                />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-5 pointer-events-none">
                  <div
                    className="
                      bg-white/20 backdrop-blur-md
                      px-3 py-1 rounded-full text-xs
                      inline-block mb-2
                    "
                  >
                    {item.type === "video"
                      ? isYouTube(item.src) ? "YOUTUBE" : "VIDEO"
                      : "IMAGE"}
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold">
                    {item.alt || "View Moment"}
                  </h3>
                </div>

                {/* HOVER */}
                <div
                  className="
                    absolute inset-0 bg-white/10
                    opacity-0 group-hover:opacity-100
                    transition pointer-events-none
                  "
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/95 backdrop-blur-md
            flex items-center justify-center px-4
          "
        >
          {/* CLOSE */}
          <button
            onClick={closeModal}
            className="
              absolute top-5 right-5 z-50
              w-12 h-12 rounded-full
              bg-white/10 hover:bg-white/20 text-2xl
            "
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            onClick={prevMedia}
            className="
              absolute left-4 md:left-10
              text-5xl text-white/70 hover:text-white z-50
            "
          >
            ‹
          </button>

          {/* MEDIA */}
          <div className="max-w-6xl w-full flex flex-col items-center">
            {selectedItem.type === "video" ? (
              isYouTube(selectedItem.src) ? (
                /*
                  ── YOUTUBE EMBED ──
                  autoplay=1 starts playing on open
                  rel=0 hides related videos
                */
                <div
                  className="w-full rounded-2xl overflow-hidden bg-black"
                  style={{ aspectRatio: "16/9" }}
                >
                  <iframe
                    key={selectedIndex}
                    src={`${selectedItem.src.split("?")[0]}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              ) : (
                /*
                  ── LOCAL VIDEO ──
                  Playback position saved/restored
                */
                <div className="relative max-h-[82vh] rounded-2xl overflow-hidden bg-black">
                  <video
                    key={selectedIndex}
                    ref={videoRef}
                    src={selectedItem.src}
                    poster={selectedItem.thumbnail}
                    controls
                    playsInline
                    preload="auto"
                    className="max-h-[82vh] rounded-2xl bg-black z-10 relative"
                  />
                </div>
              )
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt || ""}
                className="max-h-[82vh] rounded-2xl"
              />
            )}

            {/* ACTIONS */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {selectedItem.type === "image" && (
                <a
                  href={selectedItem.src}
                  download
                  className="
                    px-6 py-3 rounded-xl
                    bg-white text-black font-semibold
                    hover:scale-105 transition
                  "
                >
                  Download
                </a>
              )}
              <button
                onClick={closeModal}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                Exit
              </button>
            </div>
          </div>

          {/* NEXT */}
          <button
            onClick={nextMedia}
            className="
              absolute right-4 md:right-10
              text-5xl text-white/70 hover:text-white z-50
            "
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}