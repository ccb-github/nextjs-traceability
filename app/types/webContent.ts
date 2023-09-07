export interface NavItem {
  name: string
  link?: string
  description: string
  items?: NavItem[]
}

export interface PanelItem {
  name: string
  link?: string
  description: string
  image?: string
}
