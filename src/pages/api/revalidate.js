// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const fecth = await axios.get('https://jsonplaceholder.typicode.com/users');
  const data = await fecth.data;

  const paths = data.map(user => user.id);

  await res.revalidate('/users');
  paths.map(async (id) => {
    await res.revalidate(`/users/${id}`);
  })

  res.status(200).json({ revalidated: true });;
}
