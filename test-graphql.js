async function test() {
  const query = `
    query GetTeamMembers {
      teamMembers(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          databaseId
          title
          acfTeamMember {
            role
            bio
            photo {
              node {
                sourceUrl
                altText
              }
            }
          }
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
