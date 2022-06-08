/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

// 自定义类型约束
declare type CButtonPropsKey = "color" | "bg";
declare type CButtonPropsType = "default" | "warn" | "success";
declare interface CButtonElement {
  setType: (value: CButtonPropsType) => void
  setProperty: (key: CButtonPropsKey, value: any) => void
}