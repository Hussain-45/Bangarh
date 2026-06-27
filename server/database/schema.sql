-- Relational SQL Schema: Bangarh Limited Data Persistence Layer

-- Drop tables if they exist (clean setup)
DROP TABLE IF EXISTS intake_submissions;
DROP TABLE IF EXISTS users;

-- 1. Users Registry Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Intake Submissions Tracking Table
CREATE TABLE intake_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    objective VARCHAR(100) NOT NULL,
    context TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Indexes for performance auditing
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_submissions_user ON intake_submissions(user_id);
