# BEFair - AI Powered Online Exam Proctoring System

BEFair is an AI-powered online examination and proctoring platform designed to ensure fair, secure, and cheat-free assessments. The system uses Computer Vision and Artificial Intelligence to monitor candidates during exams and detect suspicious activities in real-time.

## 🚀 Features

### Student Monitoring
- Real-time webcam monitoring
- Face detection and verification
- Head movement tracking
- Eye gaze detection
- Multiple face detection
- Phone/object detection
- Tab switching detection
- Full-screen monitoring
- Audio monitoring (optional)

### Exam Security
- Automatic violation logging
- Real-time alerts for suspicious behavior
- Screenshot evidence generation
- Session recording
- Risk score calculation
- Auto submission on severe violations

### Teacher/Admin Dashboard
- Create and manage exams
- Add MCQ and subjective questions
- Schedule exams
- View live exam sessions
- Access violation reports
- Student performance analytics
- Download exam reports

### Authentication System
- Student Login & Registration
- Teacher/Admin Login
- Secure JWT Authentication
- Role-based Access Control

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### AI & Computer Vision
- Python
- OpenCV
- MediaPipe
- TensorFlow
- Face Recognition
- YOLO Object Detection

## 📸 AI Proctoring Capabilities

The system continuously analyzes:

- Candidate face presence
- Head orientation
- Eye movements
- Looking away from screen
- Multiple people in frame
- Mobile phone usage
- Unauthorized objects
- Browser tab switching
- Exam window focus

If suspicious activity exceeds the allowed threshold, violations are recorded and reported to the administrator. AI-based monitoring is commonly used in online proctoring systems to help identify behaviors such as looking away, multiple faces, or switching contexts during exams. 0

## 📂 Project Structure

```
BEFair/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── services/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── ai-engine/
│   ├── face_detection/
│   ├── eye_tracking/
│   ├── object_detection/
│   └── violation_detection/
│
└── README.md
```

## 🔥 Workflow

1. Student logs into the platform.
2. Identity verification is performed.
3. Exam begins in secure mode.
4. AI continuously monitors candidate behavior.
5. Violations are detected and logged.
6. Reports are generated after exam completion.
7. Teachers review results and proctoring reports.

## 📊 Violation Categories

| Violation | Severity |
|------------|-----------|
| Looking Away | Medium |
| Head Movement | Medium |
| Multiple Faces | High |
| Mobile Phone Detection | High |
| Tab Switching | High |
| No Face Detected | Medium |
| Browser Minimized | High |

## 🎯 Future Enhancements

- Voice activity analysis
- ID card verification
- Liveness detection
- Emotion analysis
- AI-generated exam questions
- Advanced analytics dashboard
- Cloud deployment support
- Mobile application

## 🔒 Privacy & Security

BEFair prioritizes data security and examination integrity by:
- Encrypting user data
- Secure authentication
- Role-based permissions
- Protected exam sessions
- Secure report storage

## 👨‍💻 Contributors

Developed by the BEFair Team

### Team Members
- Frontend Developer
- Backend Developer
- AI/ML Engineer
- UI/UX Designer

## 📄 License

This project is licensed under the MIT License.

---

### "Ensuring Fair Exams Through Artificial Intelligence"

BEFair aims to create a trustworthy digital examination environment where students are evaluated based on knowledge rather than unfair practices.