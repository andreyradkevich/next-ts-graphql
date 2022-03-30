import { NextApiRequest, NextApiResponse } from 'next';

const revalidate = async (res: NextApiResponse, path: string) => {
  try {
    await res.unstable_revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, pagePath } = req.query;

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!pagePath) {
    return res
      .status(401)
      .json({ message: 'pagePath param should be provided in query params' });
  }

  if (pagePath) {
    const path = pagePath as string;

    return revalidate(res, path);
  }

  return res.status(401).json({ message: 'Something went wrong' });
}
