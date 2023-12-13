//ALL: Desong Li
import { useRef, useEffect } from "react";
interface OscilloscopeProps {
  histogram: Uint8Array;
}
function Oscilloscope_fft({ histogram }: OscilloscopeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // re render when the input values (histogram) changed.
  useEffect(() => {
    // create a new canvas for drawing the oscilloscope.
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 5;
    context.beginPath();

    // fill the canvas
    const barWidth = canvas.width / histogram.length;
    let x = 0;
    for (const value of histogram) {
      const barHeight = (value / 256) * canvas.height;
      context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth;
    }
    context.strokeStyle = "blue";
    context.stroke();
  }, [histogram, canvasRef]);

  return (
    <div className="my-container h-[15rem] w-[20rem] flex flex-col">
      <span className="title">OSCILLOSCOPE FFT</span>
      <div style={{ backgroundColor: "white", width: 300, height: 600 }}>
        <canvas ref={canvasRef} width={300} height={180} />
      </div>
    </div>
  );
}

export default Oscilloscope_fft;
