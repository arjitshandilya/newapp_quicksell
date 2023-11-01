import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);

  const columnLabels = ['To Do', 'In Progress', 'Review', 'Testing', 'Done'];

//  this is state variable to store grouping and sorting options

   const [groupingOption, setGroupingOption] = useState('');
   const [sortingOption, setSortingOption] = useState('');
   

//     for grouping  the tasks based on the user selection
   const setgroupingOption = ( ) =>{
    const [groupingOption, setGroupingOption] = useState('');
    let groupedTasks = [];
    if (groupingOption === 'status') {
      groupedTasks = [...new Set(tickets.map((ticket) => ticket.status))];
    } else if (groupingOption === 'user') {
      groupedTasks = [...new Set(tickets.map((ticket) => ticket.user))];
    } else if (groupingOption === 'priority') {
      groupedTasks = [...new Set(tickets.map((ticket) => ticket.priority))];
    }
   }
   export default setgroupingOption;
   
//     for sorting the tasks in the cards list
   setSortingOption = () =>{
        const [sortingOption, setSortingOption] = useState('');

        if (sortingOption === 'priority') {
            tickets.sort((a, b) => b.priority - a.priority);
          } else if (sortingOption === 'title') {
            tickets.sort((a, b) => a.title.localeCompare(b.title));
          }
        if(sortingOption == " priority"){
            if (priority === "1") {
                
            } else if (priority === "2") {
                
            } else if (priority === "3") {
                
            } else if (priority === "4") {
                
            } else if (priority === "0") {
        }
    }
        else if  (sortingOption == " title"){

        }
    }
    export default setSortingOption;
   
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         setTickets(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Implement UI rendering, event handlers, and local storage logic here


//   return (
//     <div>
//       {/* Render the Kanban board UI */}
//     </div>
//   );

return (
    <div className="kanban-board">
      <div className="kanban-header">
        {/* Render the grouping and sorting options */
      
        }
        <div className="grouping-options">
        <button onClick={() => setGroupingOption('status')}>Group by Status</button>
        <button onClick={() => setGroupingOption('user')}>Group by User</button>
        <button onClick={() => setGroupingOption('priority')}>Group by Priority</button>
      </div>
        <div className="sorting-options">
     <button onClick={() => setSortingOption('priority')}>Sort by Priority</button>
     <button onClick={() => setSortingOption('title')}>Sort by Title</button>
   </div>
      </div>
      <div className="kanban-columns">
        {/* Render the columns */
        <div className="kanban-columns">
          {
          
          columnLabels.map((label) => (
            <div key={label} className="kanban-column">
              <h2>{label}</h2>
              {/* Render the tasks for this column */}
            </div>
          ))}
        </div>
        
        

             }
      </div>
    </div>
  );
};

export default KanbanBoard;