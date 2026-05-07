async function test() {
  const query = `
    query GetFaqsFields {
      faqs(first: 1) {
        nodes {
          databaseId
          title
          content
        }
      }
    }
  `;

  const response = await fetch("https://headless.404hosting.ro/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  console.log(JSON.stringify(json, null, 2));
}

test();
