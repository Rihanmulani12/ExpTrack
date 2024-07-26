
"use server"
import {auth} from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { toast } from 'react-toastify';

interface TransactionsData{
    text : string,
    amount : number
}

interface TransactionResult{
    data?: TransactionsData,
    error? : string
}

async function addTransaction(formData : FormData) : Promise<TransactionResult> {
    const textValue = formData.get('text')
    const amountValue = formData.get('amount')


    if(!textValue ||  textValue === "" || !amountValue){
        return {
            error : "Text and Amount are required"
        }
    }

    const text : string = textValue.toString()
    const amount : number = parseFloat(amountValue.toString())
    

    const {userId} = auth()
    if(!userId){
        return {
            error : "User not logged in"
        }
    }
    try {
        const transactionsData : TransactionsData = await db.transaction.create({
            data : {
                text,
                amount,
                userId
            }
        })

        revalidatePath('/');

        return {data : transactionsData}
    } catch (error) {
        return {error: "Transaction not added"}
    }



   

}
export default addTransaction;
