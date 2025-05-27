import type { Job } from '@/types/Job'

const jobs: Array<Job> = [
    {
        id: '1',
        title: 'Frontend Developer',
        description: 'Develop and maintain user-facing features using Vue.js and modern JavaScript.',
        tags: ['Vue.js', 'JavaScript', 'Frontend', 'Nuxt'],
        created: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
        salary: {
            amount: 4000,
            currency: 'EUR'
        }
    },
    {
        id: '2',
        title: 'Backend Developer',
        description: 'Build robust APIs and services with Node.js and PostgreSQL.',
        tags: ['Node.js', 'Backend', 'PostgreSQL', 'API'],
        created: Date.now() - 1000 * 60 * 60 * 24 * 7, // 7 days ago
        salary: {
            amount: 4500,
            currency: 'EUR'
        }
    },
    {
        id: '3',
        title: 'Full Stack Developer',
        description: 'Work across frontend and backend using React and Laravel.',
        tags: ['Full Stack', 'React', 'Laravel', 'MySQL'],
        created: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
        salary: {
            amount: 5000,
            currency: 'USD'
        }
    },
    {
        id: '4',
        title: 'DevOps Engineer',
        description: 'Manage CI/CD pipelines and cloud infrastructure.',
        tags: ['DevOps', 'AWS', 'CI/CD', 'Docker'],
        created: Date.now() - 1000 * 60 * 60 * 12, // 12 hours ago
        salary: {
            amount: 5200,
            currency: 'USD'
        }
    }
]

localStorage.jobs = jobs

export const getNextId = (): string => {

    return (parseInt(jobs[jobs.length - 1].id) + 1).toString()
}
export const getJobs = async (): Promise<Array<Job>> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    return jobs
}

export const findJob = async (id: string): Promise<Job> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const job = jobs.find(job => job.id === id)

    if(!job)
        throw new Error('Job not found')

    return job
}

export const postJob = async (job: Job): Promise<boolean> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    jobs.push(job)

    return true
}



