
export default function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-64">
      <img className="rounded-lg" alt="channel" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({ info }) => {
  return <div className="border border-red-500"><VideoCard info={info} /></div>
}
