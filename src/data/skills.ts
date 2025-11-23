export interface Skill {
  name: string;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "Docker", color: "text-cyan-400" },
  { name: "Kubernetes", color: "text-blue-500" },
  { name: "GitLab", color: "text-pink-400" },
  { name: "Ansible", color: "text-red-400" },
  { name: "Terraform", color: "text-green-400" },
  { name: "GitHub Actions", color: "text-purple-400" },
  { name: "Jenkins", color: "text-orange-400" },
  { name: "Argo CD", color: "text-pink-600" },
  { name: "AWS", color: "text-yellow-400" },
  { name: "GCP", color: "text-blue-300" },
  { name: "Next.js", color: "text-indigo-400" },
  { name: "PostgreSQL", color: "text-blue-600" },
  { name: "MongoDB", color: "text-green-500" },
  { name: "Redis", color: "text-red-500" },
  { name: "GraphQL", color: "text-pink-500" },
  { name: "CI/CD", color: "text-teal-400" }
];
