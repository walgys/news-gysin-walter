import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

class Search extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(actions.fetchNewsBegin())
    fetchNews(`${ENDPOINT}search/${this.props.match.params.id}`)
    this.props.dispatch(actions.setLocation(7))
  }
  
  render(){
    const { id } = this.props.match.params
    const { responded, news} = this.props
    
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
  
}

const mapStateToProps = (state) => ({ responded: state.responded, news: state.news})

export default connect(mapStateToProps)(withRouter(Search))
