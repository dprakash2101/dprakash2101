const fs = require('fs');
const axios = require('axios');

// Function to fetch GitHub stats using GitHub Readme Stats
async function fetchGitHubStats(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Function to generate updated markdown with GitHub stats
function generateUpdatedMarkdown(stats) {
  // Customize this part based on the data you want to display
  return `
# 📊 GitHub Stats:
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${stats.login}&theme=dark&hide_border=false&include_all_commits=true&count_private=true)

# 📈 GitHub Streak:
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${stats.login}&theme=dark&hide_border=false)

# 🔥 Top Languages:
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${stats.login}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)
`;
}

// Main script to fetch stats, generate markdown, and update README
async function updateReadme() {
  const username = 'dprakash2101';  // Replace with your GitHub username
  const stats = await fetchGitHubStats(username);
  const updatedMarkdown = generateUpdatedMarkdown(stats);
  
  // Write the updated markdown to README.md
  fs.writeFileSync('README.md', updatedMarkdown);
}

// Run the updateReadme function
updateReadme();
