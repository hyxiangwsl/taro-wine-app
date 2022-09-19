import { Product } from "@/pages/brands/Product";
import { createSlice } from "@reduxjs/toolkit";
import Taro, { useRouter } from "@tarojs/taro";
import { mapEnum } from "./utile";

interface ProductCurr {
  name: string;
  current: number;
}

interface contextState {
  current: number; // 当前下标
  path: string; // 当前页面路径
  /** 不同产品的下标 */
  prodList: ProductCurr[];
}

const defaultState: contextState = {
  current: 0,
  path: "/pages/home/index",
  prodList: mapEnum(Product, (e: string) => ({
    current: 0,
    name: e
  }))
};

console.log("xxx", defaultState);

export const contextSlice = createSlice({
  name: "context",
  initialState: defaultState,
  reducers: {
    // 改变下标
    changeCurrent: (state, { payload }) => {
      if (payload && payload?.path) {
        // 如果是产品里面的话
        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.path
              ? { ...item, current: payload.current }
              : item
          )
        };
      }

      return {
        ...state,
        current: payload.current
      };
    },
    // 返回上一页(下标-1)
    preCurrent: (state, { payload }) => {
      console.log("走了吗prodList", state.prodList);
      if (payload && payload?.path) {
        // 如果是产品里面的话
        const temp = state.prodList.find(item => item.name === payload.path);
        if (temp && temp.current <= 0) {
          Taro.navigateBack();
          return { ...state, current: 2 };
        }

        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.path
              ? { ...item, current: item.current - 1 }
              : item
          )
        };
      }

      if (state.current <= 0) {
        Taro.navigateBack();
        return { ...state };
      }
      return {
        ...state,
        current: state.current - 1
      };
    },
    // 下一页
    doNext: (state, { payload }) => {
      console.log("走了吗", state.current);

      if (payload && payload?.path) {
        // 如果是产品里面的话
        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.path
              ? { ...item, current: item.current + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        current: state.current + 1
      };
    },
    // 清空下标
    clear: () => {
      return defaultState;
    }
  }
});
