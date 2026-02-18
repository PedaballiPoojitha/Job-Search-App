
const jobs = [
    {title: "Frontend Developer", company: "TechSoft", location: "Remote", category: "IT"},
    {title: "Backend Developer", company: "CodeWorks", location: "New York", category: "IT"},
    {title: "Digital Marketing Manager", company: "MarketPro", location: "Chicago", category: "Marketing"},
    {title: "Financial Analyst", company: "FinCorp", location: "San Francisco", category: "Finance"},
    {title: "UI/UX Designer", company: "DesignHub", location: "Remote", category: "IT"},
    {title: "SEO Specialist", company: "WebRank", location: "Remote", category: "Marketing"}
];
const jobList = document.getElementById("jobList");
function displayJobs(filteredJobs) {
    jobList.innerHTML = "";
    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found.</p>";
        return;
    }
    filteredJobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Category:</strong> ${job.category}</p>
            <button class="apply-btn" onclick="applyJob('${job.title}')">Apply</button>
        `;
        jobList.appendChild(card);
    });
}
function searchJobs() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const categoryValue = document.getElementById("categoryFilter").value;
    const filtered = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === "all" || job.category === categoryValue;
        return matchesSearch && matchesCategory;
    });
    displayJobs(filtered);
}
function applyJob(title) {
    alert("Application submitted for " + title + " 🎉");
}
// Initial display
displayJobs(jobs);
