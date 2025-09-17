export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    // Notion webhook 驗證用
    if (body?.challenge) {
      return res.status(200).json({ challenge: body.challenge });
    }

    console.log("Webhook payload:", body);
    return res.status(200).json({ received: true });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
