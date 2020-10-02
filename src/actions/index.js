export const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN"
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS"
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR"
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_LOCATION = "SET_LOCATION"
export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
})

export const fetchNews = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
})

export const fetchNewsError = (error) => ({
  type: FETCH_NEWS_ERROR,
  payload: { error },
})

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: { category },
})

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: { location },
})

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
