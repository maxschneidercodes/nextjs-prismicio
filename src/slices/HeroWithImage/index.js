import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroWithImageSlice} HeroWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroWithImageSlice>} HeroWithImageProps
 * @param {HeroWithImageProps}
 */
const HeroWithImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} />
      <PrismicNextImage field={slice.items[0].image} />
    </section>
  );
};

export default HeroWithImage;
