const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const strapi = <T>(url: string): Promise<T> => {
  return fetch(`${STRAPI_HOST}/api${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
