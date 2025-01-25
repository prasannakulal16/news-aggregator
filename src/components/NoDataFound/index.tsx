import { Empty, Typography } from 'antd'

interface NODataFoundI {
  message: string
}

export const NoDataFound = ({ message }: NODataFoundI) => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 pt-28">
      <Empty description={false} />
      <Typography color="#6c757d" className="font-bold">
        {message}
      </Typography>
    </div>
  )
}
