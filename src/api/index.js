// add new job
const addJob = async (newJob) => {
  await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};

// delete job
const deleteJob = async (id) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};

// edit job
const editJob = async (job) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
};

export { addJob, deleteJob, editJob };
