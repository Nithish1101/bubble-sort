export interface Sortable {
  get length(): number;
  compare(i:number, j:number): boolean;
  swap(i:number, j:number): void;
}
