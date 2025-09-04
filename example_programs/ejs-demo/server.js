import express from "express";
import ejs from 'ejs';
import { join } from "path";
import morgan from "morgan";
const port = 8080;

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));

const students = [
  {
    id: 1,
    name: "Alice",
    major: "Computer Science",
    gpa: 3.2,
    profile: "/images/alice.jpg",
  },
  {
    id: 2,
    name: "Bob",
    major: "Biology",
    gpa: 3.0,
    profile: "/images/bob.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    major: "Physics",
    gpa: 3.8,
    profile: "/images/charlie.jpg",
  },
];

app.get("/", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "index.html"));
});

app.get("/students", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "students.html"));
});

app.get("/students/:id", (req, res) => {
  res.sendFile(join(import.meta.dirname, "public", "student.html"));
});

app.listen(port, () => console.log("The server is running at port", port));
