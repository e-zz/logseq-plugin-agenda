import { Checkbox, DatePicker } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const DateRangeForm = () => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        {t('All Day')}
      </Checkbox>
      <DatePicker.RangePicker
        open
        showTime={!checked}
        showSecond={false}
        className="!mt-2"
        popupClassName="pointer-events-auto"
      />
    </div>
  )
}

export default DateRangeForm
