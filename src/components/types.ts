// types.ts

export enum EventType {
  CLICK = 'click',
  PAGE_VIEW = 'page_view',
  FORM_SUBMIT = 'form_submit',
  CUSTOM = 'custom',
}

export interface EventPayload {
  eventType: EventType;
  timestamp: number;
  userId: string;
  sessionId: string;
  metadata?: Record<string, unknown>;
}

export interface ClickEventPayload extends EventPayload {
  elementId: string;
  url: string;
}

export interface PageViewEventPayload extends EventPayload {
  pageTitle: string;
  pageUrl: string;
}

export interface FormSubmitEventPayload extends EventPayload {
  formId: string;
  formData: Record<string, string>;
}

export interface CustomEventPayload extends EventPayload {
  eventName: string;
  customData: Record<string, unknown>;
}

export type AnalyticsEvent =
  | ClickEventPayload
  | PageViewEventPayload
  | FormSubmitEventPayload
  | CustomEventPayload;

export interface WorkerConfig {
  apiEndpoint: string;
  batchSize: number;
  flushInterval: number;
  retryAttempts: number;
}

export interface Batch {
  events: AnalyticsEvent[];
  timestamp: number;
}

export interface WorkerResponse {
  success: boolean;
  message?: string;
  error?: Error;
}