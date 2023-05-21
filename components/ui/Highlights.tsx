import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <div class="container grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <span class="font-medium text-2xl">{title}</span>
      </h2>
      <div class="flex gap-5 sm:gap-10 flex-col sm:flex-row justify-center items-center">
        {highlights.map(({ href, src, alt, label }, index) => (
          <a href={href} class="card card-compact bg-base-100">
            <figure>
              <Image
                class="rounded-[0px] w-full h-full object-cover hover:scale-125 transition-all duration-500 ease-in-out "
                src={src}
                alt={alt}
                width={450}
                height={450}
              />
            </figure>
            <div class="card-body items-center">
              <h2 class="card-title text-base font-medium">{label}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
