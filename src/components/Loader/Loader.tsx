const Loader = () => {
  return (
    <div className="absolute z-40 overflow-y-hidden top-0 left-0 bg-zinc-900 w-full h-full flex items-center justify-center">
      <div className="w-60 h-60 border-8 border-t-pink-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
