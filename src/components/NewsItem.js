import React, { Component } from 'react'

export  class NewsItem extends Component {
    render() {
       let {title , description , imageUrl , newsUrl , author , publishedAt , source} = this.props;
        return (
            <div>
                <div  className="card my-3 mx-3" >
  <img src={!imageUrl?"https://www.presse-citron.net/app/uploads/2022/01/Ford-Bourse-performance.jpg":imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a rel ="noreferrer" href={newsUrl}  className="btn  btn-sm btn-primary">Read More</a>
    <p className='author_time'> By {!author?"unknown": author} on {publishedAt} </p>
    <p className=' "source' >{source}</p>
  </div>
</div>
            </div>
        )  
    }
}

export default NewsItem


