import { Tooltip } from 'antd'
import { formatDate } from '../../config/constants'

interface NewDescriptionI {
  author: string
  channel: string
  publishedAt: Date
}

export const NewsDescription = ({ author, channel, publishedAt }: NewDescriptionI) => {
  return (
    <div>
      <p className="flex items-center">
        <span className="text-black font-medium pr-1">Channel : </span>
        {channel}
      </p>
      <p className="flex items-center">
        <span className="text-black font-medium pr-1">Published at: </span>
        {formatDate(publishedAt)}
      </p>
      <p className="flex items-center">
        <span className="text-black font-medium pr-1">Author: </span>

        <Tooltip title={author} placement="topLeft">
          <span className="w-30 truncate">{author}</span>
        </Tooltip>
      </p>
    </div>
  )
}
