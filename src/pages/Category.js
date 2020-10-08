import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const Category = () => {
  const { slug } = useParams()
  const categories = useSelector((state) => state.categories)
  const location = useSelector((state) => state.navigation.location)
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news)
  const catID = `category/ ${
    categories.find((cat) => cat.link === "/" + slug).id
  }`
  useEffect(() => {
    dispatch(actions.fetchNewsBegin())
  }, [location, dispatch])
  useEffect(() => {
    fetchNews(`${ENDPOINT}news/${catID}`)
  }, [slug, catID])
  //

  return <div>{<CardContainer news={news} />}</div>
}

export default Category
