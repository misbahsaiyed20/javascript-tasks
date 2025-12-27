let activities = [];

const activityinput = document.getElementById("add");
const addbtn = document.getElementById("btn");
const errorline = document.getElementById("err");
const container = document.getElementById("actcontainer");

const total = document.getElementById("totalcount");
const completed = document.getElementById("completedcount");
const pending = document.getElementById("pendingcount");

// input validation
activityinput.addEventListener("input", function () {
    const value = activityinput.value.trim();

    if (value === "") {
        errorline.textContent = "Activity cannot be empty";
        addbtn.disabled = true;
    } 
    else if (value.length < 3) {
        errorline.textContent = "Activity name is too short";
        addbtn.disabled = true;
    } 
    else {
        errorline.textContent = "";
        addbtn.disabled = false;
    }
});

// adding activity
addbtn.addEventListener("click", function () {
    const activityText = activityinput.value.trim();

    if (activityText === "" || activityText.length < 3) {
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
    togglebtn.textContent = "toggle";

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

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].completed) {
            completedcount++;
        }
    }

    total.textContent = activities.length;
    completed.textContent = completedcount;
    pending.textContent = activities.length - completedcount;
}
