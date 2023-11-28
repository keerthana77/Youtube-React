import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

export default function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex-column w-full'>
      <div className='p-5 flex gap-3'>
        <div>
          <iframe width="900" height="600" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  )
}
