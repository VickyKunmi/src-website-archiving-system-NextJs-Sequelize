import { getserver } from "../config";
import axios from "axios";

//all executives
const getExecutives = async () => {
  const response = await fetch(`${getserver}/api/Executives`);
  const json = await response.json();
  return json;
};

// single executive
const getExecutive_helper = async ({ executiveId }) => {
  executiveId = executiveId.data;
  // console.log(executiveId.data, "Executive ID")
  const response = await fetch(
    `${getserver}/api/Executives/single?executiveId=${executiveId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new executive
const addExecutive = async (formData) => {
  try {
    console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/Executives`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new executive
async function updateExecutiveById({ executiveId, models }) {
  // console.log(executiveId, models, "kj");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ executiveId, models }),
  };
  const response = await fetch(`${getserver}/api/Executives/single`, Options);
  const json = await response.json();
  return json;
}

//delete a new executive
async function deleteExecutive(executiveId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ executiveId }),
  };
  const response = await fetch(`${getserver}/api/Executives/single`, Options);
  const json = await response.json();
  return json;
}

//helper for contact table

//all contact
const getContacts = async () => {
  const response = await fetch(`${getserver}/api/Contact`);
  const json = await response.json();
  return json;
};

// single contact
const getContact_helper = async ({ contactId }) => {
  contactId = contactId.data;
  const response = await fetch(
    `${getserver}/api/Contact/single?contactId=${contactId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new contact
const addContact = async (formData) => {
  try {
    console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/Contact`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new contact
async function updateContactById({ contactId, models }) {
  // console.log(contactId, models, "kj");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactId, models }),
  };
  const response = await fetch(`${getserver}/api/Contact/single`, Options);
  const json = await response.json();
  return json;
}

//delete a contact
async function deleteContact(contactId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactId }),
  };
  const response = await fetch(`${getserver}/api/Contact/single`, Options);
  const json = await response.json();
  return json;
}

// helper for news Table

//all news
const getNews = async () => {
  const response = await fetch(`${getserver}/api/News`);
  const json = await response.json();
  return json;
};

// single news
const getNews_helper = async ({ newsId }) => {
  newsId = newsId.data;
  const response = await fetch(`${getserver}/api/News/single?newsId=${newsId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new news
const addNews = async (formData) => {
  try {
    console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/News`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update news
async function updateNewsById({ newsId, models }) {
  console.log(newsId, models, "kj");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newsId, models }),
  };
  const response = await fetch(`${getserver}/api/News/single`, Options);
  const json = await response.json();
  return json;
}

//delete news
async function deleteNews(newsId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newsId }),
  };
  const response = await fetch(`${getserver}/api/News/single`, Options);
  const json = await response.json();
  return json;
}

// uploads_helper
const UploadImage = async (imageData) => {
  console.log(imageData, "hello");
  const uploadRes = await axios.post(
    "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
    imageData
  );
  // console.log(uploadRes, uploadRes.data, "test");
  const { url } = uploadRes.data;
  if (url) return url;
};

//helper for association

//all associations
const getAssociations = async () => {
  const response = await fetch(`${getserver}/api/Associations`);
  const json = await response.json();
  return json;
};

// single association
const getAssociation_helper = async ({ associationId }) => {
  associationId = associationId.data;
  const response = await fetch(
    `${getserver}/api/Associations/single?associationId=${associationId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new association
const addAssociation = async (formData) => {
  try {
    console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/Associations`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new association
async function updateAssociationById({ associationId, models }) {
  console.log(associationId, models, "kj");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ associationId, models }),
  };
  const response = await fetch(`${getserver}/api/Associations/single`, Options);
  const json = await response.json();
  return json;
}

//delete a new association
async function deleteAssociation(associationId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ associationId }),
  };
  const response = await fetch(`${getserver}/api/Associations/single`, Options);
  const json = await response.json();
  return json;
}

// helper for Events

//all events
const getEvents = async () => {
  const response = await fetch(`${getserver}/api/Events`);
  const json = await response.json();
  return json;
};

// single event
const getEvent_helper = async ({ eventId }) => {
  eventId = eventId.data;
  const response = await fetch(
    `${getserver}/api/Events/single?eventId=${eventId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new event
const addEvent = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/Events`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new event
async function updateEventById({ eventId, models }) {
  console.log(eventId, models, "kj");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventId, models }),
  };
  const response = await fetch(`${getserver}/api/Events/single`, Options);
  const json = await response.json();
  return json;
}

//delete an event
async function deleteEvent(eventId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventId }),
  };
  const response = await fetch(`${getserver}/api/Events/single`, Options);
  const json = await response.json();
  return json;
}

//helper for academic committee

//all academic committee
const getAcademicCommittee = async () => {
  const response = await fetch(`${getserver}/api/AcademicCommittee`);
  const json = await response.json();
  return json;
};

