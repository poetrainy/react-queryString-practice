import { SearchValueType } from "src/types/search";

export const transitionParamsUrl = (searchValue: SearchValueType) => {
  // キーワード検索およびソートを行った際にそのURLに遷移する関数

  // クエリストリングを再作成する
  const createUpdateParams = new URLSearchParams(searchValue).toString();
  // 遷移する
  window.location.href = `/?${createUpdateParams}`;
};
