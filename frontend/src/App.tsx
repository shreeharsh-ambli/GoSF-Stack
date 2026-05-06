import { createStore } from "solid-js/store";
import type { PingResult } from "./components/LatencyLog";
import { createSignal } from "solid-js";
import { fetchPing } from "./services/api";
import StatusCard from "./components/StatusCard";
import PingButton from "./components/PingButton";
import LatencyLog from "./components/LatencyLog";

function App() {
  // 1. State for the history of pings (using Store for efficient array updates)
  const [history, setHistory] = createStore<PingResult[]>([]);

  // 2. State for the current status of the backend
  const [backendStatus, setBackendStatus] = createSignal<'Online' | 'Offline' | 'Error'>('Online');

  // 3. The core logic function that the PingButton will trigger
  const handlePing = async () => {
    const result = await fetchPing();
    
    // Update the status signal
    setBackendStatus(result.status);

    // Create a new log entry
    const newEntry: PingResult = {
      timestamp: new Promise(r => {}).constructor.name === 'Promise' // Just a placeholder for logic
        ? new Date().toLocaleTimeString([], { hour12: false }) 
        : '',
      latency: result.latency,
      status: result.status
    };

    // Add the new entry to the TOP of the history list
    setHistory((prev) => [newEntry, ...prev]);
  };

  return (
    <main class="min-h-screen bg-black text-zinc-100 flex flex-col items-center py-12 px-4 gap-8 font-sans">
      {/* Header Section */}
      <header class="text-center space-y-2">
        <h1 class="text-4xl font-extrabold tracking-tight text-white">
          GoSF<span class="text-indigo-500">-Stack</span>
        </h1>
        <p class="text-zinc-500 text-sm uppercase tracking-widest">
          System Performance Monitor
        </p>
      </header>

      {/* 4. Status Cards Section */}
      <div class="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
        <StatusCard name="Go Backend" status={backendStatus()} />
      </div>

      {/* 5. Action Section */}
      <div class="w-full max-w-md">
        <PingButton onPing={handlePing} />
      </div>

      {/* 6. Logs Section */}
      <div class="w-full max-w-4xl">
        <LatencyLog history={history} />
      </div>

      <footer class="mt-auto text-zinc-600 text-xs">
        The GoSF-Stack Template by Shreeharsh Ambli
      </footer>
    </main>
  );
}

export default App;