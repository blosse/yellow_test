export interface Workstation {
  id: string;
}

export interface Activity {
  id: string;
  workstations: Workstation[];
}

export interface Site {
  id: string;
  activities: Activity[];
}

export const generateData = (
  nSites: number,
  nActivities: number,
  nWorkstations: number,
) => {
  const workstations = [];
  for (let i = 0; i < nWorkstations; i++) {
    workstations.push({ id: `Workstation-${i}` });
  }

  const activities = [];
  for (let i = 0; i < nActivities; i++) {
    activities.push({ id: `Activity-${i}`, workstations: workstations });
  }

  const sites = [];
  for (let i = 0; i < nSites; i++) {
    sites.push({ id: `Site-${i}`, activities: activities });
  }

  return sites;
};
