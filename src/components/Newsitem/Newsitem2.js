import React, { Component } from 'react'
import './NewsI.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


 
const NewsItem = (props)=> {
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 2,
      speed: 500,
      rows: 4,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 4,
          },
        },
      ],
    }
    let {title,imageUrl, newsUrl,author,date,source}=props;
    return (
      
       
      <section className='popular'>
     
        <div className='items'>
        <div className='content'>
        <div className='box shadow'>
          <div className='images row'>
            <div className='img'>
              <img src={!imageUrl ?"https://c.ndtvimg.com/2023-06/dgjo5k34_babar-azam_625x300_14_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675":imageUrl} alt={title} className="news-image" />
            </div>
            <div class='category category1'>
              <span>{source}</span>
            </div>
          </div>
          <div className='text row'>
         
            <h1 className='title'> <a style={linkStyles} rel="noreferrer" href={newsUrl} target="_blank">{title}...</a></h1>
      
            <div className='date'>
              <i class='fas fa-calendar-days'></i>
              <label>{new Date(date).toGMTString()}</label>
            </div>
            <div className='comment'>
              <i class='fas fa-comments'></i>
              <label>{0}</label>
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>
      
    )
  }


export default NewsItem
