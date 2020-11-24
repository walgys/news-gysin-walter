import React from "react"
import { connect } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

const today = new Date()

class Home extends React.Component {

  componentDidMount(){
    const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    const Month =
    today.getMonth() + 1 < 10
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1
    const strDate = `${today.getFullYear()}-${Month}-${day}`
    this.props.dispatch(actions.fetchNewsBegin())
    fetchNews(`${ENDPOINT}latest/${strDate}`)
  }
  render(){
    
    const { news } = this.props

    return <div>{<CardContainer news={news} />}</div>
  }
  
}

const mapStateToProps = state => ({ news: state.news })

export default connect(mapStateToProps)(Home)
