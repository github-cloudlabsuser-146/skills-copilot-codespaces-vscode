import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';


const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;


const reverseSentence = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedSentence = reversedWords.join(' ');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    return capitalizedSentence;
};

const sentence = 'reverse a sentence';
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence); // Output: "Esrever A Ecnetnes"


const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']
