import { NumbersCollection } from './collections/Numbers';
import { CharactersCollection } from './collections/Characters';
import { LinkedList } from './collections/LinkedList';

const sorterNumbers = new NumbersCollection([2,9,-9]);
sorterNumbers.sort();
console.log(sorterNumbers.data);

const sorterCharacters = new CharactersCollection("AsXacx");
sorterCharacters.sort()
console.log(sorterCharacters.data);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(4);
linkedList.add(-1);

const sortLinkedList = linkedList;
sortLinkedList.sort();
linkedList.print();
