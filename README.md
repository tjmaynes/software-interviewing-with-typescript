# Software Interviewing with Javascript

> My interviewing preparation (data structures, algorithms, etc) work in Javascript.

## Requirements

- [GNU Make](https://www.gnu.org/software/make)
- [Nodejs](https://nodejs.org/en/)

## Usage

To install project dependencies, run the following command:

```bash
make install
```

To run all tests, run the following command:

```bash
make test
```

## Studying

### Big-O Notation

- An algorithm is a finite sequence of instructions that solve a specific problem or perform a computation.
- We use polynomials to express the time complexity of an algorithm.
- If the input size is small, a poorly designed algorithm may perform ok. However, as the input size increases/scales, a poorly designed algorithm will be costly to run. We can use _asymptotic notation_ to compare two different implementations of the same algorithm with large input.
- Big-O, Big-Omega, and Big-Theta are examples of asymptotic notations.
- Big-O => `f(n)` belongs to `O(g(n))`
- `n^2 + 2n + 1` is `O(n^2)`, while `n^5 + 2n^4 + 8n + 5` is `O(n^5)`
- We tend to care more about Big-O when we are analyzing algorithms as it tells us the worst-case running time of an algorithm will grow _at most_ as fast as a constant multiple of a certain function (than grow at least like Big-Omega).
- Whenever you see a problem iterated over a problem space, `i` to `n`, it is most likely in `O(n)` or linear time complexity
- Whenever you see a problem iterated over a problem space and the number of elements gets halved each iteration, it is most likely in `O(logn)` or logarithmic time complexity
- Whenver you see a problem iterated over a problem space and there exists an inner loop that depends on the outer-loop, it is most likely in `O(n^2)` or quadratic time complexity
- Whenver you see a problem iterated over a problem space and there exists an inner loop that is independent of the outer-loop, it is most likely in `O(nm)` or linear time complexity

| Function         | Name         |
| ---------------- | ------------ |
| Any constant `c` | Constant     |
| `logn`           | Logarithmic  |
| `log^2n`         | Log-square   |
| `n`              | Linear       |
| `nlogn`          | Linearithmic |
| `n^2`            | Quadratic    |
| `n^3`            | Cubic        |
| `n^4`            | Quartic      |
| `2^n`            | Exponential  |
| `e^n`            | Exponential  |
| `n!`             | n-Factorial  |

#### Common Data Structures

| Type               | Access | Search | Insertion | Deletion |
| ------------------ | ------ | ------ | --------- | -------- |
| Array              | O(1)   | O(n)   | O(1)      | O(n)     |
| Stack              | O(n)   | O(n)   | O(1)      | O(1)     |
| Singly-Linked List | O(n)   | O(n)   | O(1)      | O(1)     |
| Doubly-Linked List | O(n)   | O(n)   | O(1)      | O(1)     |
| Hash Table         |        |        |           |          |
| Queue              |        |        |           |          |
| Binary Search Tree |        |        |           |          |

#### Sorting Algorithms

| Algorithm      | Worst | Average | Best | Worst Space Complexity |
| -------------- | ----- | ------- | ---- | ---------------------- |
| Bubble Sort    |       |         |      |                        |
| Insertion Sort |       |         |      |                        |
| Selection Sort |       |         |      |                        |
| Quicksort      |       |         |      |                        |
| Mergesort      |       |         |      |                        |
| Heapsort       |       |         |      |                        |

## Links

- [Big-O Cheatsheet](https://www.bigocheatsheet.com/)
