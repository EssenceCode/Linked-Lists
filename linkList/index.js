function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
};

function LinkedList(val) {
    const head = Node(val);
    const getList = () => head;

    const append = (value, obj = head) => {
        const list = obj;
        if(list.nextNode === null) {
            list.nextNode = Node(value, list.nextNode);

            return list;
        };

        return append(value, list.nextNode);
    };
  

    return {
        append,
    }
};

const list = LinkedList();