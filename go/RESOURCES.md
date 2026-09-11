# Resources

## Primary

### A Tour of Go

- URL: https://go.dev/tour/
- Trust: Official Go project tutorial.
- Use: Follow the tour sections on basics, packages, functions
  (https://go.dev/tour/basics/4), flow control
  (https://go.dev/tour/flowcontrol/1), more types — slices, range, structs,
  maps (https://go.dev/tour/moretypes/1) — and methods, pointers, and
  interfaces (https://go.dev/tour/methods/1), and errors
  (https://go.dev/tour/methods/19), and concurrency
  (https://go.dev/tour/concurrency/1) alongside the lessons.

### Go by Example

- URL: https://gobyexample.com/
- Trust: Long-running community reference, code-checked; complements the
  official tour where it stops (files, CLI flags, goroutines).
- Use: Look up short, runnable snippets — reading files, command-line flags,
  JSON, HTTP servers, os, strings — once the tour no longer covers the topic.

### Standard library documentation

- URL: https://pkg.go.dev/std
- Trust: Official per-package documentation.
- Use: Deep-dive the packages the later lessons use: net/http, encoding/json,
  flag, sync, testing.

### Create a Go module

- URL: https://go.dev/doc/tutorial/create-module
- Trust: Official Go project tutorial.
- Use: Learn how `go mod init` creates `go.mod` and how `:=` declares and
  initializes a variable.

### Add a test

- URL: https://go.dev/doc/tutorial/add-a-test
- Trust: Official Go project tutorial (continues Create a Go module).
- Use: Learn the `_test.go` / `TestXxx(t *testing.T)` / `go test` workflow
  alongside lesson 15.

## Reference

### Go Documentation

- URL: https://go.dev/doc/
- Trust: Official Go project documentation.
- Use: Find installation guidance, language documentation, and tooling.

### Effective Go

- URL: https://go.dev/doc/effective_go
- Trust: Official Go project guidance.
- Use: Read after the basics; it explains the conventions that make Go code
  feel idiomatic.
