import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch() {
  const [word, setWord] = useState('');
  const navigate = useNavigate();
  const [isButtonRed, setIsButtonRed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() !== '') {
      navigate(`/Definition/${word}`);
    } else {
      setIsButtonRed(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="p-2 text-base border border-gray-300 rounded outline-none w-80 md:w-96"
          type="text"
          placeholder="Enter a word..."
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            setIsButtonRed(false);
          }}
        />
        <button
          type="submit"
          className={`mt-2 p-2 text-white rounded cursor-pointer transition duration-300 ${
            isButtonRed ? 'bg-red-500' : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          Search
        </button>
      </form>
    </div>
  );
}

