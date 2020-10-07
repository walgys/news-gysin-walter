import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const today = new Date()

const Home = () => {
  const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  const Month =
    today.getMonth() + 1 < 10
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1
  const strDate = `${today.getFullYear()}-${Month}-${day}`
  const news = useSelector((state) => state.news)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchNewsBegin())
  }, [])
  useEffect(() => {
    fetchNews(`${ENDPOINT}latest/${strDate}`)
  }, [])

  return <div>{<CardContainer news={news} />}</div>
}

export default Home
