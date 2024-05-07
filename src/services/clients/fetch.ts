export async function fetchql<Q, V>(query: Q, variables: V) {
  const res = await fetch(process.env.AWS_APPSYNC_ENDPOINT || "", {
    method: "POST",
    // @ts-ignore
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.AWS_APPSYNC_API_KEY,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await res.json();
}
