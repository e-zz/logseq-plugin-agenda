import { useRequest } from 'ahooks'
import { message, notification } from 'antd'
import { createEvents, type EventAttributes } from 'ics'
import { useAtomValue } from 'jotai'
import { FiUploadCloud } from 'react-icons/fi'

import { track } from '@/Agenda3/helpers/umami'
import useSettings from '@/Agenda3/hooks/useSettings'
import { tasksWithStartAtom } from '@/Agenda3/models/entities/tasks'
import { logseqAtom } from '@/Agenda3/models/logseq'
import { uploadIcsHttp } from '@/services/ics'
import { transformAgendaTaskToICSEvent } from '@/util/ics'
import { cn } from '@/util/util'

const UploadIcs = ({ className }: { className?: string }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification()
  const [messageApi, messageContextHolder] = message.useMessage()
  const { currentGraph } = useAtomValue(logseqAtom)
  const tasks = useAtomValue(tasksWithStartAtom)
  const { settings } = useSettings()
  const { ics } = settings

  const { runAsync: doUpload, loading } = useRequest(uploadIcsHttp, { manual: true })

  const onClickUpload = async () => {
    track('Upload ICS Button')
    const { repo, token } = ics ?? {}
    if (!repo || !token) return messageApi.error('Please set repo and token')
    if (!/^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(repo))
      return messageApi.error('Invalid repo format. eg: username/repo')
    const events: EventAttributes[] = tasks.map((task) => transformAgendaTaskToICSEvent(task, currentGraph?.name ?? ''))
    if (events.length <= 0) return messageApi.warning('There are no tasks to upload')
    createEvents(events, (error, value) => {
      if (error) return console.log('generate ics error', error)
      // console.log('ics text', value)
      doUpload({ file: value, repo, token })
        .then(() => messageApi.success('🎉 Upload success'))
        .catch((err) => {
          notificationApi.error({
            message: 'Upload failed',
            description: err.message,
            duration: 0,
          })
          console.error('update ics failed', err)
        })
    })
  }

  return (
    <>
      <div className="relative">
        <FiUploadCloud className={cn('text-lg', className)} onClick={onClickUpload} />
        {loading ? (
          <span className="absolute right-0 top-0 h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
        ) : null}
      </div>
      {notificationContextHolder}
      {messageContextHolder}
    </>
  )
}

export default UploadIcs
