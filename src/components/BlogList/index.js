import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {listOfBlogs: [], isLoaded: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({listOfBlogs: updateData, isLoaded: false})
  }

  render() {
    const {listOfBlogs, isLoaded} = this.state

    return (
      <ul className="ul-blog-container">
        {isLoaded ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          listOfBlogs.map(eachBlog => (
            <BlogItem key={eachBlog.id} blogDetailsList={eachBlog} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
