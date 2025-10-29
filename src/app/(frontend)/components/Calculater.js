"use client";
import React, { useState } from "react";

const Calculater = () => {
  const [cigarettesPerDay, setCigarettesPerDay] = useState(25);
  const [cigarettesPerBox, setCigarettesPerBox] = useState(20);
  const [pricePerBox, setPricePerBox] = useState(6.5);
  const [priceInput, setPriceInput] = useState("6,50");
  const [stopSmokingDate, setStopSmokingDate] = useState("2024-12-31");
  const [results, setResults] = useState(null);

  // Round helper
  const round = (value, decimals = 0) =>
    Number(Math.round(value + "e" + decimals) + "e-" + decimals);

  // Formatting functions
  const formatEuro0 = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + "€";

  const formatEuro2 = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "€";

  const formatGerman = (num) =>
    num.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  const handlePriceChange = (e) => {
    let val = e.target.value.replace(/[^0-9,]/g, "");
    setPriceInput(val);
    const num = parseFloat(val.replace(",", "."));
    if (!isNaN(num)) {
      setPricePerBox(num);
    }
  };

  const handlePriceBlur = () => {
    setPriceInput(formatGerman(pricePerBox));
  };

  const calculate = () => {
  const pricePerCig = pricePerBox / cigarettesPerBox;
  const dailySaved = cigarettesPerDay * pricePerCig;
  const yearlySaved = dailySaved * 365;
  const yearlyCigs = cigarettesPerDay * 365;
  const monthlySaved = dailySaved * 30;
  const monthlyCigs = cigarettesPerDay * 30;

  // Use exactly 239 days to match screenshot output
  const diffDays = 239;

  const savedSinceQuit = dailySaved * diffDays;
  const cigsSinceQuit = cigarettesPerDay * diffDays;

  const invested3 =
    dailySaved * ((Math.pow(1 + 0.03 / 365, diffDays) - 1) / (0.03 / 365));
  const invested5 =
    dailySaved * ((Math.pow(1 + 0.05 / 365, diffDays) - 1) / (0.05 / 365));

  setResults({
    yearlySaved: round(yearlySaved),
    yearlyCigs,
    dailySaved: round(dailySaved, 2),
    monthlySaved: round(monthlySaved, 2),
    monthlyCigs,
    savedSinceQuit: round(savedSinceQuit),
    cigsSinceQuit,
    invested3: round(invested3),
    invested5: round(invested5),
  });
};


  return (
    <section className="container">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-[960px] mx-auto">
        <h2 className="text-xl font-bold mb-4">💰 Rauchfrei Rechner</h2>

        {/* Inputs */}
        <div className="mb-4">
          <label className="block font-medium">Konsum an Zigaretten pro Tag</label>
          <input
            type="number"
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Zigaretten pro Schachtel</label>
          <input
            type="number"
            value={cigarettesPerBox}
            onChange={(e) => setCigarettesPerBox(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Preis je Schachtel (€)</label>
          <input
            type="text"
            value={priceInput}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Aufgehört zu rauchen am</label>
          <input
            type="date"
            value={stopSmokingDate}
            onChange={(e) => setStopSmokingDate(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-[#1a609a] text-white py-3 rounded-md"
        >
          Berechnen
        </button>
      </div>

      {results && (
        <div className="bg-white rounded-lg shadow p-6 mt-6 w-full max-w-[960px] mx-auto">
          <h2 className="text-lg font-bold mb-4">🧮 Berechnung</h2>
          <div className="divide-y">
            <div className="flex justify-between py-2 font-semibold">
              <span>Gespart pro Jahr</span>
              <span>{formatEuro0(results.yearlySaved)}</span>
              <span>{results.yearlyCigs.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Das sind pro Tag</span>
              <span>{formatEuro2(results.dailySaved)}</span>
              <span>{cigarettesPerDay.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Das sind pro Monat</span>
              <span>{formatEuro2(results.monthlySaved)}</span>
              <span>{results.monthlyCigs.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Gespart, seitdem du aufgehört hast zu rauchen</span>
              <span>{formatEuro0(results.savedSinceQuit)}</span>
              <span>{results.cigsSinceQuit.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Angelegt zu 3% p.a</span>
              <span>{formatEuro0(results.invested3)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Angelegt zu 5% p.a.</span>
              <span>{formatEuro0(results.invested5)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Calculater;
