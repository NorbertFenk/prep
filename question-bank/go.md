## Go Lang Interview Questions

Source: <https://crsinfosolutions.com/go-lang-interview-questions/>

### Q: What is Golang?
A: Go is an open-source, compiled language created at Google for building simple, reliable, and efficient software. It combines C-like performance with high-level readability and a built-in concurrency model based on goroutines, making it popular for web services, cloud, and microservices.

### Q: What are Golang packages?
A: A package groups related code into a single unit and every Go file declares which package it belongs to. Packages give code separate namespaces for reuse and avoid naming conflicts, and you import them (e.g. `fmt`) to use their exported functions.

### Q: Why should one learn Golang? What are the advantages of Golang over other languages?
A: Go is easy to learn yet strong for backend, cloud, and microservices work thanks to first-class concurrency and a clean syntax. Its advantages include a rich standard library, compiled speed faster than interpreted languages, and automatic garbage collection for simpler memory management.

### Q: Is Golang case sensitive or insensitive?
A: Go is case-sensitive, so `myVariable` and `MyVariable` are distinct identifiers. Capitalization also controls visibility: names starting uppercase are exported outside the package, while lowercase names stay package-private.

### Q: What are Golang pointers?
A: A pointer holds the memory address of another variable, letting you reference and modify the original value instead of a copy. They are declared with `*` and are useful for large structures or when a function must mutate its argument.

### Q: What do you understand by Golang string literals?
A: String literals are constant text values written either in double quotes for interpreted strings or backticks for raw strings. Double-quoted strings process escape sequences such as `\n`, while raw strings ignore escapes and can span multiple lines.

### Q: What is the syntax used for the for loop in Golang? Explain.
A: `for` is Go's only loop and uses the form `for i := 0; i < 5; i++ { }` with an initializer, condition, and post statement. Omitting parts turns it into a `while`-style loop (`for condition`) or an infinite loop (`for {}`).

### Q: What do you understand by the scope of variables in Go?
A: Scope defines where a variable can be accessed; variables declared inside a function or block are local to it, while those declared at the top level have package scope. Go's strict scoping keeps code modular and frees local variables once their block ends.

### Q: What do you understand by goroutine in Golang?
A: A goroutine is a lightweight, concurrent function launched by placing the `go` keyword before a call. They use far fewer resources than OS threads, so a Go program can run thousands concurrently.

### Q: Is it possible to return multiple values from a function in Go?
A: Yes, a Go function can return any number of values. This is commonly used to return a result alongside an `error`, which keeps error handling explicit and readable.

### Q: Is it possible to declare variables of different types in a single line of code in Golang?
A: Yes, you can declare and initialize mixed types on one line, e.g. `var name, age, isEmployed = "Alice", 30, true`. Go infers each variable's type from its value.

### Q: What is "slice" in Go?
A: A slice is a dynamically-sized view into an underlying array, more flexible than a fixed array. It is created with `[]int{1, 2, 3}` or `make` and can grow via `append`.

### Q: What are Go Interfaces?
A: An interface defines a set of method signatures, and any type implementing those methods automatically satisfies it. This enables polymorphism, so functions can accept any type meeting the interface without knowing its concrete type.

### Q: Why is Golang fast compared to other languages?
A: Go is compiled directly to machine code, so it avoids the overhead of an interpreter or virtual machine. Its efficient memory model and concurrent garbage collector further reduce runtime overhead for large-scale applications.

### Q: How can we check if the Go map contains a key?
A: Use the two-value assignment: `value, exists := myMap["key"]`, where `exists` is a boolean. If the key is missing, `exists` is `false` and `value` is the zero value.

### Q: What are Go channels and how are channels used in Golang?
A: Channels are typed conduits that let goroutines send and receive data safely. Created with `make(chan T)`, they synchronize communication without explicit locks, e.g. `messages <- "hi"` sends and `<-messages` receives.

### Q: How does error handling work in Golang?
A: Go handles errors as values of the built-in `error` interface rather than exceptions. Functions return an `error` that the caller checks against `nil` and handles explicitly, keeping control flow predictable.

### Q: How do you declare constants in Go?
A: Constants are declared with the `const` keyword, e.g. `const Pi = 3.14`, and their values cannot change at runtime. They may be strings, booleans, or numeric types.

### Q: What is the zero value in Golang?
A: The zero value is the default a variable gets when declared without initialization, depending on its type: `0` for numbers, `false` for booleans, and `""` for strings. This guarantees every variable has a defined value and avoids null errors.

### Q: How does the Go compiler handle memory management?
A: The compiler includes a garbage collector that automatically reclaims memory no longer referenced. It runs concurrently with the program to minimize pauses and prevent leaks without manual memory management.

### Q: What are the different types of loops in Golang?
A: Go has only the `for` loop, but it covers all cases. It can be a classic `for i := 0; i < 10; i++`, a `while`-style `for condition`, or an infinite `for {}`.

### Q: What is the difference between an array and a slice in Go?
A: An array has a fixed length set at declaration, while a slice is a dynamically-sized view over an array. Slices can grow or shrink with `append` and are the usual choice for collections, whereas arrays suit fixed-size data.

### Q: What is the difference between make() and new() in Golang?
A: `new(T)` allocates zeroed memory for any type and returns a pointer to it. `make()` only works for slices, maps, and channels, returning an initialized value (not a pointer) ready for use.

### Q: Can we have private and public functions in Go? How do they differ?
A: Yes, visibility is determined by capitalization. A function starting uppercase is exported (public) and usable outside the package, while one starting lowercase is unexported (private) to the package.

### Q: What is a struct in Go, and how is it used?
A: A struct is a composite type grouping named fields under one type, e.g. `type Person struct { Name string; Age int }`. It models real-world entities and instances are created to hold related data together.

