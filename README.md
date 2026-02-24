# 🚀 Coding Interview: Enquiry Management System

Welcome to the **Hurudzai AI** technical assessment! This project is a miniaturized version of an enquiry management system. It contains intentional bugs, sub-optimal code, and missing features to simulate a real-world "legacy" codebase that needs improvement.

---

## 🛠️ Step 1: Getting Started (Forking & Setup)

To begin the assessment, you must follow these steps to ensure your work is tracked correctly:

1.  **Fork this Repository**: Click the **Fork** button at the top-right of this GitHub page. This creates a copy of the project in your own GitHub account.
2.  **Clone Your Fork**: 
    ```bash
    git clone https://github.com/YOUR_USERNAME/interview-enquiry-system.git
    cd interview-enquiry-system
    ```
3.  **Create a New Branch**: 
    ```bash
    git checkout -b feature/interview-solution
    ```
4.  **Install Dependencies**:
    ```bash
    npm install
    ```
5.  **Run Initial Tests**:
    ```bash
    npx vitest run
    ```
    *(Expect 2 failing tests initially!)*

---

## 📋 Step 2: Technical Tasks

Your mission is divided into three parts. We recommend making **incremental commits** for each step.

### 1. Fix Failing Tests
Run the test suite and fix the underlying logic in `lib/enquiryManager.ts`:
- **Email Validation**: The current regex is overly restrictive and fails for valid formats like `user.name@domain.technology`.
- **Persistence**: The `createEnquiry` function fails to save new entries to the in-memory array.

### 2. Implement a New Feature
Add a new function `searchEnquiriesByEmail(email: string)` to the `EnquiryManager`:
- It must return an array of all enquiries matching the provided email.
- **Requirement**: Support partial matches (e.g., searching "jane" should find "jane@test.org").
- **Requirement**: Must be case-insensitive.

### 3. Verification & Testing
- Add at least one new test case in `tests/enquiry.test.ts` to verify your new search feature works as expected.
- Ensure **all** tests pass (`npx vitest run`).

---

## ❓ Step 3: Interview Questions
*After completing the code, please answer the following questions in a new file named `ANSWERS.md` or at the bottom of the README.*

1. **Architecture**: If we were to transition this from an in-memory array to a real database (like PostgreSQL or MongoDB), what changes would you make to the `EnquiryManager` architecture?
2. **Security**: What are some potential security risks in the current `createEnquiry` implementation?
3. **Refactoring**: Beyond the bugs you fixed, what is one major refactoring you would perform on `lib/enquiryManager.ts` to make it production-ready?

---

## 🎯 Evaluation Criteria

We aren't just looking for the right answer—we're looking at your process:
- **Git Hygiene**: Clear, descriptive commit messages.
- **Reading Comprehension**: Did you meet all the search feature requirements?
- **Code Quality**: Usage of modern TypeScript, clean logic, and avoiding `any` where possible.
- **Testing**: Do your tests cover edge cases?

---

## 📤 Submission

1. **Push your changes** to your fork:
   ```bash
   git push origin feature/interview-solution
   ```
2. **Create a Pull Request**: Submit a PR from your branch back to the `main` branch of *your fork*.
3. **Share the Link**: Send the link to your fork (or the PR link) back to your recruiter.

**Good luck! We are excited to see your solution.** 🚀
