export {};

declare global {
  interface Window {
    fsAttributes: [string, (listInstances: unknown[]) => void][];
  }
}
