'use client';

import { useMemo, useState } from 'react';

const JUNK_FOODS = [
  'chips',
  'candy',
  'soda',
  'burger',
  'fries',
  'pizza',
  'donut',
  'ice cream',
  'chocolate bar',
  'fried chicken'
];

function normalizeFoodName(value) {
  return value.trim().toLowerCase();
}

export default function Home() {
  const [foodInput, setFoodInput] = useState('');
  const [checkedFood, setCheckedFood] = useState('');

  const result = useMemo(() => {
    if (!checkedFood) {
      return null;
    }

    if (JUNK_FOODS.includes(checkedFood)) {
      return {
        kind: 'junk',
        message: 'Yes, this is usually considered junk food.'
      };
    }

    return {
      kind: 'not-junk',
      message: 'No, this is not in our junk food list.'
    };
  }, [checkedFood]);

  function handleSubmit(event) {
    event.preventDefault();
    setCheckedFood(normalizeFoodName(foodInput));
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="text-3xl font-bold text-slate-900">Junk or no</h1>
        <p className="mt-3 text-slate-600">
          Type a food name and we will tell you if it is junk food based on our beginner-friendly
          starter list.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label htmlFor="food" className="block text-sm font-medium">
            Food item
          </label>
          <input
            id="food"
            type="text"
            placeholder="Example: Chips"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-indigo-500 focus:ring-2"
            value={foodInput}
            onChange={(event) => setFoodInput(event.target.value)}
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Check food
          </button>
        </form>

        {result && (
          <div
            className={`mt-6 rounded-lg p-4 ${
              result.kind === 'junk' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
            }`}
          >
            <p className="font-semibold">Result for "{checkedFood}":</p>
            <p>{result.message}</p>
          </div>
        )}

        <div className="mt-8 rounded-lg bg-slate-50 p-4">
          <h2 className="text-lg font-semibold">Junk food list used in this app</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
            {JUNK_FOODS.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
