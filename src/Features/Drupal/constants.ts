export interface DrupalContent {
    format: string,
    safe_summary: string,
    safe_value: string,
    summary: string,
    value: string
}

export interface DrupalNode {
    content: DrupalContent
    node: string
}

export interface DrupalNodeResponse {
    body: {
        und: DrupalContent[]
    }
}

export interface DrupalStoreState {
    nodes: DrupalNode[]
}
