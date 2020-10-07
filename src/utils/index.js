import * as actions from "../actions"
import store from "../store"

export const ENDPOINT = "https://api.canillitapp.com/"

const { dispatch } = store

export const fetchNews = async (endpoint) => {
  try {
    const response = await fetch(endpoint)
    if (response.ok) {
      const news = await response.json()

      dispatch(actions.fetchNews(news.slice(0, 10)))
    } else {
      dispatch(actions.fetchNewsError(true))
    }
  } catch (err) {
    dispatch(actions.fetchNewsError(true))
    console.log(err)
    throw err
  }
}

export default fetchNews
