module.exports = (req, res) => {
  if (req.method === "POST") {
    const body = req.body;

    if (body && body.challenge) {
      return res.status(200).json({ challenge: body.challenge });
    }

    return res.status(200).json({ received: true });
  }

  res.status(405).json({ error: "Method Not Allowed" });
};
