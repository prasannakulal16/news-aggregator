// components/ReusableCard.tsx
import React from 'react'
import { Card, Tooltip } from 'antd'

const { Meta } = Card

interface ReusableCardProps {
  imageSrc: string
  title: string
  description: React.ReactNode
  newsUrl: string
}

const CustomCard: React.FC<ReusableCardProps> = ({ imageSrc, title, description, newsUrl }) => {
  return (
    <Card
      hoverable
      className="shadow-lg rounded-lg overflow-hidden"
      cover={<img alt={title} src={imageSrc} className="h-48 object-cover" />}
    >
      <Meta
        title={
          <Tooltip title={title} placement="topLeft">
            <a href={newsUrl} target="_blank">
              <span className="text-blue-600">{title}</span>
            </a>
          </Tooltip>
        }
        description={description}
        className="text-center"
      />
    </Card>
  )
}

export default CustomCard
