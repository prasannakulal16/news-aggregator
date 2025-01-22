import React from 'react'
import { Input } from 'antd'

interface SearchInputProps {
  placeholder?: string
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>
  enterButton?: boolean | React.ReactNode
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onSearchChange,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Input placeholder={placeholder} onChange={onSearchChange} className="w-full" allowClear />
    </div>
  )
}

export default SearchInput
