Certainly! Here's the converted content in Markdown format.

---

# Permutations, Combinations and more

Check: [GeeksforGeeks - Backtracking Algorithms](https://www.geeksforgeeks.org/backtracking-algorithms/)

Some classic backtracking problems are great for beginners. These problems are simple enough to help you grasp the fundamental concepts of backtracking, but they also cover different aspects (such as subsets, permutations, and combinations) that will build your intuition.

---

## 1. **Subset Generation**

- **Problem**: Given a set of distinct integers, return all possible subsets (the power set).
- **Example**:
  - **Input**: `[1, 2, 3]`
  - **Output**: `[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]`
  - **Explanation**: This problem demonstrates how backtracking builds subsets step-by-step by including or excluding each element.

```javascript
function allPossibleSubsets(numbers = [], k) {
  const result = [];

  function backtrack(start, subset) {
    result.push([...subset]); // Add subset to the result
    for (let i = start; i < numbers.length; i++) {
      subset.push(numbers[i]); // Include current element
      backtrack(i + 1, subset); // Move to next element
      subset.pop(); // Exclude last element to backtrack
    }
  }

  backtrack(0, []);
  return result;
}

// Example
const array = [5, 9, 23];
console.log(allPossibleSubsets(array));
```

---

## 2. **Permutations**

A **permutation** of an array is an arrangement of its elements in a specific order. For `[5, 9, 23]`, we have 3 elements, so we can arrange them in \(3! = 6\) different ways.

- **Permutations of `[5, 9, 23]`**:
  - `[5, 9, 23]`
  - `[5, 23, 9]`
  - `[9, 5, 23]`
  - `[9, 23, 5]`
  - `[23, 5, 9]`
  - `[23, 9, 5]`

```javascript
function permutationsOfArray(numbers, k) {
  const result = [];

  function backtrack(subset) {
    if (subset.length === k) {
      result.push([...subset]);
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (subset.includes(numbers[i])) continue;
      subset.push(numbers[i]);
      backtrack(subset);
      subset.pop();
    }
  }

  backtrack([]);
  return result;
}

// Example
const array = [5, 9, 23];
console.log(permutationsOfArray(array, 3));
```

---

## 3. **Combinations**

A **combination** is a selection of elements without regard to their order. For `[5, 9, 23]`, we can select different subsets:

- **Combinations of 1 element**: `[5]`, `[9]`, `[23]`
- **Combinations of 2 elements**: `[5, 9]`, `[5, 23]`, `[9, 23]`
- **Combinations of 3 elements**: `[5, 9, 23]`

```javascript
function combinationsOfArray(numbers, k) {
  const result = [];

  function backtrack(start, subset) {
    if (subset.length === k) {
      result.push([...subset]);
      return;
    }
    // incrementing "start" every time will ensure a unique value.
    for (let i = start; i < numbers.length; i++) {
      subset.push(numbers[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Example
const array = [5, 9, 23];
console.log(combinationsOfArray(array, 2));
```

---

## 4. **Variations**

In combinatorics, a **variation** (or ordered selection) refers to selecting a subset of elements from a set, where order matters.

- **Variations of 2 elements from `[5, 9, 23]`**:
  - `[5, 9]`, `[5, 23]`, `[9, 5]`, `[9, 23]`, `[23, 5]`, `[23, 9]`

```javascript
function variationsOfArray(numbers, k) {
  const result = [];

  function backtrack(subset) {
    if (subset.length === k) {
      result.push([...subset]);
      return;
    }
    // every time start from 0 will allow to get the same value in an other position
    for (let i = 0; i < numbers.length; i++) {
      // this condition will prevent to have the same value multiple times
      if (subset.includes(numbers[i])) continue;
      subset.push(numbers[i]);
      backtrack(subset);
      subset.pop();
    }
  }

  backtrack([]);
  return result;
}

// Example
const array = [5, 9, 23];
console.log(variationsOfArray(array, 2));
```

---

## 5. **Probability**

With array `[5, 9, 23]` and equal probability of choosing any element:

- Probability of picking `5` = \( \frac{1}{3} \)
- Probability of picking `9` = \( \frac{1}{3} \)
- Probability of picking `23` = \( \frac{1}{3} \)

## 6. **Factorial**

The **factorial** of \( n \), denoted \( n! \), is the product of all positive integers from 1 up to \( n \). For example:

- \( 3! = 3 \times 2 \times 1 = 6 \)

This means there are 6 ways to arrange 3 elements `[5, 9, 23]`, as we calculated for permutations.

---

## Additional Problems

### 1. **Letter Combinations of a Phone Number**

- **Problem**: Given a string containing digits from `2` to `9`, return all possible letter combinations that the number could represent.
- **Example**:
  - Input: `"23"`
  - Output: `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`

### 2. **Generate Parentheses**

- **Problem**: Given `n` pairs of parentheses, generate all combinations of well-formed parentheses.
- **Example**:
  - Input: `n = 3`
  - Output: `["((()))","(()())","(())()","()(())","()()()"]`

### 3. **N-Queens Problem**

- **Problem**: Place `n` queens on an `n x n` chessboard so that no two queens attack each other.
- **Example**:
  - Input: `n = 4`
  - Output: `[[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`

### 4. **Subset Sum Problem**

- **Problem**: Given a set of integers and a target sum, find all subsets that sum up to the target.
- **Example**:
  - Input: `nums = [2, 3, 6, 7], target = 7`
  - Output: `[[7], [2, 3, 2]]`

---

## Tips for Starting Each Problem

1. **Understand Constraints**: Think about how each element in the input affects the next steps.
2. **Write Out the Base Case**: For most problems, the base case will be when your subset reaches a certain length or sum.
3. **Draw the Decision Tree**: Visualize how the elements are included/excluded to help understand the recursive steps.
4. **Practice**: Once comfortable, try variations or add constraints to deepen understanding.

These problems cover a range of patterns in backtracking, providing a strong foundation for more complex challenges!
