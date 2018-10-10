export interface DrupalStoreState {
    // Loaded drupal content nodes
    nodes: DrupalNode[]
}

export interface DrupalNode {
    // HTML content from Drupal
    content: DrupalContent
    // Node ID
    node: string
}

export interface DrupalContent {
    format: string,
    safe_summary: string,
    safe_value: string,
    summary: string,
    value: string
}

export interface DrupalNodeResponse {
    body: {
        und: DrupalContent[]
    }
}


