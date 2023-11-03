/**
 * @typedef {import("@prismicio/client").Content.MySliceSlice} MySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MySliceSlice>} MySliceProps
 * @param {MySliceProps}
 */
const MySlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for my_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default MySlice;
