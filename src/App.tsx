import './App.css'
import Chart from './components/Chart'
import data from './assets/data.json';

function App() {
  
  return (
    <main>
      <section className="grid gap-1 content-center margin-inline-auto">
        <article className="balance flex justify-between items-center w-full">
          <div>
              <p>My balance</p>
              <h1>$921.48</h1>
          </div>
          <div className="circle" />
        </article>
        <article className="chart-ctn w-full">
          <h1>Spending - last 7 days</h1>
          <Chart data={data} />
        </article>
      </section>
        <div className="credits">
          Challenge by <a href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Noor Ullah Al Noor</a>.
        </div>
    </main>
  )
}

export default App
