// ===============================
// Google V8 Engine Architecture & Optimization Techniques
// ===============================

// --- Google V8 Architecture ---
// V8 is Google's open-source JavaScript engine, used in Chrome and Node.js.
// It compiles JavaScript directly to native machine code for fast execution.
// Key components:
// - Parser: Parses JS code into an Abstract Syntax Tree (AST).
// - Ignition: The interpreter that executes bytecode.
// - TurboFan: The optimizing compiler that generates highly optimized machine code.
// - Garbage Collector: Manages memory automatically (see Mark & Sweep below).

// --- Mark & Sweep Algorithm ---
// This is a garbage collection technique used by V8 to free up unused memory.
// 1. Mark phase: The GC "marks" all objects that are reachable (still in use).
// 2. Sweep phase: It "sweeps" through memory and deletes all unmarked (unreachable) objects.
// This helps prevent memory leaks and keeps the application efficient.

// --- Inlining ---
// Inlining is an optimization where small functions are replaced with their body at the call site.
// This reduces function call overhead and can make code run faster.
// Example:
// Instead of calling function add(a, b), the engine may replace it with (a + b) directly if add is simple enough.

// --- Copy Elision ---
// Copy elision is an optimization that avoids unnecessary copying of objects.
// When returning large objects from functions, V8 may optimize away the copy and construct the object directly in its final location.
// This reduces memory usage and improves performance.

// --- Inline Caching ---
// Inline caching is a technique to speed up property access on objects.
// V8 remembers the type of object accessed at a property and caches the location of that property.
// If the same property is accessed repeatedly on similar objects, V8 can skip type checks and access the property faster.
// This greatly improves performance for repeated operations on objects with the same shape (structure).

// --- Interview Recap ---
// - V8 uses techniques like inlining, copy elision, and inline caching to optimize JS execution.
// - Mark & Sweep is the main garbage collection algorithm in V8.
// - Understanding these concepts helps you write more efficient JavaScript and answer deep-dive interview questions!