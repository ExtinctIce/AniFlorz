import { useEffect, useState } from "react";
import { api } from "../../shared/api";
import { Pagination, PaginationProps } from "antd";
import { TitleList, IPagination, ITitle } from "../../shared/types/anime.type";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import SearchMain from "../../widgets/SearchWidgets/SearchMain";

const AnimeList = () => {
  const [allTitles, setAllTitles] = useState<ITitle[]>();
  const [pagination, setPagination] = useState<IPagination>();
  const [activePage, setActivePage] = useState(1);

  const changePage: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    api
      .get<TitleList>("/v3/title/changes", {
        params: {
          playlist_type: "array",
          page: activePage,
          items_per_page: 16,
        },
      })
      .then((responce) => {
        setAllTitles(responce.data.list);
        setPagination(responce.data.pagination);
      });
  }, [activePage]);

  return (
    <>
      <SearchMain />

      <div className="container py-5">
        <div className="container grid grid-cols-2 md:grid-cols-8 gap-5 justify-items-center">
          {allTitles &&
            allTitles?.map((title) => (
              <UpdateCard
                key={title?.id}
                title={title?.names.ru}
                code={title?.code}
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
