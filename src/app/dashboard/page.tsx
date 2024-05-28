import Payment from "@/components/payment/Payment"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Page = () =>{
const{getUser} = getKindeServerSession()
const user = getUser()

return(
    <Payment/>
)

}

export default Page