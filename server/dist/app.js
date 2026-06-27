"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve front-end static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
// Email validation helper
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
// API: Intake Submission
app.post('/api/v1/intake', (req, res) => {
    const { fullname, email, objective, context } = req.body;
    if (!fullname || !email || !objective || !context) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
    if (!validateEmail(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email address format.' });
    }
    console.log(`Intake log saved: User: ${fullname} | Email: ${email} | Focus: ${objective}`);
    // Database persistence mock log
    return res.status(201).json({
        success: true,
        message: 'Submission successfully logged.',
        payload: { fullname, email, objective }
    });
});
// API: Profile Matcher Scorecard Engine
app.post('/api/v1/assessment/match', (req, res) => {
    const { pathway } = req.body;
    if (!pathway) {
        return res.status(400).json({ success: false, error: 'Pathway is required.' });
    }
    const assessmentData = {
        undergrad: {
            title: "Admissions Pathway: Undergrad Target",
            icon: '<i class="fa-solid fa-book-open"></i>',
            content: "<strong>Preparation Window:</strong> 18-Month Prep. <br><strong>Target Parameters:</strong> GPA 3.5+ Equivalents, SAT/ACT diagnostic alignment, comprehensive extracurricular mapping, and target Ivy League placement architectures."
        },
        postgrad: {
            title: "Admissions Pathway: Postgrad Route",
            icon: '<i class="fa-solid fa-graduation-cap"></i>',
            content: "<strong>Preparation Window:</strong> 12-Month Prep. <br><strong>Target Parameters:</strong> GMAT/GRE auditing, Statement of Purpose (SOP) revision modules, merit-based scholarship engineering, and Russell Group target admissions."
        },
        corporate: {
            title: "Placement Pathway: Corporate Shift",
            icon: '<i class="fa-solid fa-briefcase"></i>',
            content: "<strong>Preparation Window:</strong> 6-Month Sprint. <br><strong>Target Parameters:</strong> Data-driven qualifications assessment, ATS-optimized portfolio/resume re-engineering, and direct international sponsor/recruiter mapping."
        },
        executive: {
            title: "Placement Pathway: Executive Tier",
            icon: '<i class="fa-solid fa-chess-queen"></i>',
            content: "<strong>Preparation Window:</strong> Direct Alignment. <br><strong>Target Parameters:</strong> Premium LinkedIn / professional re-branding audits, elite mock simulated panel interviews, contract negotiations, and direct C-suite corporate networking channels."
        }
    };
    const match = assessmentData[pathway];
    if (!match) {
        return res.status(404).json({ success: false, error: 'Selected pathway diagnostic not found.' });
    }
    return res.json({
        success: true,
        ...match
    });
});
// Fallback to serving public/index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/index.html'));
});
app.listen(PORT, () => {
    console.log(`Bangarh Limited secure API server running on port ${PORT}`);
});
