export const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const SET_CATEGORY_AND_LOCALIZATION = "SET_CATEGORY_AND_LOCALIZATION";

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
});

export const fetchNews = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsError = (error) => ({
  type: FETCH_NEWS_ERROR,
  payload: { error },
});

export const setCategoryAndLocalization = (category, localization) => ({
  type: SET_CATEGORY_AND_LOCALIZATION,
  payload: { category, localization },
});
