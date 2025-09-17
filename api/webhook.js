export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ ok: true, body: req.body });
  }
  res.status(405).end(); // Method Not Allowed
}
