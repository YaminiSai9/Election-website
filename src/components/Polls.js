// src/components/Polls.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Polls = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchPolls = async () => {
            try {
                const response = await axios.get('http://localhost:5001/elections/polls');
                setPolls(response.data);
            } catch (error) {
                console.error('Error fetching polls:', error);
            }
        };

        fetchPolls();
    }, []);

    return (
        <div>
            <h1>Polls</h1>
            <ul>
                {polls.map(poll => (
                    <li key={poll.id}>
                        <strong>{poll.question}</strong>
                        <ul>
                            {poll.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Polls;


