export interface Props {
  value?: boolean
  maxWidth?: number | string
  vueDraggableResizableOptions?: object
}

export const propsBase = {
  value: false,
  maxWidth: 1000,
  vueDraggableResizableOptions: {},
}
