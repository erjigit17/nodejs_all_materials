### Consistent Hashing

<details>
<summary>Что такое Consistent Hashing?</summary>
Consistent Hashing - это техника распределения ключей по множеству узлов (например, серверов) таким образом, что минимальное количество ключей нужно перераспределить, когда узел добавляется или удаляется. Это особенно полезно в распределенных системах и кешах.

#### Пример кода на JavaScript:
```javascript
class ConsistentHashing {
    constructor(nodes = [], replicas = 100) {
        this.replicas = replicas;
        this.ring = new Map();
        this.sortedKeys = [];
        nodes.forEach(node => this.addNode(node));
    }

    hashFn(str) {
        // Простая хэш-функция
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    addNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const key = this.hashFn(`${node}-${i}`);
            this.ring.set(key, node);
            this.sortedKeys.push(key);
        }
        this.sortedKeys.sort((a, b) => a - b);
    }

    getNode(key) {
        const hash = this.hashFn(key);
        for (let i = 0; i < this.sortedKeys.length; i++) {
            if (hash <= this.sortedKeys[i]) {
                return this.ring.get(this.sortedKeys[i]);
            }
        }
        return this.ring.get(this.sortedKeys[0]);
    }
}

// Пример использования
const nodes = ['Node1', 'Node2', 'Node3'];
const ch = new ConsistentHashing(nodes);
console.log(ch.getNode('my-key'));
```

#### Преимущества:
- **Минимальная перегруппировка ключей**: при добавлении или удалении узлов.
- **Высокая масштабируемость**: позволяет легко добавлять новые узлы.
- **Эффективность распределения нагрузки**: ключи равномерно распределяются по узлам.
</details>

### Типы деревьев (B-Tree, R-Tree и т.д.)

<details>
<summary>Что такое B-Tree?</summary>
B-Tree - это сбалансированное дерево поиска, в котором каждая вершина может иметь несколько потомков и ключей. Это позволяет эффективно выполнять операции поиска, вставки и удаления.

#### Пример кода на JavaScript:
```javascript
class BTreeNode {
    constructor(t, leaf = false) {
        this.t = t;
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }

    traverse() {
        for (let i = 0; i < this.keys.length; i++) {
            if (!this.leaf) {
                this.children[i].traverse();
            }
            console.log(this.keys[i]);
        }
        if (!this.leaf) {
            this.children[this.keys.length].traverse();
        }
    }

    search(key) {
        let i = 0;
        while (i < this.keys.length && key > this.keys[i]) {
            i++;
        }

        if (this.keys[i] === key) {
            return this;
        }

        if (this.leaf) {
            return null;
        }

        return this.children[i].search(key);
    }
}

class BTree {
    constructor(t) {
        this.root = new BTreeNode(t, true);
        this.t = t;
    }

    traverse() {
        if (this.root != null) {
            this.root.traverse();
        }
    }

    search(key) {
        return (this.root == null) ? null : this.root.search(key);
    }
}

// Пример использования
const t = 3;
const btree = new BTree(t);
btree.traverse();
```

#### Преимущества:
- **Эффективное управление памятью**: уменьшает количество дисковых операций.
- **Сбалансированность**: гарантирует логарифмическое время для основных операций.
- **Используется в базах данных**: например, для индексов в реляционных СУБД.

<summary>Что такое R-Tree?</summary>
R-Tree - это дерево, используемое для индексирования многомерных данных, таких как географические координаты, прямоугольники или полигоны. Оно особенно полезно для пространственных баз данных.

#### Пример кода на JavaScript:
```javascript
class Rectangle {
    constructor(minX, minY, maxX, maxY) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    intersects(other) {
        return this.minX <= other.maxX && this.maxX >= other.minX && this.minY <= other.maxY && this.maxY >= other.minY;
    }
}

class RTreeNode {
    constructor(rectangle, children = []) {
        this.rectangle = rectangle;
        this.children = children;
    }
}

class RTree {
    constructor() {
        this.root = null;
    }

    insert(rectangle) {
        if (this.root === null) {
            this.root = new RTreeNode(rectangle);
        } else {
            // Здесь должна быть логика вставки, которая учитывает разбиение и балансировку
        }
    }

    search(rectangle, results = []) {
        if (this.root === null) {
            return results;
        }

        this._search(this.root, rectangle, results);
        return results;
    }

    _search(node, rectangle, results) {
        if (node.rectangle.intersects(rectangle)) {
            if (node.children.length === 0) {
                results.push(node.rectangle);
            } else {
                for (const child of node.children) {
                    this._search(child, rectangle, results);
                }
            }
        }
    }
}

// Пример использования
const rtree = new RTree();
rtree.insert(new Rectangle(0, 0, 10, 10));
console.log(rtree.search(new Rectangle(5, 5, 15, 15)));
```

