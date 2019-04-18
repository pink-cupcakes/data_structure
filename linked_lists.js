(() => {
  class Node {
    constructor(value){
      this.data = value,
      this.next = null
    }
  };

  class LinkedList {
    constructor(){
      this.head = null,
      this.tail,
      this.size = 0
    };

    addNode(element){
      let newNode = new Node(element);
      this.tail = newNode;
      if (this.head === null){
        this.head = newNode;
      } else {
        let n = this.head;
        while (n.next !== null){
          n = n.next;
        };
        n.next = newNode;
      };
      this.size++;
    };

    insertAt(value, index){
      let newNode = new Node(value);
      if (index === 0){
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let n = this.head;
        while(index > 1) {
          n = n.next;
          index--;
        };
        newNode.next = n.next;
        n.next = newNode;
      };
      this.size++;
    };

    deleteFromTail(){
      if (this.size === 2){
        this.tail = this.head;
        this.head.next = null;
      } else if (this.size === 1){
        this.head = null;
        this.tail = null;
      } else {
        let n = this.head;
        while (n.next.next !== null){
          n = n.next;
        };
        n.next = null;
        this.tail = n;
      };
      this.size--;
    };

    deleteAt(index){
      console.log(index)
      if (this.size < index){
        return;
      };
      if (index === 0){
        this.head = this.head.next;
      } else if (index === (this.size - 1)){
        this.deleteFromTail();
        return;
      } else {
        let n = this.head;
        while(index > 1){
          n = n.next;
          index--;
        };
        n.next = n.next.next;
      };
      this.size--;
    };
  };

  let a = new LinkedList;
  a.addNode(1);
  a.addNode(2);
  a.addNode(3);
  a.addNode(4);
  a.addNode(5);
  a.addNode(6);
  a.insertAt(1, 2);
  console.log(JSON.stringify(a.head));
})()