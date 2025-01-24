const VolumeSlider = () => {
  return (
    <div className="w-full h-1 bg-white relative col-span-4 rounded-lg">
      <div className="absolute w-1/2 h-full top-0 bottom-0 left-0 bg-textPrimary rounded-l-lg"></div>
      <button
        className="absolute size-[10px] rounded-full bg-textPrimary top-1/2 transform -translate-y-1/2"
        style={{ left: "49%" }}
      />
    </div>
  );
};
export default VolumeSlider;
