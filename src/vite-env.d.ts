/// <reference types="vite/client" />

type IInterruption = import('./helper/pomodoro').IInterruption
type AppUserConfigs = import('@logseq/libs/dist/LSPlugin').AppUserConfigs
interface Window {
  faizNavigate: (e: unknown) => void
  logseqAppUserConfigs: AppUserConfigs
  currentApp: 'app' | 'pomodoro' | 'modal'
  currentPomodoro: {
    uuid?: string
    state?: {
      paused?: boolean
    }
  }
  unmountPomodoroApp: () => void
  interruptionMap: Map<number, IInterruption[]>
  mockSettings: Record<string, unknown>
}

interface ImportMetaEnv {
  readonly VITE_LOGSEQ_API_SERVER: string
  readonly VITE_LOGSEQ_API_TOKEN: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
