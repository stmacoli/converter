import React, { useState } from "react";
import Select from "./components/Select";
import Label from "./components/Label";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("BRL");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchExchangeRate = async (from, to) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://economia.awesomeapi.com.br/json/last/${from}-${to}`
            );
            const data = await response.json();

            // Pega a taxa de câmbio (bid) do JSON retornado
            const rateKey = `${from}${to}`;
            const rate = parseFloat(data[rateKey]?.bid);

            setLoading(false);
            return rate;
        } catch (error) {
            console.error("Erro ao buscar as taxas de câmbio:", error);
            setLoading(false);
            return null;
        }
    };

    const convert = async () => {
        const value = parseFloat(amount);

        if (isNaN(value) || value <= 0) {
            setResult("Por favor, insira um valor válido.");
            return;
        }

        const rate = await fetchExchangeRate(fromCurrency, toCurrency);
        if (!rate) {
            setResult("Conversão não disponível.");
            return;
        }

        const convertedAmount = (value * rate).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    };

    const selectOptions = [{ value: 'USD', label: 'Dólar (USD)' }, { value: 'EUR', label: 'Euro (EUR)' }, { value: 'BRL', label: 'Real (BRL)' }]

    return (
        <div className="text-center text-2xl font-bold bg-white p-16 rounded-lg shadow-lg max-w-lg mx-4 sm:mx-auto md:mx-auto lg:mx-auto flex flex-col mt-22 mb-23 sm:mt-150 sm:mb-15 md:mt-61 md:mb-63 lg:mt-84 lg:mb-85 2xl:mb-14 2xl:mt-13">

            <Label htmlFor="amount">
                Valor
            </Label>
            <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Digite o valor"
                className="w-full px-4 py-2 mb-4 border border-sky-500 rounded-lg"
            />
            <Label htmlFor="fromCurrency" >
                De
            </Label>
            <Select id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                options={selectOptions} />

            <Label htmlFor="toCurrency" >
                Para
            </Label>
            <Select id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                options={selectOptions.reverse()} />

            <button
                onClick={convert}
                className="w-full px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-700 hover:from-sky-400 hover:to-sky-400 text-white font-semibold rounded-lg "
            >
                Converter
            </button>

            {loading && <div className="mt-4 text-gray-500"> <p>Carregando...</p></div>}
                

            {result && (
                <div className="mt-6 text-lg font-bold text-gray-800"><p>{result}</p></div>
            )}
        </div>
    );
};

export default CurrencyConverter;
