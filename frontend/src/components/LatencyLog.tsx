import { For, type Component } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";

// 1. Define the shape of a single ping result
export interface PingResult {
  timestamp: string;
  latency: number;
  status: 'Online' | 'string' | 'Error';
}

interface LatencyLogProps {
  history: PingResult[];
}

const LatencyLog: Component<LatencyLogProps> = (props) => {
  return (
    <Card class="w-full bg-zinc-900 border-zinc-800 shadow-xl">
      <CardHeader class="border-b border-zinc-800 pb-4">
        <CardTitle class="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Latency History
        </CardTitle>
      </CardHeader>
      
      <CardContent class="p-0">
        {/* 2. The Scrollable Container */}
        <div class="max-h-[300px] overflow-y-auto custom-scrollbar">
          <Table>
            <TableHead class="bg-zinc-900/50 text-zinc-500">
              <TableRow class="hover:bg-transparent border-zinc-800">
                <TableHead class="w-[140px] border-none">Time</TableHead>
                <TableHead class="border-none">Latency</TableHead>
                <TableHead class="text-right border-none">Status</TableHead>
              </TableRow>
            </TableHead>
            
            <TableBody>
              <For each={props.history}>
                {(entry) => (
                  <TableRow class="border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                    <TableCell class="text-zinc-400 font-mono text-xs">
                      {entry.timestamp}
                    </TableCell>
                    <TableCell class="text-zinc-100 font-medium">
                      {entry.latency.toFixed(2)} <span class="text-[10px] text-zinc-500 ml-1">ms</span>
                    </TableCell>
                    <TableCell class="text-right">
                      <span class={`text-xs px-2 py-0.5 rounded-full border ${
                        entry.status === 'Online' 
                          ? 'text-green-400 border-green-400/20 bg-green-400/5' 
                          : 'text-red-400 border-red-400/20 bg-red-400/5'
                      }`}>
                        {entry.status}
                      </span>
                    </TableCell>
                  </TableRow>
                )}
              </For>
              
              {/* 3. Empty State */}
              {props.history.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} class="text-center py-8 text-zinc-500 text-sm italic">
                    No pings recorded yet. Click "Test API" to begin.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LatencyLog;