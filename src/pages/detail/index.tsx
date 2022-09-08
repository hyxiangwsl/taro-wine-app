import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
// import { GuoNiang, XuFu } from "./components";

const PageView = () => {
  const router = useRouter();
  console.log(router.params); // 参数接收

  // const {path} = router.params;

  // if(path === Product.GUO_NIANG){
  //   return (
  //     <GuoNiang />
  //   );
  // }

  // if(path === Product.XU_FU){
  //   return (
  //     <XuFu />
  //   );
  // }

  // return (
  //   <GuoNiang />
  // );
  return <View>22</View>;
};

export default PageView;
