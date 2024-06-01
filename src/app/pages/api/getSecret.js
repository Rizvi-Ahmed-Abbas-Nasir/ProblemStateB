if (!global.secrets) {
    global.secrets = new Map();
  }
  
  export default function handler(req, res) {
    const { id } = req.query;
    const secret = global.secrets.get(id);
  
    if (secret) {
      global.secrets.delete(id);
      res.status(200).json({ secret });
    } else {
      res.status(404).json({ message: 'Secret not found or already viewed' });
    }
  }
  