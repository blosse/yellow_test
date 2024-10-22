import { useState } from "react";
import { Workstation, Activity, Site } from "./generateData";

interface WorkstationListProps {
  workstations: Workstation[];
}

interface ActivityListProps {
  activities: Activity[];
}

interface SiteListProps {
  sites: Site[];
}

const WorkstationTree: React.FC<WorkstationListProps> = ({ workstations }) => {
  return (
    <ul>
      {workstations.map((workstation) => (
        <li key={workstation.id}>{workstation.id}</li>
      ))}
    </ul>
  );
};

const ActivityTree: React.FC<ActivityListProps> = ({ activities }) => {
  const [expandedWorkstations, setExpandedWorkstations] = useState<Set<string>>(
    new Set(),
  );

  const expandWorkstations = (id: string) => {
    console.log("Clicked activity!");
    setExpandedWorkstations((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // For some reason clicking nested lists is a bit janky as the parent list also registers a click
  // Add this code for expandability that does not work
  // {expandedWorkstations.has(activity.id) && (
  //   <WorkstationTree workstations={activity.workstations} />
  // )}
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id} onClick={() => expandWorkstations(activity.id)}>
          {activity.id}
          {expandedWorkstations.has(activity.id) && (
            <WorkstationTree workstations={activity.workstations} />
          )}
        </li>
      ))}
    </ul>
  );
};

export const SiteTree: React.FC<SiteListProps> = ({ sites }) => {
  const [expandedActivities, setExpandedActivities] = useState<Set<string>>(
    new Set(),
  );
  const expandActivies = (id: string) => {
    console.log("Clicked site!");
    setExpandedActivities((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <ul>
      {sites.map((site) => (
        <li key={site.id} onClick={() => expandActivies(site.id)}>
          {site.id}
          {expandedActivities.has(site.id) && (
            <ActivityTree activities={site.activities} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SiteTree;
