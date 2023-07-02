import { FC, useEffect, useState } from "react";
import { useGetQueryString } from "src/hooks/useGetQueryString";
import { transitionParamsUrl } from "src/libs/transitionParamsUrl";
import { SearchValueType } from "src/types/search";

const Foo: FC = () => {
  // キーワード、ソートの初期値
  const [searchValue, setSearchValue] = useState<SearchValueType>({
    keyword: "",
    sort: "ソートの初期値",
    order: "ソートの順番の初期値",
  });
  const createQueryParams = useGetQueryString();

  useEffect(() => {
    if (!createQueryParams) return transitionParamsUrl(searchValue);
    setSearchValue(createQueryParams);
  }, []);

  // searchValueを用いてAPIを叩く
  // apiGet(searchValue); // 詳細な処理は省略

  const getKeyword = (keywordValue: string) => {
    // キーワードを変更したことを取得する関数
    setSearchValue((prevSearchValue: SearchValueType) => {
      return {
        ...prevSearchValue,
        keyword: keywordValue,
      };
    });
  };
  const getSort = (sortValue: string, orderValue: string) => {
    // ソートを変更したことを取得する関数
    setSearchValue((prevSearchValue: SearchValueType) => {
      return {
        ...prevSearchValue,
        sort: sortValue,
        order: orderValue,
      };
    });
  };

  const transitionValue = () => {
    transitionParamsUrl(searchValue);
  };

  return (
    <form>
      <input
        type="text"
        value={searchValue.keyword}
        onChange={(e) => getKeyword(e.target.value)}
      />
      <button type="button" onClick={() => transitionValue()}>
        送信
      </button>
    </form>
  );
};

export default Foo;
