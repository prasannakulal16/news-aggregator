import { Tooltip } from 'antd'
import { formatDate } from '../../config/constants'

interface NewDescriptionI {
  author: string
  channel: string
  publishedAt: Date
  description: string
}

export const NewsDescription = ({ author, channel, publishedAt, description }: NewDescriptionI) => {
  return (
    <div>
      <Tooltip title={description} placement="topLeft">
        <span className="text-black-600 line-clamp-2 my-2 text-left">{description}</span>
      </Tooltip>
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
