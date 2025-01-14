const Loader = () => {
  return (
    <div className="absolute z-40 overflow-y-hidden top-0 left-0 bg-neutral-950 w-full h-full flex items-center justify-center">
      <div className="w-60 h-60 border-8 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
