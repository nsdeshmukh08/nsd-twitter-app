import React, {useState} from 'react'
import { Input } from 'antd';

import TwittsCount from '../TwittsCount/TwittsCount';

import {debounce} from '../../utilities';
import {getResults} from './TwitterPage.helper';

import './TwitterPage.css';

function TwitterPage() {
  const [twitts, setTwitts] = useState([]);
  const [hashTag , setHashTag] = useState('');
  const onChangeHashTag = debounce(async (e) => {
    const hashTagTxt = e?.target?.value;
    if(hashTagTxt){
      const {statuses = []} = await getResults(hashTagTxt);
      setTwitts(statuses);
      setHashTag(hashTagTxt);
    }
  },500);

  return (
    <>
      <div className="twitter-page">
          <h1>Twitter App</h1>

          <Input 
            placeholder="Type a #hashtag ex. Covid"
            onChange={onChangeHashTag}
            className="twitter-page-input"
          />
      </div>
      <TwittsCount twitts={twitts} hashTag={hashTag}/>
    </>
  )
}

export default TwitterPage;
