import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_resume(output_path):
    # Set document margins (half inch for compact but readable layout)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=1, # Center
        textColor=colors.HexColor('#000000'),
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'ResumeSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=12,
        alignment=1, # Center
        textColor=colors.HexColor('#333333'),
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#000000'),
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    job_title = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#000000'),
        keepWithNext=True
    )

    job_meta = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor('#444444'),
        keepWithNext=True
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#222222'),
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2
    )

    story = []

    # Title & Contact
    story.append(Paragraph("SANKARAGURU V", title_style))
    story.append(Paragraph("+91 8072413070 | sankaraguruv36@gmail.com | Pollachi, Tamil Nadu, India", subtitle_style))
    story.append(Spacer(1, 4))

    # Helper function to add Section Line
    def add_section_header(title):
        p = Paragraph(title, section_heading)
        t = Table([[p]], colWidths=[540])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 1, colors.HexColor('#000000')),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
            ('TOPPADDING', (0,0), (-1,-1), 2),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
        story.append(Spacer(1, 4))

    # --- EXPERIENCE ---
    add_section_header("EXPERIENCE")
    
    # Job 1
    story.append(Paragraph("TRIGENT — Bangalore", job_title))
    story.append(Paragraph("Gen AI Intern | Feb 2026 – Apr 2026", job_meta))
    story.append(Paragraph("&bull; Built AI-powered workflows and automation solutions using n8n, Flowise, Python, and TensorFlow.", bullet_style))
    story.append(Paragraph("&bull; Developed and tested conversational AI applications, chatbots, and intelligent automation pipelines.", bullet_style))
    story.append(Paragraph("&bull; Worked with data processing, visualization, and predictive analytics to create AI-driven solutions.", bullet_style))
    story.append(Paragraph("&bull; Gained hands-on experience in Generative AI, LLMs, prompt engineering, and real-world AI deployment.", bullet_style))
    story.append(Spacer(1, 6))

    # Job 2
    story.append(Paragraph("Yamaha — Pollachi", job_title))
    story.append(Paragraph("Spare Parts Manager | Apr 2024 – May 2024", job_meta))
    story.append(Paragraph("&bull; Supervised daily spare-parts operations within the service department, ensuring uninterrupted availability of materials for repair and maintenance tasks.", bullet_style))
    story.append(Paragraph("&bull; Coordinated with multiple suppliers to maintain accurate stock levels, prevent shortages, and enhance supplier communication efficiency.", bullet_style))
    story.append(Paragraph("&bull; Designed and implemented a structured Excel-based cataloging and tracking system that reduced spare part retrieval time by approximately 20% and improved workflow.", bullet_style))
    story.append(Paragraph("&bull; Ensured compliance with Yamaha's quality standards by verifying new stock materials and maintaining detailed documentation.", bullet_style))
    story.append(Spacer(1, 6))

    # Job 3
    story.append(Paragraph("ROYAL ENFIELD — Chennai", job_title))
    story.append(Paragraph("Quality & Spare Parts Management | Apr 2023 – Dec 2023", job_meta))
    story.append(Paragraph("&bull; Supported quality assurance processes by validating components and contributing to root-cause analysis reports.", bullet_style))
    story.append(Paragraph("&bull; Tracked and maintained inventory using Excel, improving data accuracy and preventing shortages of high-demand parts.", bullet_style))
    story.append(Paragraph("&bull; Partnered with suppliers and service technicians to identify frequently required components, streamlining reorders and reducing downtime.", bullet_style))
    story.append(Paragraph("&bull; Introduced a simple monitoring system for spare-parts flow, improving coordination between logistics and quality units.", bullet_style))
    story.append(Spacer(1, 6))

    # --- EDUCATION ---
    add_section_header("EDUCATION")
    
    # Edu 1
    story.append(Paragraph("Dr. Mahalingam College of Engineering and Technology, Anna University — Pollachi", job_title))
    story.append(Paragraph("Bachelor of Technology in Artificial Intelligence and Data Science | CGPA: 7.3 | Jul 2024 – Jun 2027", job_meta))
    story.append(Paragraph("&bull; Studying core concepts in machine learning, deep learning, data analysis, and natural language processing.", bullet_style))
    story.append(Paragraph("&bull; Gaining hands-on experience with Python, TensorFlow, and data visualization tools.", bullet_style))
    story.append(Paragraph("&bull; Learning to design AI-driven applications and implement data-driven decision systems.", bullet_style))
    story.append(Paragraph("&bull; Conducting projects focused on real-world AI solutions, including chatbots and predictive analytics.", bullet_style))
    story.append(Spacer(1, 6))

    # Edu 2
    story.append(Paragraph("Sri Ramakrishna Polytechnic College — Coimbatore", job_title))
    story.append(Paragraph("Diploma in Mechanical Engineering | Percentage: 80% | Jul 2020 – Jun 2023", job_meta))
    story.append(Paragraph("&bull; Studied mechanics, thermodynamics, manufacturing processes, and CAD design.", bullet_style))
    story.append(Paragraph("&bull; Learned principles of machine maintenance, production planning, and quality control.", bullet_style))
    story.append(Spacer(1, 6))

    # Edu 3
    story.append(Paragraph("Sahayamatha Matriculation Higher Secondary School — Karaikudi", job_title))
    story.append(Paragraph("Secondary School Leaving Certificate (SSLC) | Percentage: 73% | Jun 2019 – Apr 2020", job_meta))
    story.append(Paragraph("&bull; Completed foundational education with emphasis on mathematics, science, and computer fundamentals.", bullet_style))
    story.append(Paragraph("&bull; Actively participated in science fairs and team-based technical activities.", bullet_style))
    story.append(Spacer(1, 6))

    # --- PROJECTS ---
    add_section_header("PROJECTS")
    
    # Project 1
    story.append(Paragraph("Automated Fire-Extinguishing Robot", job_title))
    story.append(Paragraph("Arduino, ESP32, C Programming", job_meta))
    story.append(Paragraph("&bull; Built an autonomous robot with real-time flame detection and suppression, integrating wireless control and temperature sensors.", bullet_style))
    story.append(Paragraph("&bull; Demonstrated the system at a technical event, achieving precise flame detection and automatic response accuracy.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 2
    story.append(Paragraph("AI Legal Chatbot", job_title))
    story.append(Paragraph("Python, NLP, OpenAI API, Flask", job_meta))
    story.append(Paragraph("&bull; Developed a conversational chatbot capable of answering legal queries using NLP and contextual AI models.", bullet_style))
    story.append(Paragraph("&bull; Deployed via Flask-based web interface for real-time user interaction and dynamic query handling.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 3
    story.append(Paragraph("Rockfall Prediction System", job_title))
    story.append(Paragraph("Python, Machine Learning, Pandas, Scikit-learn", job_meta))
    story.append(Paragraph("&bull; Designed an ML model to predict rockfall risk zones based on environmental and geological datasets.", bullet_style))
    story.append(Paragraph("&bull; Enhanced model accuracy using feature engineering and visualized outcomes for risk assessment.", bullet_style))
    story.append(Spacer(1, 6))

    # --- ADDITIONAL ---
    add_section_header("ADDITIONAL")
    story.append(Paragraph("NEHA Solutions — Python with AI", job_title))
    story.append(Paragraph("&bull; Gained hands-on experience in Python programming, model training, and data automation using AI tools.", bullet_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("SAM Injection Moulding — Engineering Intern", job_title))
    story.append(Paragraph("&bull; Assisted in production quality checks and process documentation, learning industrial standards and workflow management.", bullet_style))

    doc.build(story)
    print("Resume PDF generated successfully!")

if __name__ == '__main__':
    create_resume('public/m.pdf')
