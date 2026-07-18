import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div>
      <h1>Blogger App</h1>

      {/* Conditional Rendering using && */}
      {showBooks && <BookDetails />}

      {/* Conditional Rendering using Ternary Operator */}
      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {/* Conditional Rendering using if-else */}
      {(() => {
        if (showCourses) {
          return <CourseDetails />;
        } else {
          return <h3>No Courses Available</h3>;
        }
      })()}
    </div>
  );
}

export default App;