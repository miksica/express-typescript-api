import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import customerRouter from '../src/customer/customer.router';


dotenv.config()

if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

export const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/customers", customerRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})