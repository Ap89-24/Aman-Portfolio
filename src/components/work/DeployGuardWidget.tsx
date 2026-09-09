import React, { useState, useEffect } from 'react';
import { Container, Activity } from 'lucide-react';

export const DeployGuardWidget: React.FC = () => {
  const [events, setEvents] = useState([
    { time: '15:24:01', type: 'POD_SCALED', text: 'k8s-pod-api-88f9 replica set scaled from 3 to 5' },
    { time: '15:24:04', type: 'HEALTH_CHECK', text: 'Ingress controller health check passed (200 OK)' },
    { time: '15:24:08', type: 'EVENT_BUS', text: 'Published DeploymentEvent[v2.4.1] to WebSocket stream' }
  ]);
  const [cpu, setCpu] = useState(34);
  const [mem, setMem] = useState(4.2);

  useEffect(() => {
    const mockEventsPool = [
      { time: '15:24:12', type: 'METRICS_SYNC', text: 'Cluster memory usage stabilized at 4.2GB / 8GB' },
      { time: '15:24:15', type: 'POD_READY', text: 'Container api-worker-04 state changed to Running' },
      { time: '15:24:18', type: 'EVENT_BUS', text: 'Ingress route updated for /v2/api endpoints' },
      { time: '15:24:22', type: 'K8S_WATCHER', text: 'Resource quota check passed across namespace default' }
    ];

    let idx = 0;
    const interval = setInterval(() => {
      const nextEvt = mockEventsPool[idx % mockEventsPool.length];
      setEvents((prev) => [nextEvt, ...prev.slice(0, 3)]);
      setCpu(Math.floor(Math.random() * 15 + 28));
      setMem(parseFloat((Math.random() * 0.4 + 4.1).toFixed(1)));
      idx++;
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-card p-6 border border-white/10 relative overflow-hidden bg-zinc-950/90 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Container className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs font-semibold text-zinc-200">KUBERNETES CLUSTER MONITOR</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span>CPU: <strong className="text-cyan-400">{cpu}%</strong></span>
          <span>MEM: <strong className="text-cyan-400">{mem} GB</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded bg-zinc-900/90 border border-emerald-500/30 text-center">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1 animate-pulse" />
          <span className="font-mono text-[11px] text-zinc-200 block font-semibold">k8s-pod-auth</span>
          <span className="font-mono text-[9px] text-emerald-400">RUNNING (100%)</span>
        </div>

        <div className="p-3 rounded bg-zinc-900/90 border border-cyan-500/30 text-center">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mx-auto mb-1 animate-pulse" />
          <span className="font-mono text-[11px] text-zinc-200 block font-semibold">k8s-pod-api</span>
          <span className="font-mono text-[9px] text-cyan-400">RUNNING (100%)</span>
        </div>

        <div className="p-3 rounded bg-zinc-900/90 border border-blue-500/30 text-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mx-auto mb-1 animate-pulse" />
          <span className="font-mono text-[11px] text-zinc-200 block font-semibold">k8s-pod-worker</span>
          <span className="font-mono text-[9px] text-blue-400">RUNNING (100%)</span>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10">
        <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/5 font-mono text-[11px]">
          <span className="text-zinc-400 font-bold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            LIVE EVENTBUS WEBSOCKET STREAM
          </span>
          <span className="text-cyan-400">WEBSOCKET: CONNECTED</span>
        </div>
        <div className="space-y-1 min-h-[95px]">
          {events.map((evt, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
              <span className="font-mono text-zinc-400">{evt.time}</span>
              <span className="font-mono text-blue-400 px-1.5 py-0.5 rounded bg-blue-500/10 text-[10px]">{evt.type}</span>
              <span className="text-zinc-300 truncate max-w-[220px]">{evt.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
