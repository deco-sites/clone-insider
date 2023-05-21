import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface BannerProps {
  srcMobile: string;
  srcDesktop?: string;
  alt: string;
}

function Banner({ srcMobile, srcDesktop, alt }: BannerProps) {
  return (
    <Picture>
      <Source
        media="(max-width: 767px)"
        src={srcMobile}
        width={100}
        height={100}
      />
      <Source
        media="(min-width: 768px)"
        src={srcDesktop ? srcDesktop : srcMobile}
        width={250}
        height={250}
      />
      <img
        class="w-full"
        sizes="(max-width: 640px) 100vw, 30vw"
        src={srcMobile}
        alt={alt}
        decoding="async"
        loading="lazy"
      />
    </Picture>
  );
}

export default Banner;
