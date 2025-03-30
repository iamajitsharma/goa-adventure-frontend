import { client } from "../lib/client";

export async function getPrivacyPolicy() {
  const query = `*[_type == 'websitepolicies' && title == 'Privacy Policy'][0] {
   
    title,
      wef,
      content
}`;

  const response = await client.fetch(query);

  return response;
}

export async function getTermConditions() {
  const query = `*[_type == 'websitepolicies' && title == 'Terms & Conditions'][0] {
    
    title,
      wef,
      content
}`;

  const response = await client.fetch(query);

  return response;
}
