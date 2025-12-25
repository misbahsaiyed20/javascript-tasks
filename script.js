let activities = [];

const activityinput = document.getElementById("add");
const addbtn = document.getElementById("btn");
const error = document.getElementById("error");
const container = document.getElementById("actcontainer");

const total = document.getElementById("totalcount");
const completed = document.getElementById("completedcount");
const pending = document.getElementById("pendingcount");

// input validation
activityinput.addEventListener("input", () => {
    if (activityinput.value.trim() === "") {
        addbtn.disabled = true;
        error.textContent = "";
    } else {
        addbtn.disabled = false;
    }
});

//adding activity
addbtn.addEventListener("click", () => {
    const activityText = activityinput.value.trim();

    if (activityText === "") {
        error.textContent = "Activity cannot be empty";
        return;
    }

    const activity = {
        name: activityText,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    activities.push(activity);
    activitycard(activity);
    updatestats();

    activityinput.value = "";
    addbtn.disabled = true;
});

// activity card
function activitycard(activity) {
    const card = document.createElement("div");
    card.className = "container1";

    const name = document.createElement("h3");
    name.textContent = activity.name;

    const status = document.createElement("p");
    status.textContent = "Status: Pending";

    const date = document.createElement("h6");
    date.textContent = "Created: " + activity.createdAt;

    const togglebtn = document.createElement("button");
    togglebtn.textContent = "Done";

    togglebtn.addEventListener("click", () => {
    activity.completed = !activity.completed;

    if (activity.completed) {
        status.textContent = "Status: Completed";
        togglebtn.textContent = "Pending";
        card.classList.add("completed");
    } else {
        status.textContent = "Status: Pending";
        togglebtn.textContent = "Done";
        card.classList.remove("completed");
    }

    updatestats();
});

card.appendChild(name);
    card.appendChild(status);
    card.appendChild(date);
    card.appendChild(togglebtn);

    container.appendChild(card);
}

// stats
function updatestats() {
    let completedcount = 0;

    for(let i = 0; i < activities.length; i++) {
        if (activities[i].completed === true) {
            completedcount++;
        }
    }

    total.textContent = activities.length;
    completed.textContent = completedcount;
    pending.textContent = activities.length - completedcount;
}

