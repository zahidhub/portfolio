import Resume from './components/resume/Resume';
import { resumeData } from '@/data/resume';
import { ContributionData } from './components/resume/GithubActivity';

async function getGithubActivity(): Promise<ContributionData | null> {
  const username = 'zahidhub';
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("Missing GITHUB_TOKEN environment variable. GitHub activity will not be fetched.");
    return null;
  }

  try {
    const query = `
      query($userName:String!) {
        user(login: $userName){
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`GitHub GraphQL API error: ${response.statusText}`);
      return null;
    }

    const json = await response.json();

    if (json.errors) {
      console.error(`GitHub API query error: ${json.errors[0].message}`);
      return null;
    }

    const calendar = json.data.user.contributionsCollection.contributionCalendar;
    const weeks = calendar.weeks;
    const recentWeeks = weeks.slice(-52); // Last 52 weeks (approx 1 year)

    return {
      total: calendar.totalContributions,
      weeks: recentWeeks
    };

  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return null;
  }
}

export default async function PortfolioPage() {
  const githubData = await getGithubActivity();

  // Create JSON-LD data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": resumeData.header.name,
    "alternateName": ["Zahid Hasan", "HasanZahid"],
    "url": "https://hasanzahid.eu",
    "image": "https://hasanzahid.eu/Profile-Photo.jpg",
    "jobTitle": "Software Engineering Student",
    "affiliation": {
      "@type": "Organization",
      "name": "Chalmers University of Technology"
    },
    "sameAs": resumeData.header.socials.map(social => social.url)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Resume githubData={githubData} />
    </>
  );
}