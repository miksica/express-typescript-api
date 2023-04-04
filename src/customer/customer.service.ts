import { db } from "../utils/db.server"
import { Customer } from "../types"


export const listCustomers = async (): Promise<Customer[]> => {
    return db.customer.findMany({
        select: {
            id: true,
            firstname: true,
            lastname: true,
        }
    })
}

export const createCustomer = async (customer: Customer): Promise<Customer> => {
    return db.customer.create({
      data: {
        firstname: customer.firstname,
        lastname: customer.lastname,
      },
    })
  }