## Python Basics

### Q: What are the primary Python data types?
A: Python's standard built-in data types include numeric types (`int`, `float`, `complex`), sequence types (`str`, `list`, `tuple`), mapping types (`dict`), set types (`set`, `frozenset`), and boolean (`bool`). Additionally, `NoneType` represents the absence of a value.

### Q: What is the difference between a `list` and a `tuple`?
A: A `list` is mutable and defined with square brackets `[]`, meaning elements can be added, updated, or deleted dynamically. A `tuple` is immutable and defined with parentheses `()`, meaning its contents cannot be altered after instantiation, making it faster and memory-efficient.

### Q: What is the difference between a `set` and a `dictionary`?
A: A `set` is an unordered collection of unique elements with no associated values. A `dictionary` is an ordered collection (since Python 3.7) of unique key-value pairs where keys map to arbitrary data values.

### Q: Explain `*args` and `**kwargs`.
A: `*args` allows a function to accept any number of positional arguments as a tuple. `**kwargs` enables passing an arbitrary number of keyword arguments received inside the function as a dictionary.

### Q: What is a `lambda` function?
A: A `lambda` function is a small, anonymous inline function defined with the `lambda` keyword instead of `def`. It can accept any number of arguments but evaluates only a single expression and implicitly returns its result.

### Q: What is the difference between the `==` operator and the `is` keyword?
A: The `==` operator checks for value equality to see if the contents of two variables are equivalent. In contrast, the `is` keyword checks for identity equality, confirming whether both variables point to the exact same memory address.

### Q: What are decorators in Python?
A: A decorator is a design pattern used to extend or modify the behavior of a function or method without altering its source code. It takes a target function as an argument, wraps it with additional logic, and returns a new callable.

### Q: What are generators in Python?
A: A generator is a special function that produces a sequence of values on demand using the `yield` keyword instead of returning everything at once. This lazy evaluation avoids storing entire sequences in RAM, significantly optimizing memory usage.

### Q: How does exception handling work in Python (`try`/`except`/`finally`)?
A: Code that might raise an error is placed in a `try` block, and potential exceptions are intercepted and handled within the `except` block. The optional `finally` block always executes regardless of whether an error was raised, making it ideal for cleanup tasks.

### Q: What is the difference between modules and packages?
A: A module is a single Python file ending in `.py` containing variables, functions, or classes. A package is a directory containing multiple modules and an initialization file (historically `__init__.py`) to structure large codebases hierarchically.


