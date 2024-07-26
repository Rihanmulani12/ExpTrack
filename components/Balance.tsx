import getUserBalance from "@/app/actions/getBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {

    const { balance } =  await getUserBalance();
    return ( 
        <>
        <h4>Your Balance</h4>
        <h1>&#8377;{addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
        </>
     );
}
 
export default Balance;