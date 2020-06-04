import React from 'react';
import styles from './Home.module.css';
import News from '../../components/News';

const Home = props => {
  return (
    <div className={styles.container}>
      <News
        author="Elizabeth Cohen, Senior Medical Correspondent"
        title="Trump said he took hydroxychloroquine to prevent coronavirus, but new study shows that doesn't work - CNN"
        description="On the heels of studies showing hydroxychloroquine doesn't help patients in the hospital with Covid-19, a new study -- the first of its kind -- shows the drug doesn't work to prevent infection with the virus, either."
        image= "https://cdn.cnn.com/cnnnext/dam/assets/200522113337-03-hydroxychloroquine-tablet-0520-super-tease.jpg"
        date= "2020-06-03T20:42:58Z"
      />
    </div>
  )
}

export default Home;