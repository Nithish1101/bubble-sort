import { Sorter } from '../Sorter';
import { Sortable } from "../interfaces/Sortable";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(i: number, j: number): boolean {
    return this.data[i].toLocaleLowerCase() >= this.data[j].toLocaleLowerCase();
  }

  swap(i: number, j: number): void {
    const chars: string[] = this.data.split('');
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;

    this.data = chars.join('');
  }
}