// single academic committee
const getAcademicCommittee_helper = async ({ academicCommitteeId }) => {
  academicCommitteeId = academicCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/AcademicCommittee/single?academicCommitteeId=${academicCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new academic committee
const addAcademicCommittee = async (formData) => {
  try {
    // console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/AcademicCommittee`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new academic committee
async function updateAcademicCommitteeById({ academicCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ academicCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/AcademicCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new academic committee
async function deleteAcademicCommittee(academicCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ academicCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/AcademicCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for editorial committee

//all editorial committee
const getEditorialCommittee = async () => {
  const response = await fetch(`${getserver}/api/EditorialCommittee`);
  const json = await response.json();
  return json;
};
// single editorial committee
const getEditorialCommittee_helper = async ({ editorialCommitteeId }) => {
  editorialCommitteeId = editorialCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/EditorialCommittee/single?editorialCommitteeId=${editorialCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new editorial committee
const addEditorialCommittee = async (formData) => {
  try {
    // console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(
      `${getserver}/api/EditorialCommittee`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new editorail committee
async function updateEditorialCommitteeById({ editorialCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ editorialCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/EditorialCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new editorial committee
async function deleteEditorialCommittee(editorialCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ editorialCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/EditorialCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for estate committee

//all estate committee
const getEstateCommittee = async () => {
  const response = await fetch(`${getserver}/api/EstateCommittee`);
  const json = await response.json();
  return json;
};
// single estate committee
const getEstateCommittee_helper = async ({ estateCommitteeId }) => {
  estateCommitteeId = estateCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/EstateCommittee/single?estateCommitteeId=${estateCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new estate committee
const addEstateCommittee = async (formData) => {
  try {
    // console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/EstateCommittee`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new estate committee
async function updateEstateCommitteeById({ estateCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ estateCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/EstateCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new estate committee
async function deleteEstateCommittee(estateCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ estateCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/EstateCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for finance committee

//all finance committee
const getFinanceCommittee = async () => {
  const response = await fetch(`${getserver}/api/FinanceCommittee`);
  const json = await response.json();
  return json;
};
// single finance committee
const getFinanceCommittee_helper = async ({ financeCommitteeId }) => {
  financeCommitteeId = financeCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/FinanceCommittee/single?financeCommitteeId=${financeCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new finance committee
const addFinanceCommittee = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/FinanceCommittee`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

async function updateFinanceCommitteeById({ financeCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ financeCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/FinanceCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new finance committee
async function deleteFinanceCommittee(financeCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ financeCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/FinanceCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for judiciary committee

//all judiciary committee
const getJudiciaryCommittee = async () => {
  const response = await fetch(`${getserver}/api/JudiciaryCommittee`);
  const json = await response.json();
  return json;
};
// single Judiciary committee
const getJudicaryCommittee_helper = async ({ judiciaryCommitteeId }) => {
  judiciaryCommitteeId = judiciaryCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/JudiciaryCommittee/single?judiciaryCommitteeId=${judiciaryCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new judiciary committee
const addJudiciaryCommittee = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(
      `${getserver}/api/JudiciaryCommittee`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new committee
async function updateJudiciaryCommitteeById({ judiciaryCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ judiciaryCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/JudiciaryCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new  committee
async function deleteJudiciaryCommittee(judiciaryCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ judiciaryCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/JudiciaryCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for organizing committee

//all organizing committee
const getOrganizingCommittee = async () => {
  const response = await fetch(`${getserver}/api/OrganizingCommittee`);
  const json = await response.json();
  return json;
};
// single organizing committee
const getOrganizingCommittee_helper = async ({ organizingCommitteeId }) => {
  organizingCommitteeId = organizingCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/OrganizingCommittee/single?organizingCommitteeId=${organizingCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new organizing committee
const addOrganizingCommittee = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(
      `${getserver}/api/OrganizingCommittee`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new committee
async function updateOrganizingCommitteeById({
  organizingCommitteeId,
  models,
}) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ organizingCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/OrganizingCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new  committee
async function deleteOrganizingCommittee(organizingCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ organizingCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/OrganizingCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for procurement committee

//all procurement committee
const getProcurementCommittee = async () => {
  const response = await fetch(`${getserver}/api/ProcurementCommittee`);
  const json = await response.json();
  return json;
};
// single procurement committee
const getProcurementCommittee_helper = async ({ procurementCommitteeId }) => {
  procurementCommitteeId = procurementCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/ProcurementCommittee/single?procurementCommitteeId=${procurementCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new procurement committee
const addProcurementCommittee = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(
      `${getserver}/api/ProcurementCommittee`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new committee
async function updateProcurementCommitteeById({
  procurementCommitteeId,
  models,
}) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ procurementCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/ProcurementCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new  committee
async function deleteProcurementCommittee(procurementCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ procurementCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/ProcurementCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for project

//all project
const getReligiousCommittee = async () => {
  const response = await fetch(`${getserver}/api/ReligiousCommittee`);
  const json = await response.json();
  return json;
};
// single project
const getReligiousCommittee_helper = async ({ religiousCommitteeId }) => {
  religiousCommitteeId = religiousCommitteeId.data;
  const response = await fetch(
    `${getserver}/api/ReligiousCommittee/single?religiousCommitteeId=${religiousCommitteeId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new project
const addReligiousCommittee = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(
      `${getserver}/api/ReligiousCommittee`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new committee
async function updateReligiousCommitteeById({ religiousCommitteeId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ religiousCommitteeId, models }),
  };
  const response = await fetch(
    `${getserver}/api/ReligiousCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//delete a new  committee
async function deleteReligiousCommittee(religiousCommitteeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ religiousCommitteeId }),
  };
  const response = await fetch(
    `${getserver}/api/ReligiousCommittee/single`,
    Options
  );
  const json = await response.json();
  return json;
}

//helper for project

//all project
const getProject = async () => {
  const response = await fetch(`${getserver}/api/Project`);
  const json = await response.json();
  return json;
};
// single project
const getProject_helper = async ({ projectId }) => {
  projectId = projectId.data;
  // console.log(projectId.data, "project ID")
  const response = await fetch(
    `${getserver}/api/Project/single?projectId=${projectId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new project
const addProject = async (formData) => {
  console.log(formData, "data");
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${getserver}/api/Project`, options);
    // const response = await axios.post(`${getServer}/api/Category`, formData);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new committee
async function updateProjectById({ projectId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId, models }),
  };
  const response = await fetch(`${getserver}/api/Project/single`, Options);
  const json = await response.json();
  return json;
}

//delete a new  committee
async function deleteProject(projectId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectId }),
  };
  const response = await fetch(`${getserver}/api/Project/single`, Options);
  const json = await response.json();
  return json;
}

//helper for studnet table

//all student
const getStudents = async () => {
  const response = await fetch(`${getserver}/api/Students`);
  const json = await response.json();
  return json;
};

// single student
const getStudent_helper = async ({ studentId }) => {
  studentId = studentId.data;
  const response = await fetch(
    `${getserver}/api/Students/single?studentId=${studentId}`
  );
  const json = await response.json();
  if (json) return json;
  return {};
};

//Posting new student
const addStudent = async (formData) => {
  try {
    console.log(formData, "fff");
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    };
    const response = await fetch(`${getserver}/api/Students`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//update a new Student
async function updateStudentById({ studnetId, models }) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ studnetId, models }),
  };
  const response = await fetch(`${getserver}/api/Studnets/single`, Options);
  const json = await response.json();
  return json;
}

//delete a studnet
async function deleteStudent(studentId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ studentId }),
  };
  const response = await fetch(`${getserver}/api/Students/single`, Options);
  const json = await response.json();
  return json;
}

export {
  deleteNews,
  UploadImage,
  getAssociation_helper,
  getOrganizingCommittee,
  getOrganizingCommittee_helper,
  getJudiciaryCommittee,
  getProcurementCommittee,
  getProcurementCommittee_helper,
  getJudicaryCommittee_helper,
  getReligiousCommittee,
  getReligiousCommittee_helper,
  getAssociations,
  getEvents,
  getContact_helper,
  getEvent_helper,
  getContacts,
  getExecutive_helper,
  getExecutives,
  getNews,
  getProject,
  getProject_helper,
  getAcademicCommittee,
  getEstateCommittee,
  getFinanceCommittee,
  getFinanceCommittee_helper,
  getEstateCommittee_helper,
  getEditorialCommittee,
  getEditorialCommittee_helper,
  getAcademicCommittee_helper,
  getNews_helper,
  deleteAssociation,
  deleteJudiciaryCommittee,
  deleteFinanceCommittee,
  deleteReligiousCommittee,
  deleteOrganizingCommittee,
  deleteEstateCommittee,
  deleteAcademicCommittee,
  deleteEditorialCommittee,
  deleteEvent,
  deleteProject,
  deleteProcurementCommittee,
  deleteContact,
  deleteExecutive,
  updateAssociationById,
  updateReligiousCommitteeById,
  updateAcademicCommitteeById,
  updateJudiciaryCommitteeById,
  updateOrganizingCommitteeById,
  updateEstateCommitteeById,
  updateEditorialCommitteeById,
  updateEventById,
  updateContactById,
  updateProcurementCommitteeById,
  updateFinanceCommitteeById,
  updateExecutiveById,
  updateNewsById,
  updateProjectById,
  addProject,
  addAssociation,
  addEvent,
  addReligiousCommittee,
  addEstateCommittee,
  addOrganizingCommittee,
  addAcademicCommittee,
  addEditorialCommittee,
  addProcurementCommittee,
  addContact,
  addJudiciaryCommittee,
  addExecutive,
  addFinanceCommittee,
  addNews,
  addStudent,
  getStudent_helper,
  getStudents,
  updateStudentById,
  deleteStudent,
};
