import React from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"

const Category = () => {
  const { slug } = useParams()
  const categories = useSelector((state) => state.categories)
  const news = useSelector((state) => state.news)
  const catID = categories.find((cat) => cat.link === "/" + slug).id

  fetchNews(`${ENDPOINT}news/category/${catID}`)

  return (
    <div>
      <ul>
        {news.map((news) => (
          <li key={news.news_id}>{news.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
