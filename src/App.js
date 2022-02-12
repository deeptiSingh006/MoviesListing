import "./styles.css";
import Card from "./Card";
import data from "./data.js";
export default function App() {
  console.log("data:" + data[0].Title);

  return (
    <div className="App">
      {data.map((i) => {
        return (
          <div>
            <div>{i.Title}</div>
            <h3>{i.Plot}</h3>
          </div>
        );
      })}
      {data.map((i) => {
        return (
          <Card
            img={i.Images[0]}
            info={i.Plot}
            name={i.Title}
            link="https://www.youtube.com/watch?v=2yiTxPj0Jo0"
          />
        );
      })}
    </div>
  );
}
