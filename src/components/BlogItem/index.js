import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetailsList} = props
  const {imageUrl, author, topic, title, avatarUrl, id} = blogDetailsList

  return (
    <Link to={`/blogs/${id}`}>
      <li className="li-blog-item-container">
        <img src={imageUrl} alt={title} className="image-resize-blog" />
        <div className="topic-details-container">
          <p className="topic-para">{topic}</p>
          <h1 className="title-heading">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={title} className="image-avatar" />
            <p className="name-author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
