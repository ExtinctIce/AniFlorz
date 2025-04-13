export const NextHandleEpisode = (props: any) => {
  return (
    <div className="flex items-center mr-10">
      <button
        onClick={props.handleNextEpisode}
        disabled={
          parseInt(props.activeEpisode, 10) >=
          (props.title?.player?.list?.length || 0)
        }
        className="text-gray-900 hover:text-white border border-neutral-80 focus:ring-4 focus:outline-none focus:neutral-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-white dark:focus:ring-neutral-900 cursor-pointer hover:bg-neutral-900  hover:scale-105 duration-500 transform"
      >
        след. серия
      </button>
    </div>
  );
};
