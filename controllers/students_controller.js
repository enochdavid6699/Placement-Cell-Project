//Require Student
const Student = require('../models/student');

//Require Interview
const Interview = require('../models/interview');

const fs = require('fs');

//Create Student Page
module.exports.createStudentPage = function (req, res) {

    return res.render('add_new_student', {
        title: "Add New Student"
    });
}

//Create Student
module.exports.createStudent = async function (req, res) {

    try {
        let student = await Student.create(req.body);
        await student.save();

        //TODO
        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Update Page Student
module.exports.updatePage = async function (req, res) {

    let student = await Student.findById(req.params.id);

    student.populate();

    return res.render('update_student', {
        title: "Update Student",
        student: student
    });
}

//Update Student
module.exports.update = async function (req, res) {
   
    let student = await Student.findByIdAndUpdate(req.body.student_id , req.body);

    return res.redirect('/');
}

//Delete Student
module.exports.deleteStudent = async function (req, res) {

    try {
        let student = await Student.findById(req.params.id);

        if (student) {
            await Student.findByIdAndDelete(req.params.id);
        }

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const { createObjectCsvWriter } = require('csv-writer');

// Download Student Details
module.exports.download = async function (req, res) {
    try {
      // Fetch all student data from the database
      const students = await Student.find({})
        .populate({
          path: 'interviews',
          select: 'date company job',
        });
  
      if (students.length === 0) {
        return res.status(404).send('No students found');
      }
  
      // Define the CSV header and fields
      const csvHeader = [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Name' },
        { id: 'college', title: 'College' },
        { id: 'placed', title: 'Placed' },
        { id: 'batch', title: 'Batch' },
        { id: 'DSA', title: 'DSA' },
        { id: 'webDev', title: 'Web Development' },
        { id: 'react', title: 'React' },
        { id: 'interviewDate', title: 'Interview Date' },
        { id: 'interviewCompany', title: 'Interview Company' },
        { id: 'interviewJob', title: 'Interview Job' },
        { id: 'result', title: 'Result' },
      ];
  
      // Map the student data to CSV rows
      const csvRows = students.map((student) => {
        // Map interviews data to an array of interview strings
        const interviews = student.interviews.map((interview) => {
          return {
            date: interview.date,
            company: interview.company,
            job: interview.job,
          };
        });
  
        // Combine all interview details into a single string
        const interviewDates = interviews.map((interview) => interview.date).join(', ');
        const interviewCompanies = interviews.map((interview) => interview.company).join(', ');
        const interviewJobs = interviews.map((interview) => interview.job).join(', ');
  
        return {
          id: student._id,
          name: student.name,
          college: student.college,
          placed: student.placed,
          batch: student.batch,
          DSA: student.DSA,
          webDev: student.webDev,
          react: student.react,
          interviewDate: interviewDates,
          interviewCompany: interviewCompanies,
          interviewJob: interviewJobs,
          result: student.result,
        };
      });
  
      // Create a CSV writer and specify the file path and header
      const csvWriter = createObjectCsvWriter({
        path: 'student_details.csv',
        header: csvHeader,
      });
  
      // Write the CSV rows to the file
      await csvWriter.writeRecords(csvRows);
  
      // Set the response headers for downloading the file
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=student_details.csv');
  
      // Stream the file to the response
      const fileStream = fs.createReadStream('student_details.csv');
      fileStream.pipe(res);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  

