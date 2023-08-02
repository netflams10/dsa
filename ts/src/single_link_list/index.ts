class NodeClass<T> {
  data: any;
  next: NodeClass<T> | null = null;

  constructor(data: any) {
    this.data = data;
  }
}
  
class LinkedList <T> {
  length: number = 0;
  head: NodeClass<T> | null = null;
  tail: NodeClass<T> | null = null;

  constructor () {}

  increase_length () {
    this.length++
  }

  decrease_length () {
    this.length--
  }

  push (data: any): LinkedList<T> {
    const node = new NodeClass(data)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      if (this.tail) {
        this.tail.next = node
        this.tail = node
      }
    }
    this.increase_length();
    return this
  }

  pop (): LinkedList<T> | undefined {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.decrease_length();
    }
    else {
      let current_state = this.head;
      let new_head: NodeClass<T> | null = null;

      while(current_state) {
        if (current_state.next === null) {
          console.log('Null ', current_state);
        } else {
          console.log('Not Null', current_state);

        }
        current_state = current_state.next
      }
    }
    return this;
  }
    // comparator: (a: T, b: T) => boolean;
  
    // constructor(comparator: (a: T, b: T) => boolean) {
    //   this.comparator = comparator;
    // }
  
//     append(data: T): void {
//       if (!this.head) {
//         this.head = new Node(data);
//       } else {
//         let current = this.head;
//         while (current.next != null) {
//           current = current.next;
//         }
//         current.next = new Node(data);
//       }
//     }
  
//      delete(data: T): void {
//       if (!this.head) return;
  
//       // Check if the head node is the node to be removed
//       if (this.comparator(this.head.data, data)) {
//         this.head = this.head.next;
//         return;
//       }
  
//       let current = this.head.next;
//       let previous = this.head;
  
//       /**
//        * Search for the node to be removed and keep track of its previous node
//        *
//        * If it were a double linked list, we could simply search the node
//        * and it would have a pointer to the previous node
//        **/
//       while (current) {
//         if (this.comparator(current.data, data)) {
//           current = null;
//         } else {
//           previous = current;
//           current = current.next;
//         }
//       }
  
//       /**
//        * set previous.next to the target.next, if the node target is not found,
//        * the 'previous' will point to the last node,
//        * since the last node hasn't next, nothing will happen
//        **/
//       previous.next = previous.next ? previous.next.next : null;
//     }
  
//     search(data: T): Node<T> | null {
//       let current = this.head;
//       while (current) {
//         if (this.comparator(current.data, data)) {
//           return current;
//         }
//         current = current.next;
//       }
//       return null;
//     }
  
//     traverse() {
//       let current = this.head;
//       while (current != null) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
}

const node = new LinkedList()
const firstNode = node.push(30);
const secondNode = node.push(20);
const thirdNode = node.push(10);
const fourthNode = node.push(40);
const fifthNode = node.push(80);
node.pop();
// console.log(node);