#### Преимущества:
- **Эффективен для пространственных запросов**: таких как поиск пересечений и диапазонов.
- **Используется в ГИС**: для управления географической информацией и картами.
</details>

### Обратный индекс и Trie

<details>
<summary>Что такое обратный индекс?</summary>
Обратный индекс (Reverse Index) - это структура данных, используемая для быстрого поиска документов, содержащих определенные слова. Он широко используется в поисковых системах.

#### Пример кода на JavaScript:
```javascript
class InvertedIndex {
    constructor() {
        this.index = {};
    }

    add(document, id) {
        const words = document.split(/\W+/);
        words.forEach(word => {
            if (!this.index[word]) {
                this.index[word] = [];
            }
            if (!this.index[word].includes(id)) {
                this.index[word].push(id);
            }
        });
    }

    search(query) {
        return this.index[query] || [];
    }
}

// Пример использования
const ii = new InvertedIndex();
ii.add("Hello world", 1);
ii.add("Hello there", 2);
console.log(ii.search("Hello")); // [1, 2]
```

#### Преимущества:
- **Быстрый поиск документов**: по ключевым словам.
- **Эффективность для полнотекстового поиска**: особенно в больших объемах данных.
- **Используется в поисковых системах**: таких как Google и Elasticsearch.

<summary>Что такое Trie?</summary>
Trie (префиксное дерево) - это структура данных, используемая для хранения множества строк, где каждая вершина представляет собой общий префикс. Trie эффективен для автозаполнения и поиска по префиксу.

#### Пример кода на JavaScript:
```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Пример использования
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.startsWith("hell")); // true
```

#### Преимущества:
- **Б

ыстрый поиск по префиксу**: идеально подходит для автозаполнения.
- **Эффективное использование памяти**: благодаря общей структуре для префиксов.
- **Используется в текстовых процессорах**: и поисковых системах для автодополнения и исправления ошибок.
</details>

Конечно, давай рассмотрим еще несколько важных тем, которые могут пригодиться для интервью.

### Hash Tables (Хеш-таблицы)

<details>
<summary>Что такое хеш-таблица?</summary>
Хеш-таблица - это структура данных, которая ассоциирует ключи с значениями с использованием хеш-функции. Она обеспечивает быстрый доступ к данным.

#### Пример кода на JavaScript:
```javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

// Пример использования
let ht = new HashTable();
ht.set("hello", "world");
ht.set("foo", "bar");
console.log(ht.get("hello")); // "world"
console.log(ht.keys()); // ["hello", "foo"]
console.log(ht.values()); // ["world", "bar"]
```

#### Преимущества:
- **Быстрый доступ к данным**: за счет использования хеш-функции.
- **Эффективное использование памяти**: при правильном выборе размера хеш-таблицы.
- **Используется в базах данных и кэшах**: для быстрого доступа к данным.
</details>

### Graphs (Графы)

<details>
<summary>Что такое граф?</summary>
Граф - это структура данных, состоящая из вершин (или узлов) и ребер, соединяющих эти вершины. Графы могут быть направленными или ненаправленными.

#### Пример кода на JavaScript:
```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

// Пример использования
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
console.log(g.depthFirstRecursive("A")); // ["A", "B", "C"]
console.log(g.breadthFirst("A")); // ["A", "B", "C"]
```

#### Преимущества:
- **Моделирование реальных систем**: таких как социальные сети или транспортные сети.
- **Эффективные алгоритмы поиска и обхода**: например, DFS и BFS.
- **Используется в базах данных**: для представления и обработки графов данных.
</details>

### Bloom Filter (Фильтр Блума)

<details>
<summary>Что такое фильтр Блума?</summary>
Фильтр Блума - это вероятностная структура данных, используемая для проверки наличия элемента в множестве. Он позволяет с высокой вероятностью определить, что элемент не присутствует, и с определенной вероятностью утверждать, что элемент присутствует.

#### Пример кода на JavaScript:
```javascript
class BloomFilter {
    constructor(size = 100) {
        this.size = size;
        this.bitArray = new Array(size).fill(0);
        this.hashFunctions = [
            this._hashFn1,
            this._hashFn2,
            this._hashFn3
        ];
    }

    _hashFn1(item) {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 5) + item.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    _hashFn2(item) {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 7) + item.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    _hashFn3(item) {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 3) + item.charCodeAt(i);
            hash = hash & hash;
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }

    add(item) {
        this.hashFunctions.forEach(fn => {
            const hash = fn(item);
            this.bitArray[hash] = 1;
        });
    }

    contains(item) {
        return this.hashFunctions.every(fn => {
            const hash = fn(item);
            return this.bitArray[hash] === 1;
        });
    }
}

// Пример использования
let bf = new BloomFilter(20);
bf.add("apple");
console.log(bf.contains("apple")); // true
console.log(bf.contains("banana")); // false
```

