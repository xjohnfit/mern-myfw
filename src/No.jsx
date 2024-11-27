import { useState } from "react";
import Yes from './Yes.jsx';

const No = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "What if I asked really nice?",
            "Pretty please",
            "With a chocolate chip pancake?",
            "What about a bear hug?",
            "PLEASE PLEASE PLEASE",
            "What about Cape Cod trips together and some Marylou\s Coffee?",
            "I'll workout with you",
            "I'll cook for you",
            "Ok, guess you have to say YES",
            "I'll give you a massage",
            "My forever woman",
            "PRETTY PLEASE",
            "This is just gonna keep getting bigger",
            "I need a YES",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <>
            {
                yesPressed ? (<Yes />) : (
                    <>
                        <img
                            className="h-[200px] flex mx-auto"
                            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                        />
                        <h1 className="my-4 text-4xl text-center">Will you be my forever woman?</h1>
                        <div className="flex items-center justify-center overflow-hidden">
                            <button
                                className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                                style={{ fontSize: yesButtonSize }}
                                onClick={() => setYesPressed(true)}
                            >
                                Yes
                            </button>
                            <button
                                onClick={handleNoClick}
                                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                            >
                                {noCount === 0 ? "No" : getNoButtonText()}
                            </button>
                        </div>
                    </>
                )

            }
        </>
    );
};
export default No;