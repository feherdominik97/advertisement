import type { Job } from '@/types/Job'

const description = `<section class="max-w-3xl mx-auto px-6 py-10 bg-white text-gray-800">
  <header class="mb-8">
    <p class="text-sm text-gray-600">Location: <strong>Budapest</strong></p>
    <p class="text-sm text-gray-600">Employment Type: <strong>Full-Time</strong></p>
    <p class="text-sm text-gray-600">Salary Range: <strong>Competitive, based on experience</strong></p>
  </header>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">About Us</h2>
    <p class="leading-relaxed">
      At <strong>KiBiT Solutions</strong>, we're building cutting-edge digital experiences for users around the globe.
      Our team is passionate about technology, clean code, and delivering intuitive interfaces that users love.
      We value collaboration, innovation, and a healthy work-life balance.
      Now, we're looking for a talented Frontend Developer with experience in Nuxt.js and Vue.js to join our team
      and help shape the future of our web applications.
    </p>
  </section>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">Your Role</h2>
    <ul class="list-disc list-inside space-y-1 text-base leading-relaxed">
      <li>Develop and maintain responsive, fast, and accessible frontend applications using Vue.js and Nuxt.js (SSR/SPA).</li>
      <li>Translate UI/UX designs into pixel-perfect, functional components.</li>
      <li>Collaborate with backend developers, designers, and product managers to deliver features end-to-end.</li>
      <li>Write clean, maintainable, and well-tested code.</li>
      <li>Participate in code reviews and contribute to continuous improvement practices.</li>
      <li>Optimize applications for performance and SEO.</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">What We're Looking For</h2>
    <ul class="list-disc list-inside space-y-1 text-base leading-relaxed">
      <li>2+ years of professional experience with frontend development, preferably with Vue.js and Nuxt.js.</li>
      <li>Solid understanding of JavaScript (ES6+) and TypeScript.</li>
      <li>Experience with Pinia or Vuex, TailwindCSS, and component libraries.</li>
      <li>Familiarity with RESTful APIs and modern frontend tooling (e.g., Vite, Webpack).</li>
      <li>Proficiency in Git and collaborative development workflows (e.g., pull requests, branches).</li>
      <li>Strong understanding of responsive design, cross-browser compatibility, and performance optimization.</li>
      <li><strong>Bonus:</strong> knowledge of SSR, JAMstack principles, or experience with backend technologies like Laravel, Node.js, or Symfony.</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">Nice-to-Haves</h2>
    <ul class="list-disc list-inside space-y-1 text-base leading-relaxed">
      <li>Experience with testing frameworks (Jest, Vitest, Cypress).</li>
      <li>Knowledge of SEO best practices.</li>
      <li>Familiarity with accessibility standards (WCAG).</li>
      <li>Experience working in Agile/Scrum teams.</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-xl font-semibold mb-2">What We Offer</h2>
    <ul class="list-disc list-inside space-y-1 text-base leading-relaxed">
      <li>Competitive salary and benefits package.</li>
      <li>Flexible working hours and remote-friendly setup.</li>
      <li>A modern tech stack and a collaborative team environment.</li>
      <li>Opportunities for personal and professional growth.</li>
      <li>Regular team events and a fun, supportive culture.</li>
    </ul>
  </section>

  <footer class="border-t pt-6 mt-10 text-base">
    <h2 class="text-lg font-semibold mb-2">To Apply</h2>
    <p>Send your CV, GitHub/portfolio links, and a short intro to <a href="mailto:example@mail.com" class="text-blue-600 hover:underline">example@mail.com</a>.</p>
  </footer>
</section>
`
const jobs: Array<Job> = [
    {
        id: '1',
        userId: '1',
        title: 'Frontend Developer',
        description,
        tags: ['Vue.js', 'JavaScript', 'Frontend', 'Nuxt'],
        created: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
        salary: {
            amount: 4000,
            currency: 'EUR'
        }
    },
    {
        id: '2',
        userId: '1',
        title: 'Backend Developer',
        description,
        tags: ['Node.js', 'Backend', 'PostgreSQL', 'API'],
        created: Date.now() - 1000 * 60 * 60 * 24 * 7, // 7 days ago
        salary: {
            amount: 4500,
            currency: 'EUR'
        }
    },
    {
        id: '3',
        userId: '1',
        title: 'Full Stack Developer',
        description,
        tags: ['Full Stack', 'React', 'Laravel', 'MySQL'],
        created: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
        salary: {
            amount: 5000,
            currency: 'USD'
        }
    },
    {
        id: '4',
        userId: '1',
        title: 'DevOps Engineer',
        description,
        tags: ['DevOps', 'AWS', 'CI/CD', 'Docker'],
        created: Date.now() - 1000 * 60 * 60 * 12, // 12 hours ago
        salary: {
            amount: 5200,
            currency: 'USD'
        }
    },
    {
        id: '5',
        userId: '2',
        title: 'DevOps Engineer',
        description,
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

export const getJobsForUser = async (userId: string): Promise<Array<Job>> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    return jobs.filter(job => job.userId === userId)
}

export const findJob = async (id: string): Promise<Job> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const job = jobs.find(job => job.id === id)

    if(!job) {
        throw new Error('Job not found')
    }

    return job
}

export const postJob = async (job: Job): Promise<boolean> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    jobs.push(job)

    return true
}

export const deleteJob = async (id: string): Promise<boolean> => {
    // simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const index = jobs.findIndex(job => job.id === id)
    if (index !== -1) jobs.splice(index, 1)

    return true
}

export const putJob = async (job: Job): Promise<boolean> => {
    // Simulate async delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const index = jobs.findIndex(item => item.id === job.id)
    if (index === -1) {
        throw new Error('Job not found')
    }

    jobs[index] = job

    return true
}



