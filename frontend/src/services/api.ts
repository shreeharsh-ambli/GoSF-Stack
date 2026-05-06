export interface PingResponse {
  latency: number;
  status: 'Online' | 'Error';
}

export async function fetchPing(): Promise<PingResponse> {
  const start = performance.now();
  
  try {
    const response = await fetch('http://localhost:8080/ping');
    
    if (!response.ok) throw new Error('Backend Error');

    const end = performance.now();
    return {
      latency: end - start,
      status: 'Online'
    };
  } catch (error) {
    return {
      latency: 0,
      status: 'Error'
    };
  }
}