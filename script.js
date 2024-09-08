
function handleFormSubmit(event) {
    event.preventDefault();
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let phoneElement = document.getElementById("phone");
    let educationElement = document.getElementById("education");
    let experienceElement = document.getElementById("experience");
    let skillsElement = document.getElementById("skills");
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more elements are missing");
        return;
    }
    let name = nameElement.value;
    let email = emailElement.value;
    let phone = phoneElement.value;
    let education = educationElement.value;
    let experience = experienceElement.value;
    let skills = skillsElement.value;
    let resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span class=\"editable\" id=\"editName\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" id=\"editEmail\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\" id=\"editPhone\">").concat(phone, "</span></p>\n    \n        <h3>Education</h3>\n        <p class=\"editable\" id=\"editEducation\">").concat(education, "</p>\n    \n        <h3>Experience</h3>\n        <p class=\"editable\" id=\"editExperience\">").concat(experience, "</p>\n    \n        <h3>Skills</h3>\n        <p class=\"editable\" id=\"editSkills\">").concat(skills, "</p>\n    ");
    let resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
}

function toggleEditMode() {
    var editButton = document.getElementById("editButton");
    if (!editButton)
        return;
    var editableElements = document.querySelectorAll(".editable");
    if (editButton.textContent === "Edit") {
        
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    }
    else {
        
        editableElements.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}

function attachEventListeners() {
    var formElement = document.getElementById("resumeForm");
    var editButton = document.getElementById("editButton");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
}

attachEventListeners();