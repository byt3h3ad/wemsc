import * as ReactSlider from "@radix-ui/react-slider";

export const Slider = ({ value = 1, onChange }) => {
  const handleChange = (e) => {
    onChange?.(e[0]);
  };
  return (
    <ReactSlider.Root
      className="relative flex items-center select-none touch-none w-full h-10 group"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
    >
      <ReactSlider.Track className="bg-neutral-600 relative grow rounded-full h-1">
        <ReactSlider.Range className="absolute bg-white group-hover:bg-blue-600 rounded-full h-full" />
      </ReactSlider.Track>
      <ReactSlider.Thumb className="hidden group-hover:block w-2 h-2 bg-white rounded-full outline-none ring focus:ring-blue-600 touch-none" />
    </ReactSlider.Root>
  );
};
