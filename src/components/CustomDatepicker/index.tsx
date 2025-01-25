import React, { useState } from 'react'
import { DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs' // Import dayjs
import 'dayjs/locale/en' // If you need to customize locale, you can import here.

const { RangePicker } = DatePicker

interface NewsFilterProps {
  onFilterChange: (dates: { startDate: Dayjs | null; endDate: Dayjs | null }) => void
}

const CustomDatePicker: React.FC<NewsFilterProps> = ({ onFilterChange }) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null)
  const [endDate, setEndDate] = useState<Dayjs | null>(null)

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null]) => {
    if (dates) {
      const [start, end] = dates
      setStartDate(start)
      setEndDate(end)
      onFilterChange({ startDate: start, endDate: end })
    } else {
      setStartDate(null)
      setEndDate(null)
      onFilterChange({ startDate: null, endDate: null })
    }
  }

  return (
    <div className="w-full sm:w-auto">
      {/* Filter and Reset Buttons */}
      <div className="flex items-center space-x-4">
        {/* Date Range Picker */}
        <RangePicker
          allowClear
          value={[startDate, endDate]}
          format="YYYY-MM-DD"
          onChange={(dates) => handleDateChange(dates as [Dayjs | null, Dayjs | null])}
          disabledDate={(current) =>
            current && (current.isBefore(dayjs().subtract(1, 'year')) || current.isAfter(dayjs()))
          }
          placeholder={['Select news from', 'Select news to']}
          className="w-full sm:w-auto"
        />
      </div>
    </div>
  )
}

export default CustomDatePicker
