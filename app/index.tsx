import IconGrid from "./iconGrid";
import css from "css/Main.module.scss";
import Toast from "components/toast";

const App = () => {
  return (
    <div className={css.Container}>
      <div className={css.Main}>
        <IconGrid />
        <Toast />
      </div>
    </div>
  );
};

export default App;
