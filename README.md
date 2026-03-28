# Aravind Dhakuri — Cybersecurity Portfolio

A SOC-themed cybersecurity portfolio showcasing my work as a **future SOC Analyst**, including:

- SQL Injection detection & mitigation using machine learning (TechBazaar)
- Practical experience with **Wazuh**, **Suricata**, **Wireshark**, and network tooling
- Animated, professional UI suitable for multinational-company reviewers

Live Project (TechBazaar): **https://mysqlidmtml.netlify.app/**

---

## Features

- Cinematic **loading intro screen**
- Live **background telemetry canvas** simulating SOC logs
- **Red alert** state every 10 seconds synced with metrics
- **Parallax** hero text + card interaction
- **Animated counters** (accuracy, logs analyzed, threats blocked)
- **Sticky scroll progress** indicator for sections
- **Case Study modal** for the TechBazaar project
- **Skills & tools** capability matrix
- **Security Telemetry** section with Wazuh / Suricata / Wireshark lab evidence
- Responsive, glassmorphism-inspired layout

---

## Project Structure

```bash
portfolio/
├── index.html
├── README.md
└── assets/
    └── images/
        ├── me.jpeg
        ├── homepage.png
        ├── MLtraining.png
        ├── Attacklogs.png
        ├── wiresharklogs.jpeg
        ├── suricatabruteforcelogs.jpeg
        ├── wiresharktcp21packets.jpeg
        └── wazuhbruteforceattack.jpeg
```

### Image Files

Place these exact files (names are **case-sensitive**):

- `me.jpeg` — profile photo
- `homepage.png` — TechBazaar storefront/home UI
- `MLtraining.png` — ML training dashboard screenshot
- `Attacklogs.png` — SQL injection attack logs screenshot
- `wiresharklogs.jpeg` — Wireshark + terminal view
- `suricatabruteforcelogs.jpeg` — Suricata brute-force alert logs
- `wiresharktcp21packets.jpeg` — TCP packet capture in Wireshark
- `wazuhbruteforceattack.jpeg` — Wazuh Security Events view

Each image is referenced from HTML as:

```html
<img src="./assets/images/<filename>" ...>
```

So the folder structure and filenames must match.

---

## Running the Portfolio Locally

### Option 1 — Open directly

1. Clone/download the repository
2. Double-click `index.html` to open in a browser

> Some animations (like scroll observers) will work best when served from a local server.

### Option 2 — VS Code Live Server (recommended)

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension
3. Right click `index.html` → **Open with Live Server**

---

## Deployment

You can deploy this portfolio easily to:

### GitHub Pages

1. Push the repo to GitHub (for example `Aravind93911/portfolio`)
2. In the repository:
   - Go to **Settings → Pages**
   - Set **Branch**: `main`
   - Set **Folder**: `/ (root)`
   - Save and wait for the deployment URL

### Netlify / Vercel

- Point them to the repository or drag-and-drop the folder
- No build step is required (static HTML + assets)

---

## Featured Project — TechBazaar

**TechBazaar — SQL Injection Detection & Mitigation Using ML**

Highlights:

- Client-side SQLD engine:
  - 14 weighted regex patterns
  - Levenshtein Edit Distance similarity
  - Confidence-based risk tiers (None → Critical)
- Python ML pipeline:
  - TF-IDF vectorization
  - RandomForestClassifier (100 estimators)
  - 96.8% accuracy, 97.2% precision, 96.4% recall, F1 = 0.95
- Backend hardening:
  - PostgreSQL parameterized queries
  - Prevents SQLi even if frontend is bypassed
- Admin dashboard:
  - Live monitor
  - Attack logs
  - ML training simulation
  - Dataset management

Live demo: **https://mysqlidmtml.netlify.app/**

---

## Education

- **B.E. — Computer Science & Engineering (IoT)**  
  Nawab Shah Alam Khan College of Engineering & Technology  
  2023 – Present | CGPA: **7.55**

- **Diploma — Electrical & Electronics Engineering**  
  Holy Mary Institute of Technology & Science  
  2019 – 2022 | CGPA: **9.1**

---

## Skills & Tools

### Security

- SQL Injection, XSS testing
- Threat monitoring & log analysis
- Defense-in-depth design
- Alert triage & incident investigation

### Tools

- Wazuh
- Suricata
- Wireshark
- Nmap, Whois, Traceroute

### Programming & Infra

- Python, JavaScript
- HTML5, CSS3
- Node.js, PostgreSQL
- Regex, Levenshtein edit distance

### ML & Data

- TF-IDF text vectorization
- Random Forest classification
- Model evaluation (Accuracy, Precision, Recall, F1)
- Dataset design & labeling

---

## Contact

**Aravind Dhakuri**  
Cybersecurity Student | Future SOC Analyst  

- Email: `aravinddhakuri@gmail.com`
- LinkedIn: [Aravind Dhakuri](https://www.linkedin.com/in/aravind-dhakuri-3a1880249/)
- GitHub: [Aravind93911](https://github.com/Aravind93911)

---

## License

This portfolio is for personal academic and professional showcase use.  
You may reference the design for inspiration, but please do not reuse the content or screenshots as your own.
