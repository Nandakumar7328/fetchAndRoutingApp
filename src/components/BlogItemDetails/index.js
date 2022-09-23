import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoaded: true}

  componentDidMount() {
    this.getDataDetails()
  }

  getDataDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }

    this.setState({blogDetails: updateData, isLoaded: false})
  }

  render() {
    const {blogDetails, isLoaded} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails

    return (
      <div className="blog-detail-container">
        {isLoaded ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="details-heading">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={author} className="image-avatar" />
              <p className="name-author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="detail-image" />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
