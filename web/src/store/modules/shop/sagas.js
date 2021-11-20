import { takeLatest, all, call, put, select } from "redux-saga/effects";
import types from "./types";
import api from "../../../services/api";
import { setPizzarias, setPizzaria } from "./actions";
import Swal from "sweetalert2";

export function* requestPizzarias() {
  const response = yield call(api.get, "/pizzarias");
  const { pizzarias } = response.data;
  yield put(setPizzarias(pizzarias));
}

export function* requestPizzaria(payload) {
  const response = yield call(api.get, `/pizzarias/${payload.id}`);
  const { pizzaria } = response.data;
  yield put(setPizzaria(pizzaria));
}

export function* makePurchase() {
  const { transaction } = yield select((state) => state.shop);
  const response = yield call(api.post, "/purchase", transaction);
  const res = response.data;

  if (res.error) {
    Swal.fire({
      icon: "error",
      title: "Oopsss...",
      text: res.message,
    });

    return false;
  }

  if (res.data.status !== "paid") {
    Swal.fire({
      icon: "error",
      title: "Oopsss...",
      text: res.data.refuse_reason,
    });

    return false;
  }

  Swal.fire({
    icon: "success",
    title: "Tudo Certo!",
    text: "Sua compra foi aprovada com sucesso",
  });
}

export default all([
  takeLatest(types.REQUEST_PIZZARIAS, requestPizzarias),
  takeLatest(types.REQUEST_PIZZARIA, requestPizzaria),
  takeLatest(types.MAKE_PURCHASE, makePurchase),
]);
