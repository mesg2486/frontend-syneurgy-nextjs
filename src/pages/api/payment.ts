import { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { price } = req.body;
  console.log(price);

  const pricing: Record<string, string> = {
    "99": "price_1PKi74AOfjau4IibBxWpO6k3",
    "59": "price_1PKi6pAOfjau4Iib9PTUwrDX",
    "29": "price_1PKi6bAOfjau4IiblJJ4Y3fC",
    "0": "price_1POfsPAOfjau4IibaRf5zvj7",
  };

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: pricing[price],
            quantity: 1,
          },
        ],
        mode: "subscription",
        subscription_data: {
          trial_period_days: 7, // Adding 7-day trial period
        },
        success_url: `${req.headers.origin}/pricing?success=true`,
        cancel_url: `${req.headers.origin}/pricing?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
