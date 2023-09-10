import { AutoComplete } from 'antd'
import { useTranslation } from 'react-i18next'

import { cn } from '@/util/util'

import s from '../index.module.less'

const options = [
  { label: '15m', value: '15m' },
  { label: '30m', value: '30m' },
  { label: '45m', value: '45m' },
  { label: '1h', value: '1h' },
  { label: '1.5h', value: '1.5h' },
  { label: '2h', value: '2h' },
  { label: '2.5h', value: '2.5h' },
  { label: '3h', value: '3h' },
  { label: '4h', value: '4h' },
  { label: '5h', value: '5h' },
  { label: '6h', value: '6h' },
  { label: '7h', value: '7h' },
  { label: '8h', value: '8h' },
  { label: '9h', value: '9h' },
  { label: '10h', value: '10h' },
]

const DurationSelect = ({
  className,
  value,
  onChange,
}: {
  className?: string
  value?: string
  onChange: (value: string) => void
}) => {
  const { t } = useTranslation()
  console.log('[faiz:] === value', value)

  return (
    <AutoComplete
      backfill
      allowClear
      filterOption
      value={value}
      onChange={onChange}
      className={cn('w-full text-center', s.centerSelectText, className)}
      popupClassName="text-center pointer-events-auto"
      style={{ textAlign: 'center' }}
      placeholder={t('Duration')}
      options={options}
    />
  )
}

export default DurationSelect
