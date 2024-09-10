import { useState } from "react";

const quotes = [
    'You think it’s expensive to hire a professional to do the job, wait until you hire an amateur.',
    'Excellence has life in it - it has colors in it - it has sweetness in it - whereas professionalism is a dead corpse exuding the disgusting smell of obedience.',
    'Being a professional is doing the things you love to do, on the days you don’t feel like doing them.',
    'In business, ‘professionalism’ is not a tactic but a moral value.',
    'A professional headshot peeking though a bookshelf says you’re probably under a restraining order.',
    'If you want to be a true professional, do something outside yourself.'
]

// function fontGenerator(){
//     return(
//         <>
//         </>
//     );
// }

export default function QuotesGenerator(){
    const [index, setIndex] = useState(0);
    const buttonStyle = {
        padding: "0.9%",
        color: "white",
        backgroundColor: "blueviolet",
        cursor: "pointer",
        marigin: "0.9%"
    }

    const next = () => {setIndex((index + 1) % quotes.length);}
    return(
        <>
            <i>{quotes[index]}</i>
            <br></br>
           <button style={buttonStyle} onClick={next}>Get Inspired</button>
        </>
    );
}