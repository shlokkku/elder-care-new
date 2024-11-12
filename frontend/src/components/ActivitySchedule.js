import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance for API calls

function ActivitySchedule() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await api.get('/activities'); // Assuming the route is /activities
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    }
    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Monthly Activities</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities available for this month.</p>
      )}
    </div>
  );
}

export default ActivitySchedule;
