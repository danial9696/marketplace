import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

// A faulty API route to test Sentry's error monitoring

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  throw new Error('Sentry Example API Route Error');
}
