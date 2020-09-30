const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

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
