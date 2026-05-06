import { createSignal, type Component } from "solid-js";
import { Button } from "./ui/button";

// 1. Define the Activity Icon as a self-contained SVG component
const ActivityIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    class="opacity-80"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

// 2. Define the Spinner Icon as a self-contained SVG component
const SpinnerIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
  >
    <path 
      class="animate-spin" 
      d="M21 12a9 9 0 1 1-6.219-8.56" 
    />
  </svg>
);

interface PingButtonProps {
  onPing: () => Promise<void>;
}

const PingButton: Component<PingButtonProps> = (props) => {
  const [isLoading, setIsLoading] = createSignal(false);

  const handleClick = async () => {
    if (isLoading()) return;

    setIsLoading(true);
    try {
      await props.onPing();
    } catch (error) {
      console.error("Ping failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading()}
      class="relative w-full py-6 text-lg font-semibold transition-all active:scale-95 
                 bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]
                 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <div class="flex items-center justify-center gap-2">
        {isLoading() ? (
          <SpinnerIcon />
        ) : (
          <ActivityIcon />
        )}

        <span>
          {isLoading() ? 'Testing Latency...' : 'Test API Latency'}
        </span>
      </div>
    </Button>
  );
};

export default PingButton;