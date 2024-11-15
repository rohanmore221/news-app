import React from 'react'

const NewsItem=(props)=> {
  
    let { title, desc, imgUrl, newsUrl, publishedAt, author,source } = props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div style={{    display: "flex",
                  justifyContent: "flex-end",
    right: "0",
    position: "absolute"}}>
        <span class=" badge rounded-pill bg-danger">
          {source}
          
        </span>
        </div>
        <img src={!imgUrl ? "https://www.reuters.com/resizer/v2/BHH66UZN7BPDFCJJO6XYDNCISU.jpg?auth=485c8468a46793cf47f6f2b0c7cfbcfdf7c32cd8606def8f3c3949e5f92aff0a&height=1005&width=1920&quality=80&smart=true" : imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title">{title} <span className='badge bg-secondary'>new</span> </h5>

          <p className='card-text'><small className='text-muted'>By author {!author ? "unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
          <p className="card-text">{desc}</p>
          <a href={newsUrl} target="_blank " className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }


export default NewsItem