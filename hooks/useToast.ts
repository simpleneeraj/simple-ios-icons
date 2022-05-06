import * as React from "react";
import * as Redux from "react-redux";
import * as toast from "store/slice/toast";
import { ToastValue } from "typings";


const useToast = () => {
  const update = Redux.useDispatch();

  // #_TOAST_VALUE
  const isToast = Redux.useSelector(
    (state: Redux.RootStateOrAny) => state.toast.isToast
  );
  // #_TOAST_HANDLER
  const ToastHandler = React.useCallback((value: ToastValue) => {
    update(toast.openToast(value));
  }, []);

  return { ToastHandler, isToast };
};
export default useToast;
