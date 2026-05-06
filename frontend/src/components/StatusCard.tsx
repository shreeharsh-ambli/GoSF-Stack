import type { Component } from 'solid-js';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface StatusCardProps {
  name: string;
  status: 'Online' | 'Offline' | 'Error';
}

const StatusCard: Component<StatusCardProps> = (props) => {
  // Map status to Tailwind color classes
  const statusStyles = {
    Online: 'bg-green-500/10 text-green-400 border-green-500/20',
    Offline: 'bg-red-500/10 text-red-400 border-red-500/20',
    Error: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <Card class="w-full max-w-[300px] bg-zinc-900 border-zinc-800 shadow-xl">
      <CardContent class="p-4 flex items-center justify-between">
        <span class="text-sm font-medium text-zinc-100">
          {props.name}
        </span>
        
        <Badge 
          variant="outline" 
          class={`${statusStyles[props.status]} px-2 py-0.5 border flex items-center gap-1.5`}
        >
          {/* The status dot */}
          <span class="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
          {props.status}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default StatusCard;