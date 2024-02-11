const form = document.getElementById("form");
      const timeStamp = document.getElementById("time-stamp");
      const age = document.getElementById("age");
      const gender = document.getElementById("gender");
      const countrySelect = document.getElementById("country");
      const stateDropdown = document.getElementById("state-dropdown");
      const selfEmployed = document.getElementById("self-employed");
      const familyHistory = document.getElementById("family-history");
      const workInterfere = document.getElementById("work-interfere");
      const noOfEmployees = document.getElementById("no-of-employees");
      const remoteWork = document.getElementById("remote-work");
      const techCompany = document.getElementById("tech-company");
      const benefits = document.getElementById("benefits");
      const careOptions = document.getElementById("care-options");
      const wellnessProgram = document.getElementById("wellness-program");
      const seekHelp = document.getElementById("seek-help");
      const anonymity = document.getElementById("anonymity");
      const leave = document.getElementById("leave");
      const mentalHealthConsequence = document.getElementById(
        "mental-health-consequence"
      );
      const physHealthConsequence = document.getElementById(
        "phys-health-consequence"
      );
      const coworkers = document.getElementById("coworkers");
      const superVisor = document.getElementById("supervisor");
      const mentalHealthInterview = document.getElementById(
        "mental-health-interview"
      );
      const physHealthInterview = document.getElementById(
        "phys-health-interview"
      );
      const mentalVsPhysical = document.getElementById("mental-vs-physical");
      const obsConsequence = document.getElementById("obs-consequence");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateInputs();
      });

      const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
      };

      const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
      };

      const validateInputs = () => {
        const timeStampValue = timeStamp.value.trim();
        const ageValue = age.value.trim();
        const genderValue = gender.value;
        const countryValue = countrySelect.value;
        const selfEmployedValue = selfEmployed.value;
        const familyHistoryValue = familyHistory.value;
        const workInterfereValue = workInterfere.value;
        const noOfEmployeesValue = noOfEmployees.value;
        const remoteWorkValue = remoteWork.value;
        const techCompanyValue = techCompany.value;
        const benefitsValue = benefits.value;
        const careOptionsValue = careOptions.value;
        const wellnessProgramValue = wellnessProgram.value;
        const seekHelpValue = seekHelp.value;
        const anonymityValue = anonymity.value;
        const leaveValue = leave.value;
        const mentalHealthConsequenceValue = mentalHealthConsequence.value;
        const physHealthConsequenceValue = physHealthConsequence.value;
        const coworkersValue = coworkers.value;
        const supervisorValue = superVisor.value;
        const mentalHealthInterviewValue = mentalHealthInterview.value;
        const physHealthInterviewValue = physHealthInterview.value;
        const mentalVsPhysicalValue = mentalVsPhysical.value;
        const obsConsequenceValue = obsConsequence.value;

        if (timeStampValue === "") {
          setError(timeStamp, "Timestamp is required");
        } else {
          setSuccess(timeStamp);
        }

        if (ageValue === "") {
          setError(age, "Age is required");
        } else if (isNaN(ageValue) || ageValue < 1 || ageValue > 60) {
          setError(age, "Age must be a number between 1 and 60");
        } else {
          setSuccess(age);
        }
        if (genderValue === "select") {
          setError(gender, "Gender is required");
        } else {
          setSuccess(gender);
        }
        if (countryValue === "select") {
          setError(countrySelect, "Country is required");
        } else {
          setSuccess(countrySelect);
        }
        if (selfEmployedValue === "select") {
          setError(selfEmployed, "This field is required");
        } else {
          setSuccess(selfEmployed);
        }
        if (familyHistoryValue === "select") {
          setError(familyHistory, "This field is required");
        } else {
          setSuccess(familyHistory);
        }
        if (workInterfereValue === "select") {
          setError(workInterfere, "This field is required");
        } else {
          setSuccess(workInterfere);
        }
        if (noOfEmployeesValue === "select") {
          setError(noOfEmployees, "This field is required");
        } else {
          setSuccess(noOfEmployees);
        }
        if (remoteWorkValue === "select") {
          setError(remoteWork, "This field is required");
        } else {
          setSuccess(remoteWork);
        }
        if (techCompanyValue === "select") {
          setError(techCompany, "This field is required");
        } else {
          setSuccess(techCompany);
        }
        if (benefitsValue === "select") {
          setError(benefits, "This field is required");
        } else {
          setSuccess(benefits);
        }
        if (careOptionsValue === "select") {
          setError(careOptions, "This field is required");
        } else {
          setSuccess(careOptions);
        }
        if (wellnessProgramValue === "select") {
          setError(wellnessProgram, "This field is required");
        } else {
          setSuccess(wellnessProgram);
        }
        if (seekHelpValue === "select") {
          setError(seekHelp, "This field is required");
        } else {
          setSuccess(seekHelp);
        }
        if (anonymityValue === "select") {
          setError(anonymity, "This field is required");
        } else {
          setSuccess(anonymity);
        }
        if (leaveValue === "select") {
          setError(leave, "This field is required");
        } else {
          setSuccess(leave);
        }
        if (mentalHealthConsequenceValue === "select") {
          setError(mentalHealthConsequence, "This field is required");
        } else {
          setSuccess(mentalHealthConsequence);
        }
        if (physHealthConsequenceValue === "select") {
          setError(physHealthConsequence, "This field is required");
        } else {
          setSuccess(physHealthConsequence);
        }
        if (coworkersValue === "select") {
          setError(coworkers, "This field is required");
        } else {
          setSuccess(coworkers);
        }
        if (supervisorValue === "select") {
          setError(superVisor, "This field is required");
        } else {
          setSuccess(superVisor);
        }
        if (mentalHealthInterviewValue === "select") {
          setError(mentalHealthInterview, "This field is required");
        } else {
          setSuccess(mentalHealthInterview);
        }
        if (physHealthInterviewValue === "select") {
          setError(physHealthInterview, "This field is required");
        } else {
          setSuccess(physHealthInterview);
        }
        if (mentalVsPhysicalValue === "select") {
          setError(mentalVsPhysical, "This field is required");
        } else {
          setSuccess(mentalVsPhysical);
        }
        if (obsConsequenceValue === "select") {
          setError(obsConsequence, "This field is required");
        } else {
          setSuccess(obsConsequence);
        }
      };
      countrySelect.addEventListener("change", () => {
        if (countrySelect.value === "united-states") {
          stateDropdown.style.display = "block";
        } else {
          stateDropdown.style.display = "none";
        }
      });