#### Преимущества:
- **Эффективность по памяти**: занимает меньше места по сравнению с множествами.
- **Быстрота операций**: проверка наличия и добавление элементов происходят очень быстро.
- **Используется в системах кэширования**: и для фильтрации спама.
</details>

### LRU Cache (Кэш с наименьшим временем использования)

<details>
<summary>Что такое LRU Cache?</summary>
LRU (Least Recently Used) Cache - это структура данных, которая удаляет наименее недавно используемые элементы, когда кэш достигает своего предела. Это полезно для поддержания набора наиболее актуальных данных.

#### Пример кода на JavaScript:
```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set

```javascript
(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}

// Пример использования
let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3); // Удаляет ключ 2
console.log(lru.get(2)); // -1 (не найден)
lru.put(4, 4); // Удаляет ключ 1
console.log(lru.get(1)); // -1 (не найден)
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4
```

#### Преимущества:
- **Эффективное использование памяти**: сохраняет только наиболее актуальные данные.
- **Высокая производительность**: обеспечивает быстрый доступ к часто используемым данным.
- **Используется в системах кэширования**: и для оптимизации доступа к данным.
</details>

### Priority Queue (Очередь с приоритетом)

<details>
<summary>Что такое очередь с приоритетом?</summary>
Очередь с приоритетом - это структура данных, где каждый элемент имеет приоритет. Элементы с более высоким приоритетом обрабатываются раньше элементов с более низким приоритетом.

#### Пример кода на JavaScript:
```javascript
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// Пример использования
let pq = new PriorityQueue();
pq.enqueue("cold", 5);
pq.enqueue("gunshot wound", 1);
pq.enqueue("high fever", 2);
console.log(pq.dequeue()); // { val: "gunshot wound", priority: 1 }
console.log(pq.dequeue()); // { val: "high fever", priority: 2 }
console.log(pq.dequeue()); // { val: "cold", priority: 5 }
```

#### Преимущества:
- **Управление приоритетами задач**: позволяет обрабатывать более важные задачи в первую очередь.
- **Гибкость**: может быть использована для различных алгоритмов, таких как алгоритм Дейкстры.
- **Используется в операционных системах и сетях**: для управления задачами и трафиком.
</details>

### Segment Tree (Сегментное дерево)

<details>
<summary>Что такое сегментное дерево?</summary>
Сегментное дерево - это структура данных, которая позволяет эффективно выполнять запросы и обновления на поддиапазонах массива.

#### Пример кода на JavaScript:
```javascript
class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(2 * this.n).fill(0);
        this.build(arr);
    }

    build(arr) {
        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = arr[i];
        }
        for (let i = this.n - 1; i > 0; --i) {
            this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
        }
    }

    update(index, value) {
        index += this.n;
        this.tree[index] = value;
        while (index > 1) {
            index = Math.floor(index / 2);
            this.tree[index] = this.tree[index * 2] + this.tree[index * 2 + 1];
        }
    }

    sumRange(left, right) {
        left += this.n;
        right += this.n;
        let sum = 0;
        while (left <= right) {
            if (left % 2 === 1) sum += this.tree[left++];
            if (right % 2 === 0) sum += this.tree[right--];
            left = Math.floor(left / 2);
            right = Math.floor(right / 2) - 1;
        }
        return sum;
    }
}

// Пример использования
let arr = [1, 3, 5, 7, 9, 11];
let segTree = new SegmentTree(arr);
console.log(segTree.sumRange(1, 3)); // 15 (3 + 5 + 7)
segTree.update(1, 10);
console.log(segTree.sumRange(1, 3)); // 22 (10 + 5 + 7)
```

#### Преимущества:
- **Эффективные операции на поддиапазонах**: быстрое выполнение запросов и обновлений.
- **Гибкость**: может использоваться для различных типов запросов, таких как минимум или максимум на диапазоне.
- **Используется в алгоритмах и задачах на интервалы**: таких как нахождение суммы или максимума на поддиапазоне.
</details>

### Куча (Heap)

<details>
<summary>Что такое куча?</summary>
Куча - это специализированное дерево, которое удовлетворяет свойству кучи, где каждый узел имеет значение меньшее (или большее) чем его дочерние узлы. Максимальная куча (Max Heap) всегда имеет наибольшее значение в корне.

#### Пример кода на JavaScript:
```javascript
class MaxHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

// Пример использования
let heap = new MaxHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap.extractMax()); // 55
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
```

#### Преимущества:
- **Быстрое извлечение максимума или минимума**: за счет структуры кучи.
- **Эффективное добавление и удаление элементов**: операции происходят за логарифмическое время.
- **Используется в алгоритмах сортировки и приоритетных очередях**: например, HeapSort и Priority Queue.
</details>
