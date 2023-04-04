import request from "supertest";
import { app } from "../src/index";
import * as CustomerService from "../src/customer/customer.service";
import { describe, it, expect, jest } from "@jest/globals";
import { db } from "../src/utils/db.server";



describe("GET /api/customers", () => {
    it("should return customers", async () => {
        const res = await request(app).get("/api/customers");
        expect(res.statusCode).toBe(200);
    });
});

// jest.mock('../src/customer/customer.service');

// describe('GET /customers', () => {
//   it('should return a list of customers', async () => {
//     const customers = [
//       {
//         id: 1,
//         firstname: 'John',
//         lastname: 'Doe',
//       },
//       {
//         id: 2,
//         firstname: 'Jane',
//         lastname: 'Doe',
//       },
//     ];

//     (CustomerService.listCustomers as jest.Mock).mockResolvedValue(customers as never);

//     const response = await request(app).get('/api/customers');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(customers);
//   });

//   it('should return a 500 error if the service throws an error', async () => {
//     const errorMessage = 'Internal server error';
//     (CustomerService.listCustomers as jest.Mock).mockRejectedValue(new Error(errorMessage) as never);

//     const response = await request(app).get('/api/customers');

//     expect(response.status).toBe(500);
//     expect(response.body).toEqual(errorMessage);
//   });
// });

// describe('POST /customers', () => {
//   it('should create a new customer', async () => {
//     const newCustomer = {
//       firstname: 'John',
//       lastname: 'Doe',
//     };

//     const createdCustomer = {
//       id: 1,
//       firstname: 'John',
//       lastname: 'Doe',
//     };

//     (CustomerService.createCustomer as jest.Mock).mockResolvedValue(createdCustomer as never);

//     const response = await request(app)
//       .post('/api/customers')
//       .send(newCustomer);

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(createdCustomer);
//   });

//   it('should return a 400 error if the request body is invalid', async () => {
//     const invalidCustomer = {
//       firstname: 'John',
//     };

//     const response = await request(app)
//       .post('/api/customers')
//       .send(invalidCustomer);

//     expect(response.status).toBe(400);
//     expect(response.body.errors).not.toBeUndefined();
//   });

//   it('should return a 500 error if the service throws an error', async () => {
//     const errorMessage = 'Internal server error';
//     (CustomerService.createCustomer as jest.Mock).mockRejectedValue(new Error(errorMessage) as never);

//     const response = await request(app)
//       .post('/api/customers')
//       .send({
//         firstname: 'John',
//         lastname: 'Doe',
//       });

//     expect(response.status).toBe(500);
//     expect(response.body).toEqual(errorMessage);
//   });
// });








// import request from "supertest";
// import { app } from "../src/index";
// import * as CustomerService from "../src/customer/customer.service";
// import { describe, it, expect, jest } from "@jest/globals";

// jest.mock("../src/customer/customer.service", () => ({
//   listCustomers: jest.fn(),
// }));

// describe("GET /api/customers", () => {
//   it("should return a list of customers", async () => {
//     const mockCustomers: { id: number; firstname: string; lastname: string }[] = [
//       { id: 1, firstname: "John", lastname: "Doe" },
//       { id: 2, firstname: "Jane", lastname: "Doe" },
//     ];

//     // why this as never heps it solve?
//     (CustomerService.listCustomers as jest.Mock).mockResolvedValue(mockCustomers as never);

//     const response = await request(app).get("/api/customers");

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(mockCustomers);
//   });

//   it("should handle errors", async () => {
//     const mockError = new Error("Database error");
//     (CustomerService.listCustomers as jest.Mock).mockRejectedValue(mockError as never);

//     const response = await request(app).get("/api/customers");

//     expect(response.status).toBe(500);
//     expect(response.body).toEqual("Database error");
//   });
// });
// POSTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
// describe("POST /api/customers", () => {
//     it("should create a new customer", async () => {
//         const mockCustomer = { firstname: "Mihailo", lastname: "Štavljanin" };
//         const mockResult = { id: 1, ...mockCustomer };
//         CustomerService.createCustomer.mockResolvedValue(mockResult);

//         const response = await request(app).post("/api/customers").send(mockCustomer);

//         expect(response.status).toBe(201);
//         expect(response.body).toEqual(mockResult);
//     });

//     it("should handle validation errors", async () => {
//         const mockCustomer = { firstname: "Mihailo", lastname: "" };

//         const response = await request(app).post("/api/customers").send(mockCustomer);

//         expect(response.status).toBe(400);
//         expect(response.body.errors).toHaveLength(1);
//         expect(response.body.errors[0].param).toBe("lastname");
//     });

//     it("should handle errors", async () => {
//         const mockCustomer = { firstname: "Mihailo", lastname: "Stavljanin" };
//         const mockError = new Error("Database error");
//         CustomerService.createCustomer.mockRejectedValue(mockError);

//         const response = await request(app).post("/api/customers").send(mockCustomer);

//         expect(response.status).toBe(500);
//         expect(response.body).toEqual("Database error");
//     });
// });
