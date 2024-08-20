import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/elections/results')
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error('Error fetching results:', error);
            });
    }, []);

    return (
        <div>
            <h2>Poll Results</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        {result.question}: {result.outcome}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
