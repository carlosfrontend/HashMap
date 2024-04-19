import LinkedList from './LinkedList.js';

const size = 16;
let buckets = [];
const loadFactor = 0.75;
const capacity = loadFactor * size;

buckets.length = size;

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

	const set = (key) => {
		const index = hash(key);
    const node = { key: null, next: null };
		const linkedList = LinkedList();
		let empty = 0;
		const newBuckets = [];

		if (index < 0 || index >= buckets.length) {
			throw new Error('Trying to access index out of bound');
		}

		if (!buckets[index]) {
			linkedList.head = node;
			buckets[index] = linkedList.head;
			node.key = key;
		}

		for (let i = 0; i < buckets.length; i += 1) {
			if (index === i) {
				const collisionNode = { key, next: null };
				if (key !== buckets[index].key) {
					collisionNode.key = key;
					buckets[index].next = collisionNode;
				} else {
					buckets[index].key = key;
				}
			}
		}

		for (let i = 0; i < buckets.length; i += 1) {
			if (!buckets[i]) {
				let full = 0;
				empty += 1;
				full = buckets.length - empty;
				if (full >= capacity) {
					for (let j = 0; j < newBuckets.length; j += 1) {
						if (!buckets[i] === undefined) {
							newBuckets[j] = buckets[i];
							buckets = newBuckets;
						}
					}
					buckets.length = size * 2;
				}
			}
		}
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
		for (let i = 0; i < buckets.length; i += 1) {
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
						buckets[i].next = null;
						return true;
					}
				}
			}

			if (buckets[i]) {
				if (buckets[i].next) {
					if (buckets[i].key === key) {
						delete buckets[i].key;
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
		for (let i = 0; i < buckets.length; i += 1) {
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
		for (let i = 0; i < buckets.length; i += 1) {
			delete buckets[i];
		}
		buckets.length = size;
	};

	const keys = () => {
		const arrOfKeys = [];
		for (let i = 0; i < buckets.length; i += 1) {
			if (buckets[i]) {
				arrOfKeys.push(buckets[i].key);
			}
			if (buckets[i] && buckets[i].next) {
				arrOfKeys.push(buckets[i].next.key);
			}
		}
		return arrOfKeys;
	};

	return {
		buckets,
		hash,
		set,
		has,
		remove,
		length,
		clear,
		keys
	};
};

export default HashMap;
