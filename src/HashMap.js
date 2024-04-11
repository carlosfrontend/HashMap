import LinkedList from './LinkedList.js';
import Node from './Node.js';

const capacity = 16;
const buckets = [];
buckets.length = capacity;

const HashMap = () => {
  const hash = (key) => {
    let hashCode = 0;
    const index = hashCode;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }
    try {
      if (index < 0 || index >= buckets.length) {
        throw new Error('Trying to access index out of bound');
      }
    } catch (error) {
      console.log(error);
    }
    return hashCode;
  };

  const set = (key, value) => {
    const index = hash(key);
    const node = Node(key, value);
    const linkedList = LinkedList();

    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    if (!buckets[index]) {
      linkedList.head = node;
      buckets[index] = linkedList.head;
      node.key = key;
      node.value = value;
      node.next = null;
    }

    for (let i = 0; i < buckets.length; i += 1) {
      if (index === i) {
        node.key = key;
        node.value = value;
        node.next = null;
        buckets[index].next = node;
      }
    }
  };

  const get = (key) => {
    const index = hash(key);
    if (buckets[hash(key)]) {
      const linkedList = buckets[index];
      if (linkedList.key === key) {
        return linkedList.value;
      }
      while (linkedList.next) {
        if (linkedList.next.key === key) {
          return linkedList.next.value;
        }
      }
    }

    return null;
  };

  const has = (key) => {
    const index = hash(key);

    if (!key) {
      return false;
    }

    if (!buckets[index]) {
      return false;
    }

    if (buckets[index]) {
      if (buckets[index].key === key) {
        return true;
      }

      if (buckets[index].next.key === key) {
        return true;
      }
	  return false;
    }
    // return false;
  };

  return { buckets, hash, set, get, has };
};

export default HashMap;
