
# Vue-Sonner Issue Reproduction

This repository contains code to reproduce the vue-sonner issue as described in [issue #89](https://github.com/xiaoluoboding/vue-sonner/issues/89).

## Prerequisites

Ensure you have the following installed:
- Node.js and Yarn
- PHP
- Composer

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```bash
   composer install
   yarn install
   ```
   
3. **Run the development servers:**

   Open two terminal windows or tabs and run the following commands:

   - In the first terminal, run the Laravel server:

     ```bash
     php artisan serve --port=8888
     ```

   - In the second terminal, run the Vite development server:

     ```bash
     yarn run dev
     ```

4. **Access the application:**

   Open your browser and navigate to [http://localhost:8888](http://localhost:8888) to see the issue reproduction.

