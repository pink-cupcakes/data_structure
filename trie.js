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

    hasChild(value) {
      for(const child of this.children) {
        if(child.value === value) {
          return child;
        };
      };
      return false;
    };

    async printWords() {
      let res = [];
      if(this.children.length === 0) {
        return this.value;
      };
      for(const child of this.children) {
        let subWords = await child.printWords();
        for(const word of subWords) {
          let longerSubstring = this.value ? this.value + word : word;
          res.push(longerSubstring);
        };
      };
      return res;
    };
  };

  class Tree {
    constructor() {
      this.head = null,
      this.size = 0
    };

    init() {
      let newHead = new Node(null);
      this.head = newHead;
    };

    addHead(node) {
      if (this.head !== null) {
        node.children.push(this.head);
        this.head.parent = node;
      };
      this.head = node;
    };

    addWord(word) {
      let letters = word.split('');
      let n = this.head;
      for(const letter of letters) {
        let containsLetter = n.hasChild(letter);
        if(!containsLetter) {
          let letterNode = new Node(letter);
          n.addChild(letterNode);
          n = letterNode;
        } else {
          n = containsLetter;
        };
      };
    };

    hasWord(word) {
      let letters = word.split('');
      let n = this.head;
      for(const letter of letters) {
        let containsLetter = n.hasChild(letter);
        if(!containsLetter) {
          return false;
        };
        n = containsLetter;
      };
      return true;
    };
  };

  let tree = new Tree();
  tree.init();
  tree.addWord('test');
  tree.addWord('true');
  tree.addWord('walrus');
  tree.addWord('walnut1234');
  tree.addWord('12lkj35b(*&$#@$23463');
  console.log(tree.hasWord('12lkj35b(*&$#@$'));
  console.log(tree.hasWord('walnut'));
  console.log(await tree.head.printWords());
})()