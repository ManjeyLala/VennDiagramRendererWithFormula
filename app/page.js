"use client";

export default function Home() {


  return (
    <>
      <main className="max-w-[1000px] w-full mx-auto p-4 h-screen items-center justify-center gap-5 hidden lg:flex flex-row">
        <script defer type="text/javascript" src="/js/main.js"></script>
        <script defer type="text/javascript" src="/js/mcCluskyMethod.js"></script>
        <div id="container">
          <form name="form1">
            <div className="container">
              <div className="content css-content">
                <div className='options flex flex-row gap-2 mb-4 '>
                  <select className=" rounded-xl p-4 bg-gray-100 border-2 border-gray-500 " id='nEvents' onChange={() => updateN() && renderVenn()}>
                    <option id='2' value={2}>2</option>
                    <option id='3' value={3}>3</option>
                  </select><br />
                  <input placeholder="Enter your formula" className=" w-full rounded-xl p-4 bg-gray-100 border-2 border-gray-500 " defaultValue={`(A'u(BnC'))'`} id="inputExpression"></input>
                  <button type="button" className=" rounded-xl p-4 bg-blue-500 text-white " onClick={() => simplifyAndDrawExpression()} value="calculate">Calculate</button>
                </div>

              </div>
            </div>
            <div className='container overflow-hidden '>
              <div className='content'>
                <canvas className="border-0" id="venn" width="500" height="500">
                </canvas>
                <div dangerouslySetInnerHTML={{
                  __html: `<script>
                document.getElementById("venn").addEventListener("mousedown", function (e) {
                  getMousePosition(document.getElementById("venn"), e)
                });
              </script>` }} />
              </div>
            </div>
            <div className="container">
              <input type="checkbox" onChange={() => null} checked={true} id="headerOutput" className="css-checkbox hidden" />
              <label htmlFor="headerOutput" className="css-label hidden">Output</label>
              <div className="content rounded-xl p-4 bg-gray-100 border-2 border-gray-500 mt-4 h-16 flex flex-row gap-2">
                <p>Simplified Formula:</p>
                <div className='results ' id='displaySetNotation'></div>
              </div>
            </div>

          </form>
        </div >
        <div className=" w-full h-full flex px-8 py-12 flex-col">
          <h1 className="text-2xl font-semibold">How to use</h1>
          <ol className="list-decimal">
            <li>Enter the formula using</li>
            <li>Union: u</li>
            <li>Intersection: n</li>
            <li>{`Negation: '`}</li>
            <li>Difference: -</li>
            <li>{`For example: AnC' or (AuB)nC `}</li>
          </ol>
          <p className=" mt-4 ">Click on the regions to fill them and generate the formula</p>
        </div>
      </main >
      <main className="flex lg:hidden items-center justify-center gap-5 w-screen h-screen">
        <h1 className="text-md font-semibold">This page is not available on mobile devices</h1>
      </main>
    </>
  );
}
