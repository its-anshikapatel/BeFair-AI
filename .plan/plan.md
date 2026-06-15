

# AI Exam Proctoring System — ProctorAI

## Landing Page
- **Hero section**: Bold headline ("Secure, AI-Powered Exam Proctoring"), subtext, CTA buttons (Get Started / Watch Demo), hero illustration/mockup
- **Features section**: 6 feature cards — Face Detection, Tab Switch Detection, Multiple Face Alerts, Audio Monitoring, Real-time Reporting, Identity Verification
- **How It Works**: 3-step visual flow (Create Exam → Students Join → AI Monitors)
- **Testimonials**: 3-4 cards with school/college admin quotes
- **FAQ section**: Accordion with common questions (privacy, browser support, pricing, etc.)
- **Footer**: Links, contact info, social icons

**Design**: Modern & minimal — white backgrounds, clean typography, subtle blue/indigo accents, generous whitespace

## Authentication
- Login/Signup pages using Supabase Auth (email + password)
- Role-based access: **Admin/Teacher** and **Student**
- Profile creation on signup (name, role, institution)

## Teacher/Admin Dashboard
- **Create Exam**: Title, duration, instructions, question bank (or paste questions)
- **Manage Exams**: List of exams with status (draft/active/completed)
- **Monitor Live Exams**: Real-time grid of student webcam feeds with AI violation alerts
- **View Reports**: Per-student proctoring report — flagged incidents (face not detected, tab switch, multiple faces, audio anomaly) with timestamps
- **Student Management**: Invite students, view enrolled students

## Student Dashboard
- **Upcoming Exams**: List of assigned exams with join button
- **Exam Interface**: Full-screen exam view with:
  - Webcam feed preview (small corner)
  - Question display with navigation
  - Timer
  - Submit button
- **Past Results**: View completed exams and any flagged violations

## AI Proctoring Features (Edge Functions + Client-side)
- **Face detection**: Webcam capture via browser API, periodic snapshots sent to AI (Lovable AI) to verify single face present
- **Tab switching detection**: Client-side visibility API to detect when student leaves the exam tab
- **Multiple face detection**: AI analyzes webcam frames for more than one person
- **Audio monitoring**: Browser microphone access, detect unusual audio patterns (talking, background noise) via AI analysis
- All violations logged to database with timestamps and screenshots

## Database (Supabase via Lovable Cloud)
- `profiles` — user info + institution
- `user_roles` — admin/teacher vs student roles
- `exams` — exam details, created by teacher
- `questions` — linked to exams
- `exam_sessions` — student taking an exam (start/end time, status)
- `violations` — flagged proctoring events with type, timestamp, screenshot URL
- `exam_results` — scores and completion status

## Edge Functions
- `analyze-frame` — sends webcam snapshot to Lovable AI for face detection/counting
- `analyze-audio` — processes audio clip for anomaly detection
- `generate-report` — compiles proctoring report for a student's exam session

