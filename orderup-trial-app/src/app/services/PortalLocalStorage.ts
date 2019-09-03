import { Injectable } from '@angular/core';
@Injectable()
export class PortalLocalStorage {
  name() {
    return 'PortalLocalStorage';
  }

  set(key: string, item: string) {
    if (key) {
      localStorage.setItem(key, item);
    }
  }

  get(key: string): string {
    if (key) {
      return localStorage.getItem(key);
    }
  }

  reset(key: string) {
    if (key) {
      localStorage.setItem(key, null);
    }
  }

  remove(key: string) {
    if (key) {
      localStorage.removeItem(key);
    }
  }
}
