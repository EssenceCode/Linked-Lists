// Node class / factory, containing a 'value' property, 
// and a link to the 'nextNode' set both as null by default.
function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
};
// LinkedList class / factory, which will represent the full list.
function LinkedList(val) {
    const root = Node(val);
    const getList = () => root;

    // append(value) adds a new node containing value to the end of the list
    const append = (value, obj = root) => {
        // base case to stop the recursion
        // if list.nextNode is equals to null
        // list.nextNode = Node(value, list.nextNode)

        // recursively call the function till the condition is met
        // append(value, list.nextNode)
        const list = obj;
        if(list.nextNode === null) {
            list.nextNode = Node(value, list.nextNode);

            return list;
        };
        // use recursion till it satisfy the base case
        return append(value, list.nextNode);
    };
    // prepend(value) adds a new node containing value to the start of the list
    const prepend = (value, obj = root) => {
        // base case to stop the recursion
        // if list.value is equals to null or not null
        // list.value = value

        // recursively call the function till the condition is met
        // prepend(value, list.nextNode)
        const list = obj;
        if(list.value === null || list.value !== null) {
            list.value = value;

            return list;
        };
        // use recursion till it satisfy the base case
        return prepend(value, list.nextNode);
    };
    // size returns the total number of nodes in the list
    const size = (list = root, counter = 1) => {
        // base case to stop the recursion
        // initialized a variable counter
        // base case to stop the recursion
        // if the list.nextNode is equals to null return counter
        if(list.nextNode === null) {
            console.log(list.value)
            return counter;
        };
        // use recursion to increased the counter variable till,
        // it satisfy the base case
        return size(list.nextNode, counter + 1);
    };
    // head returns the first node in the list
    // just return the list?
    const head = (list = root) => list;
    // tail returns the last node in the list
    const tail = (list = root) => {
        // base case to stop the recursion
        // if list.nextNode === null
        // return list
        if(list.nextNode === null) {
           
            return list;
        };
        // use recursion till it satisfy the base case
        return tail(list.nextNode);
    };
    // at(index) returns the node at the given index
   
    return {
        append,
        prepend,
        size,
        head,
        tail,
        getList,
        root,
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

