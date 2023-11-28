import { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

export default function VideoContainer() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos()
  }, [])

  if (videos.length === 0) {
    return <>Loading...</>
  }

  return (
    <div className='p-5 pt-2 flex flex-wrap gap-6'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map(d => {
        return <Link to={"/watch?v=" + d.id} key={d.id}><VideoCard info={d} /></Link>
      })}
    </div>
  )
}
