function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
};

function LinkedList(val) {
    const initialRoot = Node(val);
    let root = initialRoot;

    const append = (value, obj = root) => {
        const list = obj;
        if(list.nextNode === null) {
            list.nextNode = Node(value, list.nextNode);

            return true;
        };
      
        return append(value, list.nextNode);
    };
  
    const prepend = (value) => {
        const newNode = Node(value, root);
        
        root = newNode;
        
        return true;
    };
    
    const size = (list = root, counter = 1) => {
        if(list.nextNode) {

            return size(list.nextNode, counter + 1);
        };
      
        return counter;
    };
    
    const head = (list = root) => list;
   
    const tail = (list = root) => {
        if(list.nextNode) {

            return tail(list.nextNode);
        };
       
        return list;
    };
  
    const at = (index,  counter = 0, list = root) => {
       
       if(index === counter) {

            return list;
       };
     
       if(index !== counter && list.nextNode === null) {

            return "index does not exist";
       };
      
       return at(index, counter + 1, list.nextNode);
    };
   
    const pop = (list = root, previous = list) => {
        let current = null;

        current = list;
        if(list.nextNode) {
            
            return pop(list.nextNode, current)
        };

        current = previous;
        current.nextNode = null;
        
        return true;
    }; 
 
    const contains = (value,list = root) => {
      if(list.value === value) return true;
      if(list.nextNode) return contains(value,list.nextNode);
      
      return false;
    };
   
    const find = (value, list = root) => {
        if(list.value === value) return list;
        if(list.nextNode) return find(value, list.nextNode);

        return null;
    };
  
    const toString = (list = root, str = "") => {
        if(list.nextNode) {
            
            return toString(list.nextNode, str.concat(`${list.value} => `));
        };

        return str.concat(`${list.value} => null`);
    };

    const insertAt = (value, index, list = root, previous = list, counter = 0) => {
        const current = list;

        if(counter === index) {
            if(index === 0) {
                const node = Node(value, previous);

                root = node;
                
                return true;
            };

            const prevNode = previous;
            const node = Node(value, previous.nextNode);
         
            prevNode.nextNode = node;
            
            return true;
        };
      
        return insertAt(value, index, list.nextNode,  current, counter + 1);;
    };
    
    const removeAt = (index, list = root, previous = list, counter = 0) => {
        const current = list;

        if(counter === index && current === null || index === 0) {

             return "invalid index";
        };

        if(counter === index) {
            const prevNode = previous;
            prevNode.nextNode = current.nextNode;


            return true;
        };

        return removeAt(index, list.nextNode, current, counter + 1)
    };

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
};

const list = LinkedList("head");
list.prepend(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.append(10);
list.append(11);
list.append(12);
list.append(13);
list.append("tail");



