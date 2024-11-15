import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // document.title=`News-${capitalizeFirstLetter(props.category)}`;



  // articles = [

  // ]
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




const update = async () => {
  props.setProgress(0)
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6808992266cc4371bc359653a1e1bf67&page=${props.page}&pageSize=${props.pageSize}`;
setloading(true)
  let data = await fetch(url)

  props.setProgress(30)

  let pdata = await data.json()

  props.setProgress(70)
  console.log(pdata)
  setarticles(pdata.articles)
  settotalResults(pdata.totalResults)
  setloading(false)

  props.setProgress(100)
}
useEffect(() => {
    document.title=`News-${capitalizeFirstLetter(props.category)}`;
  update()


}, [])


 const fetchMoreData = async () => {
  setpage(page + 1 )
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6808992266cc4371bc359653a1e1bf67&page=${props.page}&pageSize=${props.pageSize}`;
  setloading(  true )
  let data = await fetch(url)

  let pdata = await data.json()
  console.log(pdata)
  setarticles(articles.concat(pdata.articles))
  settotalResults(pdata.totalResults)
  setloading(false)



}
return (

  <>
    <h1 className='text-center my-5'>News Title {capitalizeFirstLetter(props.category)}</h1>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className='container'>
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem source={element.source.name} title={element.title} publishedAt={element.publishedAt} author={element.author} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>

        {/* <div className="container d-flex justify-content-between">
        <button  disabled={page<=1} type="button" className="btn btn-dark" onClick={prev}>&larr; Previous</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={next}>Next &rarr;</button>
        </div> */}
      </div>
    </InfiniteScroll>


  </>

)
}

News.defaultProps = {
  country: "us",
  category: "general",
  pageSize: 4

}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,


}

export default News