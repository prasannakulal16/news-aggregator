import { Spin } from 'antd'

interface LoaderI {
  content?: string
  size?: 'large' | 'default' | 'small'
}

export const Loader = ({ content = '', size = 'large' }: LoaderI) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size={size} wrapperClassName="text-3xl">
        {content}
      </Spin>
    </div>
  )
}
