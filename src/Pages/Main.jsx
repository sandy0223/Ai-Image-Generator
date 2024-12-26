import React, { useState } from "react";
import ai from "../images/gojo.jpeg";

function MAin() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [url, setUrl] = useState("/");
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomSeed = () => {
    return Math.floor(Math.random() * 9000000) + 1000000;
  };

 


  const handleClick = async () => {
    setIsLoading(true);
    setOutput("");
    try {
      const randomSeed = generateRandomSeed();
      
      const response = await fetch("https://api.segmind.com/v1/fast-flux-schnell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY, 
        },
        body: JSON.stringify({
          prompt,
          steps: 4,
          seed: randomSeed,
          aspect_ratio: "1:1",
          base64: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      setUrl(imageUrl);

      setIsLoading(false);
      setOutput(<img src={imageUrl} alt="Generated" className="w-full border-2 mt-[20px]" />);
    } catch (error) {
      console.error("Error generating image:", error);
      setIsLoading(false);
      setOutput("Failed to generate image. Check the console for details.");
    }
  };

  return (
    <div>
      <div className="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center">
        <div className="shadow-xl shadow-gray-600">
          <div className="w-[85vw] h-[55vh] md:w-[50vh] rounded-xl border-2 border-black">
            {
              isLoading ? (
                <h1 className="text-white text-center mt-20">Generating...</h1>
              ) : (
                <img
                  className="bg-cover w-full h-full bg-center"
                  src={url === "/" ? ai : url}
                  alt="Generated Output"
                />
              )
            }
          </div>
        </div>
        <div className="m-16">
          <input
            type="text"
            placeholder="Imagine 🧙‍♂"
            onChange={(e) => setPrompt(e.target.value)}
            className="placeholder:uppercase placeholder:text-slate-700 p-4 m-2 w-96 rounded-2xl bg-slate-300 text-sm"
          />
          <button
            onClick={handleClick}
            className="p-4 hover:bg-green-300 transition-all text-center font-semibold bg-purple-500 rounded-xl"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MAin;
