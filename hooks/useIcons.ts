import { useCallback } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setIconName } from "store/slice/icon";
import { IconStateType } from "typings";

const useIcons = () => {
  const data: IconStateType = useSelector(
    (state: RootStateOrAny) => state.icon
  );
  const update = useDispatch();
  const HandIconName = useCallback(
    (value) => {
      update(setIconName(value));
    },
    [data.name]
  );

  return { HandIconName, data };
};
export default useIcons;
