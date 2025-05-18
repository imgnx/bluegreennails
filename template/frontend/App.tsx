import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendPrompt() {
    setLoading(true);
    try {
      // @ts-ignore: Wails global
      const result = await window.go.main.App.ChatWithOpenAI(input);
      setResponse(result);
    } catch (e) {
      setResponse("Error: " + e);
    }
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">OpenAI Chat (Wails + React)</h1>
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your prompt here..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={sendPrompt}
        disabled={loading || !input.trim()}
      >
        {loading ? "Sending..." : "Send"}
      </button>
      <div className="mt-4 whitespace-pre-wrap border rounded p-2 min-h-[4rem]">
        {response}
      </div>
    </div>
  );
}

export default App;
