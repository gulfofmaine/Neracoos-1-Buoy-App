/**
 * Default config for ERDDAP related hooks
 */
export const defaultQueryConfig = {
  /** Refresh every 5 minutes */
  staleTime: 5 * 60 * 1000,
  /** Cache for a maximum of 15 minutes */
  cacheTime: 15 * 60 * 1000,
}
