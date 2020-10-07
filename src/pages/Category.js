import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const Category = () => {
  const { slug } = useParams()
  const categories = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news)
  const catID = categories.find((cat) => cat.link === "/" + slug).id
  useEffect(() => {
    dispatch(actions.fetchNewsBegin())
  }, [])
  useEffect(() => {
    fetchNews(`${ENDPOINT}news/category/${catID}`)
  }, [slug, catID])
  //

  return <div>{<CardContainer news={news} />}</div>
}

export default Category
