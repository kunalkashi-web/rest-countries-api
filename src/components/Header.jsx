import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-Slice";
import blackMoonIcon from "../assets/moon-regular.svg";
import whiteMoonIcon from "../assets/moon-solid.svg";

export default function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui.theme);

  const handleThemeChange = () => {
    dispatch(uiActions.toggleTheme());
  };
  return (
    <header className={state ? "dark-mode-header" : "header"}>
      <h1>Where in the world?</h1>

      <div className="dark-mode">
        <img
          className="dark-mode-icon"
          src={state ? whiteMoonIcon : blackMoonIcon}
          alt="image of moon"
        />
        <button
          onClick={handleThemeChange}
          className={state ? "dark-mode-btn" : "theme-btn"}
        >
          Dark Mode
        </button>
      </div>
    </header>
  );
}
