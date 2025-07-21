export default function Home() {
  return (
    <div>
      <h1>API Tester</h1>
      <p>
        Use /api/status/[code]/[anything] to get the requested HTTP status code.
        Use /api/timeOut/[ms] to get a response after miliseconds
      </p>
    </div>
  );
}
