import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const Search = () => {
  const { id } = useParams()
  const categories = useSelector((state) => state.categories)
  const responded = useSelector((state) => state.responded)
  const location = useSelector((state) => state.navigation.location)
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news)
  console.log("ser")
  useEffect(() => {
    dispatch(actions.fetchNewsBegin())
  }, [location, dispatch])
  useEffect(() => {
    fetchNews(`${ENDPOINT}search/${id}`)
  }, [id])
  //

  return (
    <div>
      {news.length > 0 ? (
        <CardContainer news={news} />
      ) : (
        responded && (
          <div style={{ marginTop: "200px", textAlign: "center" }}>
            <h2>{`No se encontraron resultados para "${id}"`}</h2>
          </div>
        )
      )}
    </div>
  )
}

export default Search
