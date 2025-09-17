export default function handler(req, res) {
  if (req.method === "POST") {
    // 印出 body，方便 debug
    console.log("Webhook payload:", req.body);

    // 回傳成功
    return res.status(200).json({
      received: true,
      body: req.body
    });
  }

  // 不是 POST 的情況
  res.setHeader("Allow", ["POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
