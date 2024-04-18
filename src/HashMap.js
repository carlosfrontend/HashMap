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
		const node = Node();
		const linkedList = LinkedList();

		if (index < 0 || index >= buckets.length) {
			throw new Error('Trying to access index out of bound');
		}

		if (!buckets[index]) {
			linkedList.head = node;
			buckets[index] = linkedList.head;
			node.key = key;
			node.value = value;
		}

		for (let i = 0; i < buckets.length; i += 1) {
			if (index === i) {
				const collisionNode = Node(key, value, null);
				if (key !== buckets[index].key) {
					collisionNode.key = key;
					collisionNode.value = value;
					buckets[index].next = collisionNode;
				} else {
					buckets[index].value = value;
				}
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
			if (linkedList.next) {
				if (linkedList.next.key === key) {
					return linkedList.next.value;
				}
			}
		}
    return null;
	};

	const has = (key) => {
		const index = hash(key);

		if (!buckets[index]) {
			return false;
		}

		if (buckets[index]) {
			if (buckets[index].key === key) {
				return true;
			}
		}
		if (buckets[index].next) {
			if (buckets[index].next.key === key) {
				return true;
			}
		}
		return false;
	};

	const remove = (key) => {
		for (let i = 0; i < buckets.length; i+=1) {
			if (buckets[i]) {
				if (buckets[i].key === key && !buckets[i].next) {
					delete buckets[i];
					return true;
				}
			}
			if (buckets[i]) {
				if (buckets[i].next) {
					if (buckets[i].next.key === key) {
						delete buckets[i].next.key;
						delete buckets[i].next.value;
						buckets[i].next = null;
						return true;
					}
				}
			}

			if (buckets[i]) {
				if (buckets[i].next) {
					if (buckets[i].key === key) {
						delete buckets[i].key;
						delete buckets[i].value;
						buckets[i] = buckets[i].next;
						return true;
					}
				}
			}
		}
		return false;
	};

	const length = () => {
		let count = 0;
		for (let i = 0; i < buckets.length; i+=1) {
			if (buckets[i]) {
				if (buckets[i].key) {
					count += 1;
				}
			}
			if (buckets[i]) {
				if (buckets[i].next) {
					count += 1;
				}
			}
		}
		return count;
	};

	const clear = () => {
		for (let i = 0; i < buckets.length; i+=1) {
			delete buckets[i];
		}
	};

	const keys = () => {
		const arrOfKeys = [];
		for (let i = 0; i < buckets.length; i+=1) {
			if (buckets[i]) {
				arrOfKeys.push(buckets[i].key);
			}
			if (buckets[i] && buckets[i].next) {
				arrOfKeys.push(buckets[i].next.key);
			}
		}
		return arrOfKeys;
	};

	const values = () => {
		const arrOfValues = [];
		for (let i = 0; i < buckets.length; i+=1) {
			if (buckets[i]) {
				arrOfValues.push(buckets[i].value);
			}
			if (buckets[i] && buckets[i].next) {
				arrOfValues.push(buckets[i].next.value);
			}
		}
		return arrOfValues;
	};

	const entries = () => {
		const arrOfEntries = [];
		let entry = [];
		for (let i = 0; i < buckets.length; i+=1) {
			if (buckets[i]) {
				entry = [buckets[i].key, buckets[i].value];
				arrOfEntries.push(entry);
			}
			if (buckets[i] && buckets[i].next) {
				entry = [buckets[i].next.key, buckets[i].next.value];
				arrOfEntries.push(entry);
			}
		}
		return arrOfEntries;
	};

	return {
		buckets,
		hash,
		set,
		get,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries,
	};
};

export default HashMap;
