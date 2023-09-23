export default class MemoryStore<T> {
  private data: Record<string, T> = {};

  setData(key: string, value: T): void {
    this.data[key] = value;
  }

  getData(key: string): T | undefined {
    return this.data[key];
  }
}
