import { Sortable } from "./interfaces/Sortable";

export abstract class Sorter {
  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;

  abstract get length(): number;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
