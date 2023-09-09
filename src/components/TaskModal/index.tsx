import { Button, Select as AntdSelect } from 'antd'
import { type Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import DateForm from './components/DateForm'
import DateRangeSelect from './components/DateRangeForm'
import PrioritySelect from './components/PrioritySelect'

export type DateFormValue = Partial<{
  isAllDay: boolean
  start: Dayjs
  end: Dayjs
}>
const TaskModal: React.FC<{
  open: boolean
  type: 'create' | 'modify'
}> = ({ open }) => {
  const { t } = useTranslation()

  const [dateMode, setDateMode] = useState<'date' | 'dateRange'>('date')
  // date mode
  const [dateFormValue, setDateFormValue] = useState<DateFormValue>({ isAllDay: true })
  // date range mode
  const [dateRangeFormValue, setDateRangeFormValue] = useState<DateFormValue>({ isAllDay: true })

  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false} className="max-w-xl top-[30%] py-4 px-0">
        <div className="px-1">
          <Input className="border-none focus-visible:ring-transparent text-xl" placeholder={t('Task Name')} />
        </div>

        <div className="flex px-5 gap-2">
          {/* ========= Task Date Start ========= */}
          <Popover>
            <PopoverTrigger>
              <div className="border px-2 py-0.5 rounded-md text-gray-500 text-sm">{t('Task Date')}</div>
            </PopoverTrigger>
            <PopoverContent className="w-[286px]">
              <Tabs
                value={dateMode}
                onValueChange={(value) => setDateMode(value as 'date' | 'dateRange')}
                className="w-full"
              >
                <div className="flex justify-center">
                  <TabsList className="px-1 py-1 h-auto">
                    <TabsTrigger className="text-xs px-2 py-0.5" value="date">
                      {t('Date')}
                    </TabsTrigger>
                    <TabsTrigger className="text-xs px-2 py-0.5" value="dateRange">
                      {t('Date Range')}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="date" className="w-full">
                  <DateForm value={dateFormValue} onChange={setDateFormValue} />
                </TabsContent>
                <TabsContent value="dateRange">
                  <DateRangeSelect />
                </TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>
          {/* ========= Task Date End ========= */}

          {/* ========= Priority Start ========= */}
          <PrioritySelect />
          {/* ========= Priority End ========= */}
        </div>

        <Separator />
        <DialogFooter className="px-3">
          <div className="flex justify-between w-full">
            <AntdSelect bordered={false} defaultValue={'journal'} options={[{ label: 'Journal', value: 'journal' }]} />
            <div className="flex gap-2">
              <Button>{t('Cancel')}</Button>
              <Button type="primary">{t('Create Task')}</Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal
