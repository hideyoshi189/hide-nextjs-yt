// pages/api/tasks.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([{ id: 1, text: 'Sample Task' }]);
  } else if (req.method === 'POST') {
    res.status(201).json(req.body);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}