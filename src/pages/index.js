export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center text-center">
      <h1 className="text-5xl font-bold text-center mb-5">Coming Soon</h1>
      <p>
        OSIC Is working with MALTA,USA,UK,ROMANIA,HUNGARY With Europe and
       <br/> English Speaking Country.
      </p>
      <div className="mt-12">
        <input
          type="email"
          placeholder="Enter your Email"
          className="input input-bordered rounded-r-none focus:outline-orange-500 focus:shadow-md border-orange-400 w-full max-w-xs"
        />
        <button className="bg-orange-400 text-base-100 py-3 px-6 rounded-r-md hover:bg-orange-500">
          Button
        </button>
      </div>
      {/* start comdown */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </main>
  );
}
