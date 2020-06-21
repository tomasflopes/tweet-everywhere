import React, { useState } from 'react';
import './app.css';

import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';

import api from './services/api';

export default function App() {
  const [tweet, setTweet] = useState('');
  const [spot, setSpot] = useState('');
  const [data, setData] = useState({});

  async function handleSubmit() {
    const params = window.location.href.split('/?')[1];
    const tokens = params.split('&');

    const response = await api.post('/tweetar', {
      tweet,
      spot
    }, {
      token: tokens[0],
      secret: tokens[1]
    }).catch(error => {
      console.log(error);
    });

    setData(response.data);
  }

  return (
    <>
      <a href="http://localhost:3333/auth/twitter">Login</a>
      <div className="form">
        <label htmlFor="tweet">Tweet</label>
        <input type="text" onChange={event => setTweet(event.currentTarget.value)} /><br />
        <label htmlFor="tweet">Spot</label>
        <input type="text" onChange={event => setSpot(event.currentTarget.value)} /><br />
        <button onClick={handleSubmit}><Icon size={1} className="tweetIcon" path={mdiSend} /><span className="tweetText">Tweet</span></button>
      </ div>
      {
        data.data ? (
          <div className="publishedTweet">
            <div className="info">
              <div className="city">
                <span>Published from: {data.cityName}</span>
                <span className="cityFlag">{data.flag}</span>
              </div>
              <div className="userInfo">
                <img src={data.data.user.profile_image_url_https} className="userPhoto" alt={"ava"} />
                <span className="userName">{data.data.user.name}</span>
                <span className="userScreenName">@{data.data.user.screen_name}</span>
              </div>
            </div>
            <div className="content">
              <span className="tweet"><span className="tweetPlaceholder">Tweet:</span> {data.data.text}</span>
              <span className="tweetDate">{data.data.created_at.split('+')[0]}</span>
            </div>
          </div>
        ) : null
      }
    </>
  );
}
