import { useMoralisSolanaApi, useMoralisSolanaCall  } from "react-moralis";

const TestSolAPI = () => {
    const { account } = useMoralisSolanaApi();

  let options  = {
      network: "mainnet",
      address: "4mkNvUq24DN9g8EWuJWkc176t9PiRnRU4d3U8WuZ1TC1"
  } as const;

  const { fetch, data, isLoading } = useMoralisSolanaCall(
      account.balance, 
      options
      );
}


//export default (TestSolAPI);