import { Product } from "@/pages/brands/Product";
import { createSlice } from "@reduxjs/toolkit";
import { mapEnum } from "./utile";

interface ProductCurr {
  name: string;
  current: number;
}

interface contextState {
  current: number; // 当前下标
  path: string; // 当前页面路径
  currentProduct: string; // 当前产品
  /** 不同产品的下标 */
  prodList: ProductCurr[];
  isFirstLoad: boolean; // 是不是第一次加载
}

const defaultState: contextState = {
  current: 0,
  path: "/pages/index/index",
  currentProduct: "index",
  prodList: mapEnum(Product, (e: string) => ({
    current: 0,
    name: e
  })),
  isFirstLoad: true
};

// console.log("xxx", defaultState);

export const contextSlice = createSlice({
  name: "context",
  initialState: defaultState,
  reducers: {
    // 改变下标
    changeCurrent: (state, { payload }) => {
      if (payload && payload?.product && payload?.product !== "index") {
        // 如果是产品里面的话
        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.product
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
    // 下一页
    doNext: (state, { payload }) => {
      // console.log("走了吗", state.current);

      if (payload && payload?.product && payload?.product !== "index") {
        // 如果是产品里面的话
        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.product
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
    // 设置下标为0
    setCurrentInit: (state, { payload }) => {
      if (payload && payload?.product && payload?.product !== "index") {
        // 如果是产品里面的话
        return {
          ...state,
          prodList: state.prodList.map(item =>
            item.name === payload.product ? { ...item, current: 0 } : item
          )
        };
      }

      return {
        ...state,
        current: state.current - 1
      };
    },
    // 设置产品
    setCurrentProduct: (state, { payload }) => {
      return {
        ...state,
        currentProduct: payload.product
      };
    },
    // 改变是否第一次加载
    changeFirstLoad: (state, { payload }) => {
      return {
        ...state,
        isFirstLoad: payload.isLoad
      };
    },
    // 清空下标
    clear: () => {
      return defaultState;
    }
  }
});
