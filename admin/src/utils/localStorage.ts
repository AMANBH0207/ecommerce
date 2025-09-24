
export const Storage = {
  setItem(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
  },

  getItem<T = any>(name: string): T | null {
    const item = localStorage.getItem(name);
    return item ? (JSON.parse(item) as T) : null;
  },

  removeItem(name: string) {
    localStorage.removeItem(name);
  },

  clearAll() {
    localStorage.clear();
  },
};