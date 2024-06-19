import logo from "../logo.svg";

function FooterComponent() {
  return (
    <footer className="App-footer">
      <p>
        Made using React by{" "}
        <a href="https://github.com/sohamdasx">@sohamdasx</a>
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
  );
}

export default FooterComponent;
