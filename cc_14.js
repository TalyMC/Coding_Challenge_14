//Task 2
function ticketCard(customerName, IssueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');
    
    //Div for Tickets
    const card = document.createElement('div');
    card.setAttribute('class', 'ticket');
    ticketContainer.appendChild(card);

    //Heading for Cutomer Name
    const heading = document.createElement('h2');
    heading.textContent = customerName;

    //SubHeading for Issue
    const itHasIssues = document.createElement('h4');
    itHasIssues.textContent = IssueDescription;

    //Priority Level
    const prioritycond = document.createElement('span');
    prioritycond.textContent = `Priority: ${priorityLevel}`;
    prioritycond.setAttribute('class', priorityLevel.toLowerCase()); // Apply 'high' or 'low' class

    //Resolve Button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Edit';
    resolveButton.setAttribute('class', 'edit-button');

    // Append All Elements
    card.appendChild(heading);
    card.appendChild(itHasIssues);
    card.appendChild(prioritycond);
    card.appendChild(resolveButton);
};
// Example Tickets
ticketCard('Benito B.B.', 'Needs Maintenance ASAP', 'High');
ticketCard('Rauw A.', 'Page Responsive - Slow', 'Low');

//Task 3
function highPriortyHighlight() {
    const highPriortyHighlight = document.querySelectorAll('.high');
    const highProArray = Array.from(highPriortyHighlight);

    highProArray.forEach(ticket => {
        ticket.style.backgroundColor = 'rgb(225, 97, 97)';
        ticket.style.border = '2px solid black'
    });
};

highlightHighPriorityTickets()