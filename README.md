# Junk or no

A beginner-friendly Next.js + Tailwind CSS app that checks whether a food item is junk food.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How it works

- Type a food item in the input box.
- Click **Check food**.
- The app checks if the item exists in the built-in `JUNK_FOODS` list.
- It then shows whether the item is junk food or not.

## Ideas for beginners

- Add more foods to `JUNK_FOODS` in `app/page.js`.
- Make the check smarter (for example, accept plural forms).
- Save previous searches in a list below the result.
