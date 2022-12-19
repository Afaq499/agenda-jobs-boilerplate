import userModel from "../modals/addUser";
import Agenda from "../config/agenda-jobs";
import { JOB_STATES } from "../utils/constants";

Agenda.define("update-quantity", { concurrency: 15, lockLifetime: 30 * 60000 }, async (job, done) => {
    console.log("*********************************************************");
    console.log("*****************   update quantity    *******************");
    console.log("*********************************************************");
    try {
      job.attrs.state = JOB_STATES.COMPLETED;
      job.attrs.lockedAt = null;
      job.attrs.progress = 100;
      await userModel.updateOne({name: 'Afaq khan'}, { $inc: {quantity: 1}});
  
      console.log("*****************************************************************");
      console.log("******************   Some Job COMPLETED   *****************");
      console.log("*****************************************************************");
      console.log("*****************************************************************");
    } catch (error) {
      console.log("*****************************************************************");
      console.log("********************   Some Job RETRY   *******************");
      console.log("*****************************************************************");
      console.log("error in some job", error.message);
      console.log("*****************************************************************");
  
      job.attrs.state = JOB_STATES.FAILED;
      job.attrs.failedAt = new Date();
      job.attrs.failReason = error.message;
      job.attrs.lockedAt = null;
      await job.save();
    }
    done();
  });
  
  
  
  