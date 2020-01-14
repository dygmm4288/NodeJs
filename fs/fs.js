const fs = require("fs");
const path = require("path");
//data
const examContent =
	"This is a small description. Keep it simple and to the point.";
const projectExam = { title: "Project Title", content: examContent };
const projects = [projectExam, projectExam, projectExam];
const jsonProjects = JSON.stringify(projects);
console.log(jsonProjects);
fs.mkdir(path.join(__dirname, "/fs_result"), err => {
	if (err) {
		throw new Error(err);
	}
	console.log("mkdir success");
});
fs.writeFile(
	path.join(__dirname, "/fs_result/result.json"),
	jsonProjects,
	"utf-8",
	err => {
		if (err) {
			throw new Error(err);
		}
		console.log("write File success");
	}
);
