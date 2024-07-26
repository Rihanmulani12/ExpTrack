import getIncomeExp from "@/app/actions/getIncomeExp";
import { addCommas } from "@/lib/utils";
const IncomeExp = async() => {

    const { income, expense } = await getIncomeExp();
    return ( 

        
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
            <p  id="money-plus" className="money plus"> &#8377;{addCommas(Number(income?.toFixed(2)))}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus"> &#8377;{addCommas(Number(expense?.toFixed(2)))}</p>
            </div>


        </div>
     );
}
 
export default IncomeExp;