### Q: Explain the purpose of the defer statement in Go.
A: `defer` postpones a function call until the surrounding function returns. It is mainly used for cleanup such as closing files or unlocking mutexes, ensuring the action always runs.

### Q: How does Go handle concurrency differently from other languages?
A: Go uses lightweight goroutines and channels instead of heavy threads and locks. Goroutines are cheap to create in large numbers, and channels provide safe data sharing, making concurrency simpler and safer.

### Q: How do you convert data types in Go?
A: Conversions are explicit: write the target type before the value, e.g. `var f float64 = float64(i)`. Go never converts implicitly, which avoids hidden bugs and makes intent clear.

### Q: Can you explain the purpose of the init() function in Golang?
A: `init()` is a special function that runs automatically when a package is imported, before `main`. It is used for package-level setup such as initializing variables or validating configuration, and a package may have several.

### Q: What is a panic in Go, and how do you recover from it?
A: A panic is a runtime error that aborts the normal flow of execution. You can regain control with `recover()`, typically called inside a `defer`, which catches the panic and prevents the program from crashing.

### Q: How can you sort a slice of custom structs with the help of an example?
A: Use `sort.Slice` with a `less` function that compares fields, e.g. `sort.Slice(people, func(i, j int) bool { return people[i].Age < people[j].Age })`. This sorts the slice in place using your custom ordering.

### Q: What do you understand by Type Assertion in Go?
A: A type assertion extracts the concrete type stored in an interface, e.g. `str, ok := x.(string)`. If the type matches, `ok` is `true` and `str` holds the value; otherwise `ok` is `false`, so it is safe to use.

### Q: How will you check the type of a variable at runtime in Go?
A: Use a type switch on an interface value: `switch v := x.(type) { case int: ... }`. It compares the dynamic type against each case, letting you handle different types distinctly.

### Q: Is the usage of Global Variables in programs implementing goroutines recommended?
A: Generally no, because concurrent access to globals can cause race conditions and unpredictable results. Prefer channels or synchronization primitives like mutexes to manage shared state.

### Q: What are the uses of an empty struct?
A: `struct{}` occupies zero bytes, so it is ideal as a marker. It is commonly used as map values to implement sets and as signals over channels without carrying data.

### Q: How can we copy a slice and a map in Go?
A: Copy a slice with the built-in `copy(dest, src)`, which duplicates elements into a destination of sufficient length. Maps have no built-in copy, so you must iterate and insert each key-value pair into a new map.

### Q: How is GoPATH different from GoROOT variables in Go?
A: `GOROOT` points to where the Go installation and standard library live. `GOPATH` points to your workspace holding project source, packages, and binaries, keeping user code separate from the toolchain.

### Q: In Go, are there any good error handling practices?
A: Check errors immediately after each call and handle or return them with context. Use the `errors` and `fmt` packages to wrap errors, and define custom error types when more detail aids debugging.

### Q: Which is safer for concurrent data access: Channels or Maps?
A: Channels are safer because they synchronize access, allowing only one goroutine to send or receive at a time. Maps are not thread-safe by default and need an external mutex for concurrent use.

### Q: Can you format a string without printing?
A: Yes, use `fmt.Sprintf`, which returns the formatted string instead of printing it. For example, `str := fmt.Sprintf("Hello, %s!", "World")` builds `"Hello, World!"` for logging or later use.

### Q: What do you understand by Shadowing in Go?
A: Shadowing occurs when an inner scope declares a variable with the same name as one in an outer scope, hiding the outer variable within that block. It can cause subtle bugs, so careful naming and short scopes help avoid it.

### Q: What do you understand by variadic functions in Go?
A: A variadic function accepts a variable number of arguments of one type, declared with `...`, e.g. `func sum(nums ...int)`. Inside the function the arguments are available as a slice.

### Q: What do you understand by byte and rune data types? How are they represented?
A: `byte` is an alias for `uint8` representing a single ASCII character, while `rune` is an alias for `int32` representing a Unicode code point. Use `rune` when handling multi-byte or international characters.

### Q: How do you handle race conditions in Golang?
A: Protect shared data with `sync.Mutex` or route access through channels. Mutexes allow only one goroutine to touch a resource at a time, while channels synchronize data exchange without explicit locks.

### Q: How do you implement a worker pool in Go?
A: Launch a fixed number of worker goroutines that read tasks from a shared channel. Distribute jobs onto the channel, and the workers process them in parallel, maximizing CPU use and bounding concurrency.

### Q: What are mutexes in Go, and when do you use them?
A: Mutexes from `sync.Mutex` are synchronization primitives that grant exclusive access to shared data. Lock before accessing the resource and unlock afterward to prevent concurrent reads and writes from corrupting state.

### Q: How do you optimize memory usage in Golang applications?
A: Reduce allocations, reuse buffers via pooling, and avoid unnecessarily large structs. Use the `pprof` profiler to find memory-heavy code and target those areas for optimization.

### Q: How does garbage collection work in Go?
A: Go's garbage collector automatically frees memory that is no longer referenced. It runs concurrently with the program, identifying unreachable objects and reclaiming them to prevent leaks with minimal pause times.

### Q: How do you manage third-party dependencies in Go projects?
A: Go modules manage dependencies using `go.mod` and `go.sum` files that record versions and hashes for reproducible builds. Use `go get` to add or update packages and `go mod tidy` to remove unused ones.

### Q: How do you debug performance bottlenecks in a Go application?
A: Use profiling tools like `pprof` to inspect CPU, memory, and goroutine usage. The `trace` tool and Go benchmarks help pinpoint slow functions and memory leaks so you can fix the hottest paths.
