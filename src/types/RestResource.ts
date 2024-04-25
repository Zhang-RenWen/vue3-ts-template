export interface RestResource<T> {
  /**
   * Response metadata
   */
  metadata: RestMetadata;

  /**
   * Response data
   */
  response: T;
}

interface RestMetadata {
  /**
   * Response HTTP Code
   */
  code: number;

  /**
   * Response message
   */
  message: string;

  /**
   * Vuetify color code [success, info, warning, error]
   */
  type: string;

  /**
   * Unix timestamp in UTC
   */
  timestamp: number;
}
