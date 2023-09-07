import { Button, Select as AntdSelect } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GiSofa } from 'react-icons/gi'
import { IoToday } from 'react-icons/io5'
import { MdToday, MdWbSunny } from 'react-icons/md'
import { PiNumberSquareSevenFill } from 'react-icons/pi'

import { Calendar } from '@/components/ui/calendar'
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const TaskModal: React.FC<{
  open: boolean
  type: 'create' | 'modify'
}> = ({ open }) => {
  const { t } = useTranslation()

  const [date, setDate] = useState<Date | undefined>(new Date())

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
              <Tabs defaultValue="date" className="w-full">
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
                  <div>
                    <div className="flex justify-between">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <IoToday />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('Today')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <MdWbSunny />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('Tomorrow')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <GiSofa />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('Weekend')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <PiNumberSquareSevenFill />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('Next Week')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="w-full p-0 mt-2" />
                    <Popover>
                      <PopoverTrigger className="w-full">
                        <div className="border rounded-md py-1 mt-2">{t('Time')}</div>
                      </PopoverTrigger>
                      <PopoverContent>
                        <ScrollArea>
                          <div>00:00</div>
                          <div>00:30</div>
                          <div>01:00</div>
                          <div>01:30</div>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger className="w-full">
                        <div className="border rounded-md py-1 mt-2">{t('Duration')}</div>
                      </PopoverTrigger>
                      <PopoverContent>
                        <ScrollArea>
                          <div>15 minutes</div>
                          <div>30 minutes</div>
                          <div>45 minutes</div>
                          <div>1 hour</div>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TabsContent>
                <TabsContent value="dateRange">Change your password here.</TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>
          {/* ========= Task Date End ========= */}

          {/* ========= Priority Start ========= */}
          <Popover>
            <PopoverTrigger>
              <div className="border px-2 py-0.5 rounded-md text-gray-500 text-sm">{t('Priority')}</div>
            </PopoverTrigger>
            <PopoverContent className="w-[100px]">
              <div>
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
              </div>
            </PopoverContent>
          </Popover>
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
