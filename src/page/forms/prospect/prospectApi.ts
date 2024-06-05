// prospectApi.ts

import { Payment } from "./columns"; // Assuming you have Payment type defined

export async function fetchPaymentInformation(): Promise<Payment[]> {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms

  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "7238ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed4252f",
      amount: 34,
      status: "failed",
      email: "waleed@gmail.com",
    },
    {
      id: "728e23d52f",
      amount: 324,
      status: "success",
      email: "saud@gmail.com",
    },
  ];
}
