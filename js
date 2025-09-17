export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    // Notion webhook 驗證用
    if (body?.challenge) {
      return res.status(200).json({ challenge: body.challenge });
    }

    // 處理一般訊息（未來你可以在這裡加上 Notion API 呼叫）
    console.log("Webhook payload:", body);
    return res.status(200).json({ received: true });
  }

  res.status(405).end(); // Method Not Allowed
}
