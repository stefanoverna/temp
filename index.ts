import { Client } from '@datocms/client';

async function run() {
  const client = new Client({
    apiToken: 'faeb9172e232a75339242faafb9e56de8c8f13b735f7090964',
  });

  const items = await client.items.list({ filter: { type: 'blog_post' } });
  console.log(items);
}

run();
