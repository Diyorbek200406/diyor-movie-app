// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, { apiVersion: "2023-08-16" });
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  if (method == "POST") {
    try {
      await stripe.customers.create({ email: req.body.email, metadata: { user_id: req.body.user_id } });
      return res.status(200).json({ message: "success" });
    } catch (error) {
      const result = error as Error;
      res.status(400).json({ message: result.message });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}
interface Data {
  message?: string;
}
