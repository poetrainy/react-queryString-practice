import { useNavigate, useLocation } from "react-router-dom";

export const useGetQueryString = () => {
  // クエリストリングの取得->生成・遷移／searchValueの更新を行うhooks
  const navigate = useNavigate();

  // クエリストリングを取得する
  const searchParams = useLocation().search.slice(1); // ?が入ってしまうので削除

  if (!searchParams) {
    // URLにクエリストリングが存在しない場合、初期値を元に生成して追加し遷移する
    const createDefaultParams = new URLSearchParams(searchParams).toString();
    return navigate(`/?${createDefaultParams}`);
  }

  // 取得したクエリストリングからそれぞれのkeyに対応するvalueを取得する
  const getKeywordParams = new URLSearchParams(searchParams).get("keyword");
  const getSortParams = new URLSearchParams(searchParams).get("sort");
  const getOrderParams = new URLSearchParams(searchParams).get("order");

  // searchValueを更新する
  if (
    getKeywordParams === null ||
    getSortParams === null ||
    getOrderParams === null
  )
    return;

  return {
    keyword: getKeywordParams,
    sort: getSortParams,
    order: getOrderParams,
  };
};
