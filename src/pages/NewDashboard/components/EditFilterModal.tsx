import { Button, ColorPicker, Form, Input, Modal } from 'antd'
import { useState } from 'react'

import { BACKGROUND_COLOR, DEFAULT_BG_COLOR_NAME } from '@/constants/agenda'
import type { Filter } from '@/newModel/settings'
import { genRandomString } from '@/util/util'

import ColorPickerCom from './ColorPickerCom'

const EditFilterModal = ({
  children,
  type,
  initialValues,
  onOk,
}: {
  children: React.ReactNode
  type: 'create' | 'edit'
  onOk: (param: Filter) => void
  initialValues?: Filter
}) => {
  const [open, setOpen] = useState(false)
  const [formRef] = Form.useForm<Filter>()
  const handleClickOk = async () => {
    const values = await formRef.validateFields()
    onOk({
      ...values,
      id: type === 'create' ? genRandomString() : (initialValues?.id as string),
    })
    setOpen(false)
  }
  return (
    <>
      <span onClick={() => setOpen(true)}>{children}</span>
      <Modal
        destroyOnClose
        open={open}
        title={type === 'create' ? 'Create Filter' : 'Edit Filter'}
        onCancel={() => setOpen(false)}
        onOk={handleClickOk}
      >
        <Form<Filter>
          form={formRef}
          layout="vertical"
          initialValues={initialValues ?? { color: BACKGROUND_COLOR[DEFAULT_BG_COLOR_NAME] }}
          preserve={false}
          className="mt-8"
        >
          <Form.Item label="Filter Color" name="color" rules={[{ required: true }]}>
            <ColorPickerCom />
          </Form.Item>
          <Form.Item label="Filter Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Query" name="query" rules={[{ required: true }]}>
            <Input.TextArea autoSize />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EditFilterModal
