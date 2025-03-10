//Task 2
function ticketCard(customerName, IssueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');
    const card = document.createElement('div');
    card.setAttribute('class', 'ticket');
    ticketContainer.appendChild(card);

    const heading = document.createElement('h2');
    heading.textContent = customerName;

    const itHasIssues = document.createElement('h4');
    itHasIssues.textContent = IssueDescription;

    const prioritycond = document.createElement('span');
    prioritycond.textContent = `Priority: ${priorityLevel}`;
    prioritycond.setAttribute('class', priorityLevel.toLowerCase()); // Apply 'high' or 'low' class

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