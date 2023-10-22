import { useRef, useEffect } from "react";

type WaveVisualizer = {
  waveform: Uint8Array;
};
function WaveVisualizer({ waveform }: WaveVisualizer) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "blue"; // Set the waveform color
    context.lineWidth = 2;
    context.beginPath();

    const sliceWidth = (canvas.width * 1.0) / waveform.length;
    let x = 0;
    console.log(canvas.height);
    for (const value of waveform) {
      const y = (1 - value / 64) * canvas.height;
      context.lineTo(x, y);
      x += sliceWidth;
    }

    context.stroke();
  }, [waveform]);

  return <canvas ref={canvasRef} width={800} height={200} />;
}

export default WaveVisualizer;
