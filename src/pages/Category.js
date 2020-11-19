import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const Category = () => {
  const { slug } = useParams()
  const history = useHistory()
  const categories = useSelector((state) => state.categories)
  const location = useSelector((state) => state.navigation.location)
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news)
  const catID = categories.find((cat) => cat.link === "/" + slug)
  useEffect(() => {
    dispatch(actions.fetchNewsBegin())
  }, [location, dispatch])
  
  useEffect(() => {
    if(typeof catID === 'undefined'){
      history.push('/')
    }else{
      fetchNews(`${ENDPOINT}news/category/${catID.id}`)
    }
    
  }, [slug, catID, history])
  //

  return <div>{<CardContainer news={news} />}</div>
}

export default Category
