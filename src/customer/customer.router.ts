import express from "express"
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"

import * as CustomerService from "./customer.service"

const customerRouter = express.Router()

// GET: list of all Customers
customerRouter.get("/", async (request: Request, response: Response) => {
    try {
        const customers = await CustomerService.listCustomers()
        return response.status(200).json(customers)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

export default customerRouter

