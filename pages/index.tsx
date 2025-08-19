export default function Home() {
  return (
    <div>
      <h1>API Tester</h1>
      <p>
        Use /api/status/[code]/[anything] to get the requested HTTP status code.
      </p>
      <p>Use /api/timeOut/[ms] to get a response after miliseconds.</p>
      <p>Use /api/download-pdf/[anything] to get pdf with 2 imgs to return.</p>
    </div>
  );
}
