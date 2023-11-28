import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //Early return 
  if(!isMenuOpen) { return null;} 
  return (
    <div className='w-48 shadow-lg p-5'>
      <ul>
        <li><Link to="/"> 🏠 Home</Link></li>
        <li>🎼 Shorts</li>
        <li>📼 Videos</li>
        <li>🎙 Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}
