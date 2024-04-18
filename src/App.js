import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          This React project was coded by <a href="/">Verity Masters</a>, is
          open-sourced on <a href="/">Github </a>and is hosted on{" "}
          <a href="/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
