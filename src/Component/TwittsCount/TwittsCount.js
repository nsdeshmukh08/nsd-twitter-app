import React, {useState, useEffect} from 'react';

import './TwittsCount.css';

function TwittsCount({twitts = [], hashTag = ''}) {
  const [count, setCount] = useState({positive: 0, negative: 0});

  
  useEffect(() => {

    const posNegCount = twitts.reduce((acc, next)=>{
      const covid = next.text.toLowerCase().includes('COVID'.toLowerCase());
      const positive = next.text.toLowerCase().includes('POSITIVE'.toLowerCase());
      const negative = next.text.toLowerCase().includes('Negative'.toLowerCase());

      if( covid && positive){
        acc.positive = acc.positive + 1;
      }

      if(covid && negative){
        acc.negative = acc.negative + 1;
      }
      return acc;
    }, {positive: 0, negative: 0});

    setCount(posNegCount);
  }, [twitts]);

  if(!hashTag){
    return <h2 className="twitts-count">Please Search for something ex. Covid</h2>
  }


  return (
    <div className="twitts-count">
      <h2>Total no. of tweets with {hashTag}: {twitts.length} </h2>
      <h2>Positive Count: {count.positive}</h2>
      <h2>Negative Count: {count.negative}</h2>
    </div>
  )
}

export default React.memo(TwittsCount);
