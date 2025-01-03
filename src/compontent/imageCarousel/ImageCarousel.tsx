"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./carousel.css";

type ImageListType = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageListType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setSlidesCount(emblaApi.slideNodes().length);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="carousel-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images?.map((eachImg) => {
            return (
              <div className="embla__slide">
                <div className="img_container">
                  <Image src={eachImg} alt="img" width={500} height={600} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {images?.length > 1 ? (
        <div className="dots">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === selectedIndex ? "dot--active" : ""}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ImageCarousel;
