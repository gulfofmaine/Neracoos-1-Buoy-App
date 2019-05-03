export interface WagtailResponse {
  body: string
}

export interface WagtailContent {
  body: string
}

export interface WagtailPage {
  content: WagtailContent
  pageId: string
}

export interface WagtailStoreState {
  pages: WagtailPage[]
}
