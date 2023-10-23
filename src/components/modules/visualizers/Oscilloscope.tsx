import { useRef, useEffect } from "react";

interface OscilloscopeProps{
  waveform: Uint8Array;
}
function Oscilloscope({ waveform }: OscilloscopeProps) {
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

    const sliceWidth = canvas.width / waveform.length;
    let x = 0;
    for (const value of waveform) {
      const y = (1 - value / 256) * canvas.height;
      context.lineTo(x, y);
      x += sliceWidth;
    }

    context.stroke();
  }, [waveform]);

  return(
    <div className="my-container h-[15rem] w-[30rem] flex flex-col">
    <span className="title">OSCILLOSCOPE</span>
    <div style={{backgroundColor:'white', width: 450, height: 600}}>
      <canvas ref={canvasRef} width={450} height={180} />
    </div>
  </div>
  )


  return 
}

export default Oscilloscope;
