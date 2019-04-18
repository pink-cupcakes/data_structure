(async() => {
  class Node {
    constructor(value) {
      this.value = value,
      this.parent = null,
      this.children = []
    };

    addChild(node) {
      node.parent = this;
      this.children.push(node);
    };

    // Removes the first child node with matching value
    removeChild(value) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].value === value) {
          this.children.splice(i, 1);
          return;
        };
      };
    };

    async dfSearch(value) {
      // console.log(this.value);
      if(this.value === value) {
        return this;
      } else {
        for (let i = 0; i < this.children.length; i++) {
          let childRes = await(this.children[i].dfSearch(value));
          if (childRes) {
            return childRes
          };
        };
      };
      return null;
    };

    async bfSearch(value) {
      // console.log(this.value)
      for (const child of this.children) {
        console.log('Horizontal ' + child.value)
        if (child.value === value) {
          return child;
        }
      };
      for (const child of this.children) {
        console.log('Vertical ' + child.value)
        let childRes = await child.bfSearch(value);
        if (childRes) {
          return childRes;
        };
      };
      return null;
    };
  };

  class Tree {
    constructor() {
      this.head = null,
      this.size = 0
    };

    addHead(node) {
      if (this.head !== null) {
        node.children.push(this.head);
        this.head.parent = node;
      };
      this.head = node;
    };

    dfSearch(value) {
      this.head.dfSearch(value);
    }

    bfSearch(value) {
      if (this.head.value === value) {
        return this.head;
      } else {
        this.head.bfSearch(value);
      }
    }
  };

  let tree = new Tree();
  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  let d = new Node(4);
  let z = new Node(62);
  tree.addHead(b);
  b.addChild(c);
  b.addChild(d);
  c.addChild(z);
  tree.addHead(a);
  let e = new Node(2);
  let f = new Node(57);
  a.addChild(e);
  a.addChild(f);
  let headA = await tree.head.dfSearch(57);
  console.log(headA)
  // console.log(tree.head);
})()