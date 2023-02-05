import "./App.css";

function App() {
  return (
    <div className="container">
      <div style={box}>
        <h2>Form</h2>
        <input style={input} type="text" placeholder="Name" />
        <input style={input} type="text" placeholder="Email" />
        <input style={input} type="text" placeholder="Phone" />
        <input style={input} type="text" placeholder="Password" />
      </div>
    </div>
  );
}

export default App;

const box: React.CSSProperties = {
  flexDirection: "column",
  display: "flex",
};
const input: React.CSSProperties = {
  margin: "5px 0",
  width: "50%",
  alignSelf: "center",
};
