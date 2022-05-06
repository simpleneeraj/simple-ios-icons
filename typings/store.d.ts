import store from "store"
/**************************
 ROOT STATE TYPE
 ***************************/
type RootState = ReturnType<typeof store.getState>
// type RootState = ReturnType<typeof store.getState>

/**************************
 ACTION TYPE
***************************/
interface ActionType {
    type: string;
    payload: any;
    [key?: string]: any
}
