import { useEffect, useState } from "react";
import { api } from "../../api";
import { Pagination, PaginationProps } from "antd";
import { TitleList, IPagination, ITitle } from "../../types/anime.type";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import Loader from "../../components/Loader/Loader";

const AnimeList = () => {
  const [allTitles, setAllTitles] = useState<ITitle[]>();
  const [pagination, setPagination] = useState<IPagination>();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);

  const changePage: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get<TitleList>("/v3/title/updates", {
        params: {
          playlist_type: "array",
          page: activePage,
          items_per_page: 12,
        },
      })
      .then((responce) => {
        setAllTitles(responce.data.list);
        setPagination(responce.data.pagination);
        setLoading(false);
      });
  }, [activePage]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container py-5">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
          {allTitles &&
            allTitles?.map((title) => (
              <UpdateCard
                key={title?.id}
                title={title?.names.ru}
                code={title?.code}
                genres={title?.genres.join(", ")}
                image={title.posters.original.url}
              />
            ))}
        </div>

        <div className="flex justify-center items-center py-5">
          <Pagination
            current={activePage}
            defaultCurrent={1}
            total={pagination?.pages}
            onChange={changePage}
            showSizeChanger={false}
            size="small"
          />
        </div>
      </div>
    </>
  );
};

export default AnimeList;
