-- Students Table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    class VARCHAR(50) NOT NULL
);

-- Subjects Table
CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- LEAP Scores Table
CREATE TABLE leap_scores (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    subject_id INT REFERENCES subjects(id),
    score NUMERIC(5, 2) NOT NULL,
    tag VARCHAR(50) NOT NULL, -- e.g., "Mastery"
    points_to_next_band NUMERIC(5, 2) NOT NULL
);

-- Subcategories Table
CREATE TABLE subcategories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Subcategory Performance Table
CREATE TABLE subcategory_performance (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    subject_id INT REFERENCES subjects(id),
    subcategory_id INT REFERENCES subcategories(id),
    performance VARCHAR(50) NOT NULL -- "Strong", "Moderate", "Weak"
);
