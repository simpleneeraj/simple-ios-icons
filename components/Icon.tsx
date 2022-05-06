// @next/next/no-img-element
import { batch } from "react-redux";
import css from "css/Grid.module.scss";
import useIcons from "hooks/useIcons";
import useToast from "hooks/useToast";

const Icon = ({ data }: any) => {
  const { ToastHandler } = useToast();
  const { HandIconName } = useIcons();

  const Hand = () => {
    batch(() => {
      HandIconName(data);
      ToastHandler(true);
    });
  };
  return (
    <picture onClick={Hand} className={css.Card}>
      <div title={data.name} className={css.Image}>
        <img src={data.iconPath} loading="lazy" alt={data.name} />
      </div>
    </picture>
  );
};

export default Icon;
