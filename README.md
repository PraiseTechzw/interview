# Coding Interview: Enquiry System

Welcome! This is a small starter project simulating a real-world "buggy" repo. Your task is to fix existing issues, add a new feature, and ensure the system is well-tested.

## Tasks

### 1. Fix Failing Tests
Run `npx vitest run`. You will see 2 failing tests. 
- Fix the email validation logic in `lib/enquiryManager.ts`.
- Fix the enquiry persistence logic so that new enquiries are actually saved.

### 2. Add a Feature
Implement a new function `searchEnquiriesByEmail(email: string)` in `lib/enquiryManager.ts`.
- It should return all enquiries matching the provided email.
- It should support **partial matches** (e.g., "jane" matches "jane@test.org").
- It should be **case-insensitive**.

### 3. Add a New Test
Add at least one new test in `tests/enquiry.test.ts` to verify your new search feature works as expected.

## Evaluation Criteria
- **Debugging approach**: How you identify and fix the bugs.
- **Reading comprehension**: Following the requirements for the search feature.
- **Incremental commits**: We value clean, atomic commits rather than one giant "fix everything" commit.
- **Code quality**: Even though the starter code is messy, your additions should be clean and follow modern TypeScript best practices.

## Setup
```bash
npm install
npx vitest run
```
