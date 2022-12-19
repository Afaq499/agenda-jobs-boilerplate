import Jobs from "../database/jobs";
import Agenda from "../config/agenda-jobs";
const Fixture = async () => {
  const someJob = await Jobs.findOne({ name: "some-job" });
  if (!someJob) {
    console.log("~ job created!");
    await Agenda.create("some-job").repeatEvery("0.1 minutes").save();
  }
  // await Agenda.every("0.1 minutes","update-quantity");
};

export default Fixture;
