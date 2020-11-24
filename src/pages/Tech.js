import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { fetchNews, ENDPOINT } from "../utils"
import CardContainer from "../components/CardContainer"
import * as actions from "../actions"

/* const Category = () => {
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
} */

class Tech extends React.Component{

  componentDidMount(){
    
    const { categories, location} = this.props
    const locationID = typeof categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
    ) !== 'undefined' ? categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
    ).id : 0
    this.props.dispatch(actions.setLocation(locationID))
    this.props.dispatch(actions.fetchNewsBegin())
    fetchNews(`${ENDPOINT}news/category/${locationID}`)
  }

  render(){
    const { news } = this.props
    return <div>{<CardContainer news={news} />}</div>
  }
  
}

const mapStateToProps = (state) => ({ categories: state.categories, news: state.news, location: state.navigation.location })

export default connect(mapStateToProps)(withRouter(Tech))
