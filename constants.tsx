import { 
  Cloud, Server, Container, Code, GitBranch, Terminal, 
  Database, Shield, Network, Zap, Globe, Cpu, Monitor
} from 'lucide-react';
import { Project, Experience, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'AWS', icon: Cloud, category: 'Cloud' },
  { name: 'Azure', icon: Cloud, category: 'Cloud' },
  { name: 'GCP', icon: Cloud, category: 'Cloud' },
  { name: 'Linux', icon: Terminal, category: 'General' },
  { name: 'Docker', icon: Container, category: 'DevOps' },
  { name: 'Kubernetes', icon: Server, category: 'DevOps' },
  { name: 'Terraform', icon: Code, category: 'DevOps' },
  { name: 'Ansible', icon: Terminal, category: 'DevOps' },
  { name: 'Jenkins', icon: GitBranch, category: 'DevOps' },
  { name: 'Shell Scripting', icon: Code, category: 'General' },
  { name: 'Prometheus/Grafana', icon: Zap, category: 'Tools' },
  { name: 'Apache/Nginx', icon: Globe, category: 'Tools' },
  { name: 'VPC/Networking', icon: Network, category: 'Cloud' },
  { name: 'IAM Security', icon: Shield, category: 'Cloud' },
  { name: 'SQL/RDS', icon: Database, category: 'Cloud' },
  { name: 'Git/GitHub', icon: GitBranch, category: 'Tools' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Cloud Engineer',
    company: 'Mahatta Multimedia Pvt. Ltd.',
    period: 'Feb 2021 - Present',
    description: 'Designed and implemented highly available, fault-tolerant AWS architectures. Managed a portfolio of 12 projects and 70+ servers. Achieved 67% cost optimization on AWS billing. Implemented CloudFront with Geo-restrictions, improving speed by 20%. Championed CI/CD practices.',
  },
  {
    id: '2',
    role: 'Upskill Professional Skill (Career Break)',
    company: 'Self-Learning & Training',
    period: 'July 2019 - Jan 2021',
    description: 'Completed intensive training in AWS Cloud (EC2, VPC, RDS, S3, Route53, IAM). Achieved AWS Certified Solutions Architect - Associate. Mentored others on AWS best practices. Learned to apply core AWS services for compute, storage, and networking.',
  },
  {
    id: '3',
    role: 'Associate Engineer',
    company: 'IBM India Pvt. Ltd (FutureFocus & IMSI)',
    period: 'Nov 2018 - June 2019',
    description: 'Assisted in system administration and user support. Maintained documentation, monitored security, and managed software. Collaborated with teams to ensure compliance and learned new technologies.',
  },
  {
    id: '4',
    role: 'Desktop Support Engineer',
    company: 'Evision Technoserve Pvt Ltd',
    period: 'Dec 2016 - May 2018',
    description: 'Provided technical support for hardware, software, and peripherals. Installed, configured, and maintained desktop systems. Troubleshot issues, managed user accounts, and facilitated user training.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AWS Cost Optimization Strategy',
    description: 'Achieved 67% cost optimization on AWS billing through proactive management, resource rightsizing, and utilization strategies across 70+ servers.',
    techStack: ['AWS', 'Cost Explorer', 'EC2', 'Auto Scaling'],
    githubUrl: '#',
    imageUrl: 'https://picsum.photos/id/160/600/400',
  },
  {
    id: '2',
    title: 'CloudFront Geo-Restriction & Speedup',
    description: 'Created a CloudFront distribution with Geo-restrictions for regional access control. Increased website loading speed by 20% through efficient caching.',
    techStack: ['CloudFront', 'WAF', 'S3', 'Route53'],
    githubUrl: '#',
    imageUrl: 'https://picsum.photos/id/180/600/400',
  },
  {
    id: '3',
    title: 'Fault-Tolerant AWS Architecture',
    description: 'Designed highly available architectures for diverse clients. Implemented S3 versioning for data integrity and facilitated file restoration for critical business data.',
    techStack: ['VPC', 'S3 Versioning', 'Multi-AZ', 'ELB'],
    githubUrl: '#',
    imageUrl: 'https://picsum.photos/id/60/600/400',
  },
  {
    id: '4',
    title: 'CI/CD Pipeline Implementation',
    description: 'Championed Continuous Development and Continuous Integration (CI/CD) practices to streamline software delivery and reduce manual deployment errors.',
    techStack: ['Jenkins', 'Git', 'Docker', 'AWS CodePipeline'],
    githubUrl: '#',
    imageUrl: 'https://picsum.photos/id/1/600/400',
  },
];

export const CERTIFICATIONS = [
  "AWS Certified Solutions Architect - Associate",
  "Google Certified Associate Cloud Engineer",
  "Microsoft Certified Azure Fundamentals",
  "AWS Certified Cloud Practitioner",
  "AWS RE/Start Graduate"
];