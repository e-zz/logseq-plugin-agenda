import { Button, Divider } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const TaskModal: React.FC<{
  open: boolean
  type: 'create' | 'modify'
}> = ({ open }) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false} className="max-w-xl top-[30%] py-4 px-0">
        <div className="px-1">
          <Input className="border-none focus-visible:ring-transparent text-xl" placeholder={t('Task Name')} />
        </div>

        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <Divider style={{ margin: 0 }} />
        <DialogFooter className="px-3">
          <Button>{t('Cancel')}</Button>
          <Button type="primary">{t('Create Task')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TaskModal
