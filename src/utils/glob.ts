import { App, Component } from 'vue'

interface FileType {
  [key: string]: Component
}

export const pages = import.meta.glob('@/views/**/*.vue', {
  eager: true,
})

export const files: Record<string, FileType> = import.meta.glob('@/components/**/*.vue', {
  eager: true,
})

export function register(app: App) {
  Object.keys(files).forEach((c: string) => {
    const component = files[c]?.default
    app.component(component.name as string, component) // 全域註冊
  })
}

export function getPage(name: string) {
  let page = null
  for (const key in pages) {
    if (Object.prototype.hasOwnProperty.call(pages, key)) {
      const element = pages[key]
      if (element.default.__name === name) {
        page = element.default
      }
    }
  }
  return page
}
