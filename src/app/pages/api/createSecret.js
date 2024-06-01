import { v4 as uuidv4 } from 'uuid';

// Ensure secrets Map is shared properly
if (!global.secrets) {
  global.secrets = new Map();
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { secret } = req.body;
    if (!secret) {
      return res.status(400).json({ message: 'Secret is required' });
    }
    const id = uuidv4();
    if (typeof document !== 'undefined') {
      // will run in client's browser only
      const link = `${process.env.BASE_URL}/secret/${id}`;  }
   
    global.secrets.set(id, secret);
    res.status(200).json({ link });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
