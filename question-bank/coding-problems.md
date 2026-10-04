## Coding Problems Practice

### Q: Fibonacci Series Generation
A: The Fibonacci sequence can be generated iteratively in $O(n)$ time by maintaining the previous two numbers in variables and summing them sequentially. Alternatively, dynamic programming or memoization can be used to optimize recursive approaches.

### Q: Reversing a String
A: A string can be reversed by swapping characters inward from both ends using two pointers or via slicing syntax like `string[::-1]`. Because strings are immutable in Python, converting to a list or joining reversed characters creates the new string.

### Q: Prime Number Check
A: A number $n$ is prime if it is greater than 1 and has no divisors other than 1 and itself. We can check divisibility only up to $\sqrt{n}$; if no factor is found in that range, the number is prime.

### Q: Armstrong Number Verification
A: An Armstrong number equals the sum of its own digits each raised to the power of the total number of digits. To check this, extract each digit, compute its power, accumulate the sum, and verify if the result matches the initial integer.

### Q: Factorial of a Number
A: The factorial of $n$ ($n!$) is the product of all positive integers less than or equal to $n$. It is calculated by running a loop multiplying numbers from 1 to $n$ in $O(n)$ time, with a base case of $0! = 1$.

### Q: Frequency Count of Elements or Characters
A: Frequencies can be counted in $O(n)$ time by iterating over the collection and updating counts in a hash map or Python `dict`. Built-in tools like `collections.Counter` simplify this process into a single step.

### Q: Removing Duplicates from an Array or List
A: Duplicates can be removed by casting the collection to a `set` if order does not matter. If order must be preserved, we can iterate while tracking seen elements in a set or use `dict.fromkeys(array)` in Python.

### Q: Finding the Maximum or Minimum Element in an Array
A: You can find the extremum in $O(n)$ time by initializing a pointer with the first element and scanning through the rest of the array, updating the value whenever a larger or smaller element appears. Most languages provide built-in functions like `min()` and `max()` that perform this scan.

### Q: Two Sum Problem
A: The Two Sum problem asks for indices of two numbers that sum up to a target value. It can be solved in $O(n)$ time using a hash map that stores each visited element alongside its index and checks if `target - current_value` already exists in the map.

### Q: Array Sorting Algorithms
A: Common array sorting techniques include $O(n^2)$ comparison sorts like Bubble and Insertion Sort for simple cases, and $O(n \log n)$ algorithms like QuickSort and MergeSort for general efficiency. Modern language runtimes typically implement hybrid algorithms like Timsort.

### Q: Binary Search Implementation
A: Binary search finds a target in a pre-sorted array in $O(\log n)$ time by repeatedly dividing the search interval in half. It compares the middle element to the target and shifts the left or right search boundary accordingly until a match is found.

### Q: Dictionary-based Logic Problems
A: Dictionary logic problems typically require grouping, mapping, or aggregating data, such as grouping anagrams or tracking nested configurations. They are solved by leveraging $O(1)$ average-time key lookups and hash updates.


