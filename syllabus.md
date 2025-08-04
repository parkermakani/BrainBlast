SYLLABUS
Title: Quantum & Nuclear Physics-Track (self-paced, simulation-driven)
Duration: 32 teaching weeks (≈ one academic year)
Prerequisites: Calculus I–III, differential equations, two introductory calculus-based physics courses
Format: Asynchronous lectures (open-course videos), weekly reading, problem sets, and Jupyter-notebook “virtual labs”
Assessment: Problem sets 40 % · Simulation notebooks 35 % · Two open-book exams 15 % · Capstone project 10 %

1. Course‐Level Learning Outcomes
Apply linear-algebra and operator formalism to solve non-relativistic quantum systems.

Implement numerical techniques (finite differences, diagonalisation, Monte-Carlo) to model quantum and nuclear phenomena.

Analyse nuclear structure, decay, and basic reactor kinetics quantitatively.

Communicate results in clear, reproducible computational notebooks.

2. Required Resources
Type	Title / Version
Core texts	Griffiths & Schroeter – Introduction to Quantum Mechanics (3e); Sakurai & Napolitano – Modern Quantum Mechanics (2e); Krane – Introductory Nuclear Physics
Math reference	Arfken, Weber & Harris – Mathematical Methods for Physicists (7e)
Software	Python 3.11, NumPy/SciPy/Matplotlib, SymPy, QuTiP, OpenMC, Git
Video playlists	MIT 8.04/8.05, Stanford Susskind QM, ANU Nuclear Physics
Optional	Newman – Computational Physics (2e)

3. Weekly Schedule
💡 Tip: Allocate ~8–10 h per week: 2 h reading, 3 h problems, 3 h coding/lab, 2 h review.

Week	Topics & Activities	Readings / Videos	Homework (due end of week)
SEMESTER 1			
1	Math Bootcamp I: vector spaces, eigen-value problems	Arfken §§1-3	P-set #1 (eigen-practice)
2	Math Bootcamp II: complex analysis, Fourier series	Arfken §§12-14	Lab #1 Dirac-notation identities (SymPy)
3	Probability & statistics in QM	Boas ch. 14; Feynman III-1	P-set #2
4	Modern Physics bridge: photoelectric, Compton	Tipler ch. 5, vids MIT 8.03-3	Mini-report: fit Planck’s h from photo-data
5	Wave-particle duality, de Broglie waves	Tipler ch. 6; Feynman III-2	P-set #3
6	Early atomic models; Franck–Hertz	Tipler ch. 7	Lab #2 Franck–Hertz analysis
7	Postulates of QM; 1-D infinite well	Griffiths ch. 1-2; MIT 8.04-L2	P-set #4
8	Harmonic oscillator, ladder operators	Griffiths ch. 2-§2	Lab #3 HO eigen-solver (FDM)
9	Schrödinger in 3-D; angular momentum	Griffiths ch. 3	P-set #5
10	Hydrogen atom	Griffiths ch. 4; Susskind Lect. 4	Lab #4 visualise H-atom orbitals (Mayavi)
11	Spin-½, Stern–Gerlach	Griffiths ch. 5	P-set #6
12	Identical particles; Pauli principle	Griffiths ch. 6	Lab #5 SG beam splitter (QuTiP)
13	Time-independent perturbation	Griffiths ch. 7	P-set #7
14	Review & practice exam	–	Mid-Semester Exam 1 (Weeks 1-13)
15	Variational & WKB methods (preview)	MIT 8.05-L8	Optional problems
16	Capstone A proposal due (pick tunnelling or chaos study)	–	Proposal 1-page
SEMESTER 2			
17	Operator formalism refresher; density matrices	Sakurai ch. 1	P-set #8
18	Symmetry & conservation (Noether in QM)	Sakurai ch. 2	Lab #6 Parity operator demo
19	Rotation groups & addition of angular momentum	Sakurai ch. 3	P-set #9
20	Approximation methods: WKB, variational	Sakurai ch. 5	Lab #7 WKB barrier tunnelling
21	Time-dependent perturbation; Rabi oscillations	Sakurai ch. 5-§5	P-set #10
22	Scattering theory; partial waves	Sakurai ch. 6	Lab #8 Phase-shift calculator
23	Nuclear structure basics	Krane ch. 2-3	P-set #11
24	Shell & liquid-drop models	Krane ch. 4-6	Lab #9 Binding-energy curve
25	Alpha, beta, gamma decay	Krane ch. 7-9	P-set #12
26	Radioactive series ODE simulation	–	Lab #10 Decay-chain animator
27	Nuclear reactions & cross-sections	Krane ch. 10-12	P-set #13
28	Monte-Carlo neutron transport (OpenMC intro)	OpenMC docs tutorials	Lab #11 Fuel-pin flux profile
29	Intro reactor kinetics; SCRAM transient	Lamarsh ch. 5-6 (opt.)	P-set #14
30	Special topics (choose): quantum info / QFT / many-body	Instructor-curated	Reflection essay
31	Capstone A final report & notebook	–	Submit & peer review
32	Comprehensive review & Exam 2	–	Final Exam 2 (Sem 2)

4. Grading Breakdown
Item	Weight	Notes
Weekly problem sets	40 %	Lowest score dropped
Lab notebooks (11)	35 %	Graded on clarity, correctness, reproducibility
Exams (2)	15 %	Open book, 48 h window
Capstone project	10 %	Proposal 10 %, final 90 %

5. Policies & Support
Late work: 72 h grace once per semester; otherwise −10 %/day.

Collaboration: Discuss concepts freely, but submit your own derivations/code.

Tools: You may use symbolic solvers for algebra checks, but show intermediate reasoning.

Help: Weekly office-hour thread on r/PhysicsStudents or Discord #quantum-syllabus.

6. Capstone Ideas (pick one)
Wave-packet tunnelling time analysis (QuTiP).

Quantum kicked-top chaos visualisation.

Point-kinetics SCRAM simulation with delayed neutrons.

Grover search on IBM 5-qubit vs. classical benchmark.

Deliverables: 8-page paper + fully annotated Jupyter notebook.

7. Reading Pace Tracker
Date	Target Chapter	Completed?
Wk 4	Tipler 7	□
Wk 10	Griffiths 4	□
Wk 18	Sakurai 2	□
Wk 26	Krane 9	□