import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import styles from './News.module.css';

const News = ({
  url,
  urlToImage,
  title,
  description,
  content,
  author,
  publishedAt
}) => {
  return (
    <>
      <Jumbotron className={styles.container}>
        <Image className={styles.image} src={urlToImage} rounded />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.block}>
            {description}
          </div>
          <div className={styles.block}>
            {content}
          </div>
          <div className={styles.block}>
            Author: {author}
          </div>
          <div className={styles.block}>
            Published: {publishedAt}
          </div>
        </div>
      </Jumbotron>
    </>
  )
}

export default News;