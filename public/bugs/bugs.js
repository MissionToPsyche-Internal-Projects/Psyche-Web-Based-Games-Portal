const projectsList = ["15A", "15B", "15C", "15D", "15E", "15F", "15G", "15H", "15I", "15J", "15K", "15L", "15M", "Mission: Psyche", "16A", "16B", "16C", "16D", "16E"];
const checkboxes = [];
const bugCardsList = [];

const bugCards = document.getElementById('bugCards');
const checkboxContainer = document.getElementById('checkboxContainer');

projectsList.map((proj) => {
    // const checkboxDiv = document.createElement('div');
    // checkboxDiv.style.marginTop = "10px";

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';
    checkbox.id = `check${proj}`;
    checkbox.value = proj;
    checkbox.setAttribute("checked", '');

    checkboxes.push(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('form-check-label');
    checkboxLabel.setAttribute('for', `check${proj}`);
    checkboxLabel.innerText = proj;
    checkboxLabel.style.marginLeft = "5px";
    checkboxLabel.style.marginRight = "15px";

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);

    // checkboxContainer.appendChild(checkboxDiv);
});

projectsList.map((proj) => {
    db.collection(proj).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const bugData = doc.data();

            const bugCard = document.createElement('div');
            bugCard.classList.add('card', 'mt-3');

            const bugCardBody = document.createElement('div');
            bugCardBody.classList.add('card-body');

            const bugTitle = document.createElement('h4');
            bugTitle.classList.add('fw-bold', 'card-title');
            bugTitle.innerText = bugData.projectID;

            const bugDesc = document.createElement('p');
            bugDesc.classList.add('card-text');
            bugDesc.innerText = `Date: ${new Date(bugData.date).toLocaleDateString()} ${new Date(bugData.date).toLocaleTimeString()}\nReporter's Name: ${bugData.reporterName}\nEnvironment: ${bugData.environment}\nBug Experience: ${bugData.bugSummary}`;

            bugCardBody.appendChild(bugTitle);
            bugCardBody.appendChild(bugDesc);

            bugCard.appendChild(bugCardBody);
            bugCards.appendChild(bugCard);

            bugCardsList.push(bugCard);
        });
    })
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const enabledProjects =
            Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

        bugCards.innerHTML = "";

        bugCardsList.map((bug) => {
            if (enabledProjects.includes(bug.firstChild.firstChild.innerText)) {
                bugCards.appendChild(bug);
            }
        });
    });
});

document.getElementById('selectAllBtn').addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
        checkbox.setAttribute('checked', 'true');
        bugCards.innerHTML = "";
        bugCardsList.map((bug) => {
            bugCards.appendChild(bug);
        });
    });
});

document.getElementById('selectNoneBtn').addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
        checkbox.setAttribute('checked', 'false');
        checkbox.removeAttribute('checked');
        bugCards.innerHTML = "";
    });
});