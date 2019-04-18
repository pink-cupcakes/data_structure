(async() => {
  class Node {
    constructor(value) {
      this.value = value,
      this.parent = null,
      this.children = [],
      this.size = 1,
      this.depth = 1
    };

    addChild(value) {
      let direction = value > this.value ? 1 : 0;
      let nextChild = this.children[direction];
      if(nextChild !== undefined) {
        this.depth = nextChild.addChild(value) + 1;
      } else {
        if(this.children.length === 0) {
          this.depth++;
        }
        this.children[direction] = new Node(value);
        nextChild = new Node(value);
      };
      this.size++;
      return this.depth;
    };

    getValues() {
      let res = [this.value];
      for(const child of this.children) {
        if(child) {
          res = res.concat(child.getValues());
        }
      };
      return res;
    };

    async searchValue(value) {
      console.log(this.value)
      let thisValue = this.value;
      let node = this;
      const checkChild = async (child) => {
        return child ? await child.searchValue(value) : false;
      }
      switch(true){
        case value === thisValue:
          return node;
        case thisValue < value:
          return checkChild(node.children[1]);
        case thisValue > value:
          return checkChild(node.children[0]);
      };
    };
  };

  class Tree {
    constructor() {
      this.head = null,
      this.size = 0
    };

    addHead(node) {
      if(this.head) {
        let direction = this.head.value > node.value ? 1 : 0;
        node.children[direction] = this.head;
        this.head = node;
      } else {
        this.head = node;
      };
    };

    getValues() {
      return this.head.getValues();
    };

    searchValue(value) {
      return this.head.searchValue(value);
    }

    // balanceTree() {
    //   let head = this.head;
    //   if(Math.pow(head.depth, 2) )
    //   if(this.head.)
    // }
  };

  let tree = new Tree();
  let a = new Node(6);
  a.addChild(7);
  a.addChild(3);
  a.addChild(2);
  a.addChild(4);
  a.addChild(9);
  let b = new Node(5);
  tree.addHead(a);
  let searchTest = await tree.searchValue(2);
  console.log(searchTest);
  console.log(tree.getValues())
  // console.log(tree.head.children[0]);
})()