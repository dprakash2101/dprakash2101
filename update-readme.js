const fs = require('fs');
const axios = require('axios');

// Function to fetch GitHub stats using GitHub Readme Stats
async function fetchGitHubStats(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

// Function to generate updated markdown with GitHub stats
function generateUpdatedMarkdown(stats) {
  return `
## 🌐 Socials:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/s-v-s-k-devi-prakash-kandikonda-44a09b194) 

# 💻 Tech Stack:
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white) ![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

# 📊 GitHub Stats:
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=dprakash2101&theme=dark&hide_border=false&include_all_commits=true&count_private=true)<br/>
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=dprakash2101&theme=dark&hide_border=false)<br/>
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=dprakash2101&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)

# 📈 GitHub Streak:
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=dprakash2101&theme=dark&hide_border=false&custom_title=GitHub%20Streak&layout=compact&theme=dark&hide_border=false&count_private=true)

# 🔥 Top Languages:
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=dprakash2101&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact&custom_title=Top%20Languages&card_width=300)

## 🏆 GitHub Trophies
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=dprakash2101&theme=nord&no-frame=false&no-bg=true&margin-w=4)

### 🔝 Top Contributed Repo
![Top Contributed Repo](https://github-contributor-stats.vercel.app/api?username=dprakash2101&limit=5&theme=dark&combine_all_yearly_contributions=true)

[![Visit Count](https://visitcount.itsvg.in/api?id=dprakash2101&icon=0&color=1)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
`;
}

// Main script to fetch stats, generate markdown, and update README
async function updateReadme() {
  const username = 'dprakash2101';  // Replace with your GitHub username
  const stats = await fetchGitHubStats(username);
  const updatedMarkdown = generateUpdatedMarkdown(stats);

  // Read the current content of README.md
  const currentReadme = fs.readFileSync('README.md', 'utf-8');

  // Check if the content has changed
  if (currentReadme !== updatedMarkdown) {
    // Write the updated markdown to README.md
    fs.writeFileSync('README.md', updatedMarkdown);
    
    // Commit changes only if the content has changed
    // You can add your Git configuration here
    // Example: git add README.md && git commit -m "Update README" && git push
  } else {
    console.log('No changes in README. Skipping commit.');
  }
}

// Run the updateReadme function
updateReadme();
