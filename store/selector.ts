import { RootState } from "typings/store";
import { createDraftSafeSelector as actor } from "@reduxjs/toolkit";

const rootState = (state: RootState) => state;

const _searchSelector = ((state: RootState) => state.search)

export const searchSelector = actor(rootState, _searchSelector)
