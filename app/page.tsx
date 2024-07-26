import AddTransactions from "@/components/AddTransactions";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from '../components/Balance';
import IncomeExp from "@/components/IncomeExp";
import TransactionList from "@/components/TransactionsList";

const HomePage = async() => {

  const user = await currentUser();

  if(!user) {
    return<Guest/>
  }

    return (
        <main>
          <h2>Welcome, {user.firstName}</h2>
          <Balance/>
          <IncomeExp/>
          <AddTransactions/>
          <TransactionList/>
        </main>
    );
}
 
export default HomePage;