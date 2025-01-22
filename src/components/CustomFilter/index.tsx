import React from 'react'
import { Select } from 'antd'
import CustomModal from '../Modal'

const { Option } = Select

interface OptionType {
  key: string | number
  name: string
}

interface FilterModalProps {
  sources: OptionType[]
  categories: OptionType[]
  selectedSource: string | null | undefined
  selectedCategory: string | null | undefined
  onSourceChange: (value: string) => void
  onCategoryChange: (value: string) => void
  isVisible: boolean
  onClose: () => void
  onConfirm: () => void
}

const FilterModal: React.FC<FilterModalProps> = ({
  sources,
  categories,
  selectedSource,
  selectedCategory,
  onSourceChange,
  onCategoryChange,
  isVisible,
  onClose,
  onConfirm
}) => {
  return (
    <CustomModal
      title="Source & Category Filter"
      isVisible={isVisible}
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <div className="flex flex-col gap-4">
        {/* Source Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Source</label>
          <Select
            value={selectedSource}
            onChange={onSourceChange}
            placeholder="Choose a source"
            className="w-full"
            showSearch
            optionFilterProp="children"
          >
            {sources.map((source) => (
              <Option key={source.key} value={source.key}>
                {source.name}
              </Option>
            ))}
          </Select>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">Category</label>
          <Select
            value={selectedCategory}
            onChange={onCategoryChange}
            placeholder="Choose a category"
            className="w-full"
            showSearch
            optionFilterProp="children"
          >
            {categories.map((category) => (
              <Option key={category.key} value={category.key}>
                {category.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </CustomModal>
  )
}

export default FilterModal
