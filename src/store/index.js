import { proxy } from "valtio";

const state = proxy({
  isLeftKeyDown: false,
});

export default state;