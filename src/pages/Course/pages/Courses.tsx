import React from 'react';

export default function Courses() {
  // 1. The Mock Data Array
  const courses = [
    { id: 1, title: 'Introduction to C', instructor: 'Dr. Smith', status: 'Active' },
    { id: 2, title: 'Data Structures', instructor: 'Prof. Johnson', status: 'Active' },
    { id: 3, title: 'Operating Systems', instructor: 'Dr. Smith', status: 'Draft' },
    { id: 4, title: 'Advanced Multithreading', instructor: 'Prof. Lee', status: 'Archived' },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Course Overview</h2>
        <button className="btn btn-primary"> + New Course</button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          {/* 2. The Bootstrap Table */}
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Course Title</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* 3. The Map Function generating the rows */}
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td className="fw-bold">{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>
                    {/* A little visual flair based on the status */}
                    <span className={`badge ${course.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                      {course.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
