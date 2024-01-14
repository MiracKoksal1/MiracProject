import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Second />
      <Third />
    </div>
  );
}

const Second = () => <h1>Talimatlar</h1>;
const Third = () => {
  return (
    <p>
      Burada App.js bölümünde React-ify yapmanız istenmektedir. En az{" "}
      <strong>iki</strong> component kullanın. CSS bölümü hakkında
      endişelenmeyin. İşiniz bittiğinde, beyaz arka plana sahip işlenmiş görünüm
      aynı olmalıdır.
    </p>
  );
};
