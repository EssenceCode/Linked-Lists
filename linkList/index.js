function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
};

function LinkedList(val) {
    const root = Node(val);
    const getList = () => root;

    const append = (value, obj = root) => {
        const list = obj;
        if(list.nextNode === null) {
            list.nextNode = Node(value, list.nextNode);

            return list;
        };
      
        return append(value, list.nextNode);
    };
  
    const prepend = (value, obj = root) => {
        const list = obj;
        if(list.value === null || list.value !== null) {
            list.value = value;

            return list;
        };
       
        return prepend(value, list.nextNode);
    };
    
    const size = (list = root, counter = 1) => {
        if(list.nextNode === null) {

            return counter;
        };
      
        return size(list.nextNode, counter + 1);
    };
    
    const head = (list = root) => list;
   
    const tail = (list = root) => {
        if(list.nextNode === null) {
           
            return list;
        };
       
        return tail(list.nextNode);
    };
  
    const at = (index,  counter = 1, list = root) => {
       
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

        if(list.nextNode === null) {
            current = previous;
            current.nextNode = null;
            
            return true;
        };

        current = list;

        return pop(list.nextNode, current)
    }; 
    return {
        append,
        prepend,
        size,
        head,
        tail,
        pop,
        getList,
        
    }
};

const list = LinkedList(1);

list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.append(11)
list.append(12)



