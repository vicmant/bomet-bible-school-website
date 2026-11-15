
import { useState } from 'react'
import './App.css'

function App() {
  const [formMessage, setFormMessage] = useState('')
  const [enquiryMessage, setEnquiryMessage] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false)

  const diplomaSubjects = [
    {
      category: 'Biblical Studies',
      units: [
        'Old Testament Survey', 'New Testament Survey', 'Genesis',
        'Exodus', 'Deuteronomy', 'Joshua', 'Judges and Ruth',
        '1 and 2 Chronicles', 'Ezra and Nehemiah', 'Esther',
        'Job and Psalms', 'Proverbs and Ecclesiastes',
        'Isaiah and other prophetic books', 'Daniel and Ezekiel',
        'The Gospel of John', 'Acts of the Apostles', 'Romans',
        '1 and 2 Corinthians', 'Galatians', 'Pastoral Epistles',
        'James, 1 and 2 Peter, and Jude', 'Revelation'
      ]
    },
    {
      category: 'Theology and Christian Doctrine',
      units: [
        'Doctrine of God', 'Doctrine of Man', 'Doctrine of Salvation',
        'Confession of Faith', 'Eschatology',
        'Covenant versus Dispensational Theology', 'Christian Ethics',
        'Calvin’s Institutes', 'Christian Family Living'
      ]
    },
    {
      category: 'Pastoral and Ministry Studies',
      units: [
        'Pastoral Theology', 'Homiletics', 'Personal Evangelism',
        'Church Evangelism', 'Discipleship', 'Spiritual Leadership',
        'Church Planting', 'Biblical Missions', 'Biblical Worship',
        'Pastoral Counselling', 'Church Administration',
        'Sermon on the Mount'
      ]
    },
    {
      category: 'Church History and Related Studies',
      units: [
        'Church History', 'Church History in Africa',
        'Inter-Testamentary History', 'History of the Bible',
        'Roman Catholicism',
        'African Traditional Religion versus Christianity',
        'Ecumenism'
      ]
    },
    {
      category: 'Biblical Languages and Interpretation',
      units: [
        'Hebrew Grammar', 'Hebrew Reading',
        'Introduction to New Testament Greek', 'Greek Exegesis',
        'Old Testament Archaeology', 'Bible and Science'
      ]
    },
    {
      category: 'Christian Education and General Studies',
      units: [
        'Christian Education', 'Child Evangelism', 'Youth Ministry',
        'Teaching Methods', 'Christian School Administration',
        'English Grammar', 'English Composition',
        'English Oral Communication', 'English Literature',
        'Kiswahili', 'Computer Literacy',
        'Research Methodology and Writing', 'Research Paper',
        'Writing for Publications', 'Music'
      ]
    }
  ]

  const trainingValues = [
    {
      title: 'Biblical Foundation',
      description: 'Giving priority to the careful study and understanding of the Holy Scriptures.'
    },
    {
      title: 'Christian Character',
      description: 'Encouraging spiritual maturity, integrity and a life consistent with Christian teaching.'
    },
    {
      title: 'Ministry Preparation',
      description: 'Preparing Christian workers for faithful service in the Church and community.'
    }
  ]

  const announcements = [
    {
      category: 'Admissions',
      title: 'Admissions Information',
      description: 'Prospective students interested in the Diploma or Certificate in Bible Studies are encouraged to contact the school for current admission requirements and intake information.'
    },
    {
      category: 'Academic Information',
      title: 'Programme Information',
      description: 'Students and prospective applicants can contact the school for information about programmes, course arrangements and academic requirements.'
    },
    {
      category: 'General Notice',
      title: 'Stay Connected with the School',
      description: 'For school updates and important information, please use the contact details provided on this website.'
    }
  ]

  const galleryImages = [
    {
      src: '/images/school-ceremony.jpg',
      title: 'School Ceremonies',
      description: 'Special occasions in the life of Bomet Bible School.'
    },
    {
      src: '/images/classroom.jpg',
      title: 'Learning Activities',
      description: 'A glimpse into the school learning environment.'
    },
    {
      src: '/images/graduation.jpg',
      title: 'Graduation Celebrations',
      description: 'Celebrating academic achievement and ministry preparation.'
    },
    {
      src: '/images/students.jpg',
      title: 'Our Students',
      description: 'Students sharing in the journey of Biblical education.'
    }
  ]

  const faqs = [
    {
      question: 'Which programmes does Bomet Bible School offer?',
      answer: 'Bomet Bible School offers two programmes: Diploma in Bible Studies and Certificate in Bible Studies.'
    },
    {
      question: 'How long does the Diploma programme take?',
      answer: 'The Diploma in Bible Studies takes approximately four years. Prospective students should confirm the current study arrangements with the school.'
    },
    {
      question: 'How long does the Certificate programme take?',
      answer: 'The Certificate in Bible Studies takes approximately two years. Please contact the school to confirm the current programme arrangements.'
    },
    {
      question: 'What is the difference between the Diploma and Certificate programmes?',
      answer: 'The Diploma is a longer programme of Biblical and theological studies. The Certificate offers selected studies from the Diploma curriculum according to the school’s programme arrangements.'
    },
    {
      question: 'What subjects are covered in the Diploma programme?',
      answer: 'Historical curriculum records include Biblical Studies, Christian Doctrine, Pastoral and Ministry Studies, Church History, Biblical Languages, Christian Education and General Studies. The current approved curriculum should be confirmed with the school.'
    },
    {
      question: 'How can I apply for admission?',
      answer: 'Prospective students can contact the school directly to obtain current admission requirements, application procedures and information about available intakes.'
    },
    {
      question: 'How much are the school fees?',
      answer: 'Current fees have not been published on this website. Please contact the school directly for the latest fees and payment arrangements.'
    },
    {
      question: 'When does the next intake begin?',
      answer: 'Please contact the school for information about the next available intake and application deadlines.'
    },
    {
      question: 'How can I contact Bomet Bible School?',
      answer: 'You can contact Rev. Dr. Michael Koech by telephone on +254 724 365216 or through the WhatsApp link provided in the Contact section.'
    }
  ]

  const fieldStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '7px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    fontSize: '15px',
    fontFamily: 'inherit'
  }

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginTop: '8px'
  }

  const messageStyle = {
    marginTop: '18px',
    padding: '15px',
    background: '#f1f5e9',
    color: '#263b24',
    border: '1px solid #b8cba8',
    borderRadius: '5px',
    lineHeight: '1.7'
  }

  // STUDENT APPLICATION SUBMISSION
  const handleApplication = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    if (isSubmittingApplication || applicationSubmitted) {
      return
    }

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmittingApplication(true)
    setFormMessage('')

    try {
      const formData = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      })

      if (!response.ok) {
        throw new Error('Application submission failed')
      }

      setApplicationSubmitted(true)

      setFormMessage(
        'Thank you for applying to Bomet Bible School. Your application has been received successfully. The school will contact you using the details you provided.'
      )

    } catch (error) {
      setFormMessage(
        'We could not submit your application at this time. Please try again or contact the school on +254 724 365216.'
      )
    } finally {
      setIsSubmittingApplication(false)
    }
  }

  // GENERAL SCHOOL ENQUIRY SUBMISSION
  const handleEnquiry = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    if (isSubmittingEnquiry) {
      return
    }

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmittingEnquiry(true)
    setEnquiryMessage('')

    try {
      const formData = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      })

      if (!response.ok) {
        throw new Error('Enquiry submission failed')
      }

      setEnquiryMessage(
        'Thank you for contacting Bomet Bible School. Your enquiry has been submitted successfully. The school can follow up using the contact details you provided.'
      )

      form.reset()

    } catch (error) {
      setEnquiryMessage(
        'We could not submit your enquiry at this time. Please try again or contact the school on +254 724 365216.'
      )
    } finally {
      setIsSubmittingEnquiry(false)
    }
  }

  return (
    <div className="website">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="/images/school-logo.png"
            alt="Bomet Bible School emblem"
          />
          <div>
            <h2>BOMET BIBLE SCHOOL</h2>
            <p>Equipping Servants for Christian Ministry</p>
          </div>
        </div>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#history">Our History</a>
          <a href="#training">Training</a>
          <a href="#programmes">Programmes</a>
          <a href="#announcements">Announcements</a>
          <a href="#gallery">Gallery</a>
          <a href="#admissions">Admissions</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* HOME */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">
              WELCOME TO BOMET BIBLE SCHOOL, KENYA
            </p>

            <h1>
              Bomet Bible School: Biblical Studies and Christian Ministry Training in Kenya
            </h1>

            <h3>
              Biblical Education. Christian Character. Ministry Preparation.
            </h3>

            <p>
              Welcome to Bomet Bible School in Bomet, Kenya, a centre
              for Biblical and theological education. Explore our
              Diploma in Bible Studies and Certificate in Bible Studies
              programmes, designed to encourage Biblical understanding,
              Christian growth and preparation for faithful service
              in the Church and wider community.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '25px'
            }}>
              <a className="hero-button" href="#programmes">
                Explore Our Programmes
              </a>
              <a className="hero-button" href="#admissions">
                Admission Information
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/images/school-ceremony.jpg"
              alt="School ceremony at Bomet Bible School in Bomet, Kenya"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <h2>About Bomet Bible School in Kenya</h2>

          <p>
            Bomet Bible School is located in Bomet, Kenya, and is
            associated with a longstanding tradition of Biblical
            and theological training. Historical publications
            identify the institution as Bomet Bible Institute (BBI),
            with connections to Africa Gospel Unity Church (AGUC).
          </p>

          <p>
            The institution's historical purpose has been to prepare
            pastors, lay preachers, Bible teachers and other Christian
            workers through the study of Scripture and theological
            education.
          </p>

          <p>
            For those exploring Bible schools in Kenya, Bomet Bible
            School provides information about its Diploma in Bible
            Studies and Certificate in Bible Studies programmes.
            Its educational emphasis includes Biblical learning,
            spiritual development and preparation for Christian
            ministry.
          </p>
        </section>

        {/* HISTORY */}
        <section className="admissions" id="history">
          <h2>Our History</h2>

          <p>
            Historical testimony by Rev. Michael Koech traces
            the vision behind Bomet Bible Institute to the
            early 1970s. The formal opening of the institute
            is recorded as January 1987, when it began with
            an initial enrolment of five students.
          </p>

          <p>
            The founding vision is associated with the late
            Rev. Dishon Kesembe, while Dr Raymond Carlson
            is identified in the historical account as the
            first principal.
          </p>

          <p>
            Over the years, the institute developed its
            theological training activities to serve the
            needs of churches and Christian workers.
          </p>

          <p>
            Historical accounts also document studies in
            Biblical languages, including Hebrew and Greek,
            alongside theological and ministry-related subjects.
          </p>
        </section>

        {/* TRAINING PHILOSOPHY */}
        <section className="programmes" id="training">
          <h2>Our Training Philosophy</h2>

          <div className="programme-cards">
            {trainingValues.map((item) => (
              <div className="programme-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC PROGRAMMES */}
        <section className="about" id="programmes">
          <h2>Diploma and Certificate in Bible Studies</h2>

          <p>
            Bomet Bible School offers two programmes in Biblical
            and theological education: the Diploma in Bible Studies
            and the Certificate in Bible Studies. These programmes
            are intended to develop Biblical knowledge, Christian
            character and preparation for ministry.
          </p>

          <div className="programme-cards">

            <div className="programme-card">
              <h3>Diploma in Bible Studies in Kenya</h3>

              <p>
                The Diploma in Bible Studies is a programme of
                Biblical and theological studies intended to equip
                students with a deeper understanding of Scripture
                and prepare them for Christian ministry and service.
              </p>

              <p>
                <strong>Duration:</strong> Approximately 4 years
              </p>

              <details style={{ marginTop: '15px' }}>
                <summary style={{
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Explore Diploma subject areas
                </summary>

                <div style={{ marginTop: '15px' }}>
                  <p>
                    These subject areas are drawn from a historical
                    school transcript and are provided as a
                    curriculum reference.
                  </p>

                  {diplomaSubjects.map((group) => (
                    <details
                      key={group.category}
                      style={{ marginBottom: '12px' }}
                    >
                      <summary style={{
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}>
                        {group.category}
                      </summary>

                      <ul style={{
                        paddingLeft: '22px',
                        marginTop: '10px'
                      }}>
                        {group.units.map((unit) => (
                          <li key={unit}>{unit}</li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </details>
            </div>

            <div className="programme-card">
              <h3>Certificate in Bible Studies in Kenya</h3>

              <p>
                The Certificate in Bible Studies is an approximately
                two-year programme offering selected studies from
                the Diploma in Bible Studies curriculum. It provides
                foundational Biblical and theological education to
                encourage Christian growth and prepare students
                for faithful service in the Church.
              </p>

              <p>
                <strong>Duration:</strong> Approximately 2 years
              </p>

              <p>
                <strong>Curriculum:</strong> Selected studies
                from the Diploma curriculum, according to the
                school's programme arrangements.
              </p>
            </div>
          </div>

          <p style={{ marginTop: '20px' }}>
            <em>
              Note: Diploma subject areas shown here are based
              on a historical transcript. The current approved
              curriculum and unit distribution should be
              confirmed by the school.
            </em>
          </p>
        </section>

        {/* ANNOUNCEMENTS */}
        <section className="programmes" id="announcements">
          <h2>School Announcements</h2>

          <p>
            Find important information and updates relating to
            Bomet Bible School.
          </p>

          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            fontStyle: 'italic'
          }}>
            The notices below are sample demonstrations and
            are not official school announcements.
          </p>

          <div className="programme-cards">
            {announcements.map((item) => (
              <div className="programme-card" key={item.title}>
                <p style={{
                  color: '#a47b32',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  textTransform: 'uppercase'
                }}>
                  {item.category}
                </p>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section className="about" id="gallery">
          <h2>Our Photo Gallery</h2>

          <p>
            Explore photographs of school life, learning activities
            and celebrations at Bomet Bible School in Bomet, Kenya.
          </p>

          <p style={{
            textAlign: 'center',
            fontSize: '14px',
            marginTop: '15px'
          }}>
            Select any photograph to view it in a larger size.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '22px',
            marginTop: '30px'
          }}>
            {galleryImages.map((item) => (
              <div
                className="programme-card"
                key={item.src}
                style={{ overflow: 'hidden' }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Enlarge ${item.title} photograph`}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'zoom-in'
                  }}
                >
                  <img
                    src={item.src}
                    alt={`${item.title} at Bomet Bible School`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                    style={{
                      width: '100%',
                      height: '230px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      display: 'block'
                    }}
                  />
                </button>

                <h3 style={{ marginTop: '15px' }}>
                  {item.title}
                </h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '14px'
          }}>
            Celebrating Biblical education, fellowship and Christian service.
          </p>
        </section>

        {/* ENLARGED PHOTO VIEW */}
        {selectedImage && (
          <div
            role="presentation"
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.title}
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '1000px',
                width: '100%',
                maxHeight: '90vh',
                textAlign: 'center'
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close enlarged photograph"
                style={{
                  position: 'absolute',
                  top: '-42px',
                  right: 0,
                  border: 'none',
                  background: '#ffffff',
                  color: '#17243a',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>

              <img
                src={selectedImage.src}
                alt={`${selectedImage.title} at Bomet Bible School`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />

              <h3 style={{
                color: '#ffffff',
                marginTop: '15px'
              }}>
                {selectedImage.title}
              </h3>

              <p style={{ color: '#eeeeee' }}>
                {selectedImage.description}
              </p>

              <p style={{
                color: '#cccccc',
                fontSize: '13px'
              }}>
                Click outside the photograph or the × button to close.
              </p>
            </div>
          </div>
        )}

        {/* ADMISSIONS */}
        <section className="admissions" id="admissions">
          <h2>Admissions at Bomet Bible School</h2>

          <p>
            Are you interested in pursuing Biblical and
            theological studies at Bomet Bible School in Kenya?
          </p>

          <p>
            The school welcomes prospective students who desire
            to grow in Biblical understanding and prepare for
            Christian service.
          </p>

          <div className="programme-cards">
            <div className="programme-card">
              <h3>Choose Your Programme</h3>

              <p>
                Explore the Diploma in Bible Studies and
                Certificate in Bible Studies to identify
                the programme you wish to pursue.
              </p>

              <a className="hero-button" href="#programmes">
                View Programmes
              </a>
            </div>

            <div className="programme-card">
              <h3>Make an Enquiry</h3>

              <p>
                Contact the school to obtain information about
                admission requirements, application procedures,
                fees and the next available intake.
              </p>

              <a className="hero-button" href="#contact">
                Contact the School
              </a>
            </div>
          </div>

          <p style={{ marginTop: '20px' }}>
            Prospective students are encouraged to confirm
            current admission arrangements directly with
            the school before applying.
          </p>

          {/* APPLICATION FORM */}
          <div className="programme-card" style={{
            maxWidth: '720px',
            margin: '35px auto',
            textAlign: 'left',
            padding: '25px'
          }}>
            <h2 style={{ textAlign: 'center' }}>
              Prospective Student Application
            </h2>

            <p>
              Complete the details below to prepare your application.
              Required fields are marked with an asterisk (*).
            </p>

            {applicationSubmitted ? (
              <div
                role="status"
                aria-live="polite"
                style={{
                  ...messageStyle,
                  textAlign: 'center',
                  fontSize: '16px',
                  padding: '24px'
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  Application Received Successfully!
                </h3>

                <p>{formMessage}</p>

                <p>
                  Thank you for your interest in studying at Bomet Bible School.
                </p>
              </div>
            ) : (
              <form
                name="student-application"
                method="POST"
                data-netlify="true"
                onSubmit={handleApplication}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="student-application"
                />

                <label htmlFor="app-full-name" style={labelStyle}>
                  Full Name *
                </label>

                <input
                  id="app-full-name"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  style={fieldStyle}
                />

                <label htmlFor="app-phone" style={labelStyle}>
                  Phone Number *
                </label>

                <input
                  id="app-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="e.g. 07XXXXXXXX"
                  required
                  style={fieldStyle}
                />

                <label htmlFor="app-email" style={labelStyle}>
                  Email Address
                </label>

                <input
                  id="app-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email address (optional)"
                  style={fieldStyle}
                />

                <label htmlFor="app-programme" style={labelStyle}>
                  Programme Applying For *
                </label>

                <select
                  id="app-programme"
                  name="programme"
                  required
                  defaultValue=""
                  style={fieldStyle}
                >
                  <option value="" disabled>Select a programme</option>
                  <option value="Diploma in Bible Studies">
                    Diploma in Bible Studies
                  </option>
                  <option value="Certificate in Bible Studies">
                    Certificate in Bible Studies
                  </option>
                </select>

                <label htmlFor="app-education" style={labelStyle}>
                  Highest Level of Education *
                </label>

                <select
                  id="app-education"
                  name="education"
                  required
                  defaultValue=""
                  style={fieldStyle}
                >
                  <option value="" disabled>
                    Select your education level
                  </option>
                  <option value="Primary Education">Primary Education</option>
                  <option value="Secondary Education">Secondary Education</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Degree">Degree</option>
                  <option value="Other">Other</option>
                </select>

                <label htmlFor="app-church" style={labelStyle}>
                  Church or Ministry Affiliation
                </label>

                <input
                  id="app-church"
                  type="text"
                  name="church"
                  autoComplete="organization"
                  placeholder="Enter your church or ministry (optional)"
                  style={fieldStyle}
                />

                <label htmlFor="app-statement" style={labelStyle}>
                  Why would you like to study at Bomet Bible School?
                </label>

                <textarea
                  id="app-statement"
                  name="statement"
                  rows="4"
                  placeholder="Briefly tell us about your interest in Biblical studies and Christian ministry."
                  style={{ ...fieldStyle, resize: 'vertical' }}
                />

                <p style={{
                  fontSize: '13px',
                  marginBottom: '18px'
                }}>
                  By submitting this form, you send your application details
                  to Bomet Bible School for admission follow-up.
                </p>

                {formMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    style={{
                      ...messageStyle,
                      background: '#fff0f0',
                      color: '#8b1e1e',
                      borderColor: '#e3b2b2',
                      marginBottom: '18px'
                    }}
                  >
                    {formMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="hero-button"
                  disabled={isSubmittingApplication}
                  style={{
                    display: 'block',
                    border: 'none',
                    cursor: isSubmittingApplication ? 'wait' : 'pointer',
                    width: '100%',
                    padding: '13px',
                    opacity: isSubmittingApplication ? 0.7 : 1
                  }}
                >
                  {isSubmittingApplication
                    ? 'Submitting Application...'
                    : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="programmes" id="faqs">
          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to common questions about studying
            at Bomet Bible School in Bomet, Kenya.
          </p>

          <div style={{
            maxWidth: '850px',
            margin: '30px auto 0',
            textAlign: 'left'
          }}>
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="programme-card"
                style={{
                  marginBottom: '14px',
                  padding: '18px 22px',
                  borderLeft: '4px solid #a47b32'
                }}
              >
                <summary style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  {index + 1}. {item.question}
                </summary>

                <p style={{
                  marginTop: '15px',
                  lineHeight: '1.8'
                }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '25px'
          }}>
            <p>Have another question? We will be glad to assist you.</p>
            <a className="hero-button" href="#contact">
              Contact the School
            </a>
          </div>
        </section>

        {/* CONTACT AND ENQUIRY */}
        <section className="contact" id="contact">
          <h2>Contact Bomet Bible School, Bomet, Kenya</h2>

          <p>
            We welcome enquiries from prospective students,
            churches and ministry partners interested in
            Biblical and theological education.
          </p>

          {/* ENQUIRY FORM */}
          <div className="programme-card" style={{
            maxWidth: '720px',
            margin: '30px auto',
            textAlign: 'left',
            padding: '25px'
          }}>
            <h2 style={{ textAlign: 'center' }}>
              Send Us an Enquiry
            </h2>

            <p>
              Complete the form below to prepare your enquiry
              about programmes, admissions or other school matters.
            </p>

            <form
              name="school-enquiry"
              method="POST"
              data-netlify="true"
              onSubmit={handleEnquiry}
            >
              <input
                type="hidden"
                name="form-name"
                value="school-enquiry"
              />

              <label htmlFor="enquiry-full-name" style={labelStyle}>
                Full Name *
              </label>

              <input
                id="enquiry-full-name"
                type="text"
                name="enquiryName"
                autoComplete="name"
                placeholder="Enter your full name"
                required
                style={fieldStyle}
              />

              <label htmlFor="enquiry-phone" style={labelStyle}>
                Phone Number *
              </label>

              <input
                id="enquiry-phone"
                type="tel"
                name="enquiryPhone"
                autoComplete="tel"
                placeholder="e.g. 07XXXXXXXX"
                required
                style={fieldStyle}
              />

              <label htmlFor="enquiry-email" style={labelStyle}>
                Email Address
              </label>

              <input
                id="enquiry-email"
                type="email"
                name="enquiryEmail"
                autoComplete="email"
                placeholder="Enter your email address (optional)"
                style={fieldStyle}
              />

              <label htmlFor="enquiry-subject" style={labelStyle}>
                Subject of Enquiry *
              </label>

              <select
                id="enquiry-subject"
                name="enquirySubject"
                required
                defaultValue=""
                style={fieldStyle}
              >
                <option value="" disabled>
                  Select your enquiry subject
                </option>
                <option value="Admissions">Admissions</option>
                <option value="Diploma Programme">Diploma Programme</option>
                <option value="Certificate Programme">
                  Certificate Programme
                </option>
                <option value="Fees">Fees and Payment</option>
                <option value="General Information">
                  General Information
                </option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="enquiry-message" style={labelStyle}>
                Your Message *
              </label>

              <textarea
                id="enquiry-message"
                name="enquiryText"
                rows="5"
                placeholder="Write your enquiry here..."
                required
                style={{ ...fieldStyle, resize: 'vertical' }}
              />

              <p style={{
                fontSize: '13px',
                marginBottom: '18px'
              }}>
                By submitting this form, you send your enquiry to
                Bomet Bible School for a response.
              </p>

              <button
                type="submit"
                className="hero-button"
                disabled={isSubmittingEnquiry}
                style={{
                  display: 'block',
                  border: 'none',
                  cursor: isSubmittingEnquiry ? 'wait' : 'pointer',
                  width: '100%',
                  padding: '13px',
                  opacity: isSubmittingEnquiry ? 0.7 : 1
                }}
              >
                {isSubmittingEnquiry ? 'Sending Enquiry...' : 'Send Enquiry'}
              </button>

              {enquiryMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  style={messageStyle}
                >
                  <strong>Enquiry status</strong>
                  <p>{enquiryMessage}</p>
                </div>
              )}
            </form>
          </div>

          {/* SCHOOL CONTACT DETAILS */}
          <div className="programme-card" style={{
            maxWidth: '520px',
            margin: '25px auto',
            textAlign: 'left'
          }}>
            <h3>Enquiries and Further Information</h3>

            <p><strong>Rev. Dr. Michael Koech</strong></p>
            <p>Principal, Bomet Bible Institute</p>
            <p>Bomet, Kenya</p>

            <p>
              <strong>Postal Address:</strong> P.O. Box 33-20400,
              Bomet, Kenya
            </p>

            <p>
              <strong>Telephone:</strong>{' '}
              <a href="tel:+254724365216">
                +254 724 365216
              </a>
            </p>

            <a
              className="hero-button"
              href="tel:+254724365216"
              style={{
                display: 'inline-block',
                margin: '12px 10px 0 0'
              }}
            >
              Call for Enquiries
            </a>

            <a
              className="hero-button"
              href="https://wa.me/254724365216?text=Hello%20Rev.%20Michael%2C%20I%20would%20like%20to%20enquire%20about%20Bomet%20Bible%20School."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '12px'
              }}
            >
              WhatsApp Enquiry
            </a>
          </div>

          <p>
            Please confirm current admission arrangements
            and contact availability before making an application.
          </p>
        </section>
      </main>

      {/* PROFESSIONAL FOOTER */}
      <footer style={{
        background: '#10243e',
        color: '#ffffff',
        padding: '45px 7% 20px',
        marginTop: '30px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '35px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            <img
              src="/images/school-logo.png"
              alt="Bomet Bible School emblem"
              style={{
                width: '90px',
                height: '90px',
                objectFit: 'contain',
                background: '#ffffff',
                borderRadius: '50%',
                padding: '5px'
              }}
            />

            <h3 style={{
              color: '#d6ad55',
              marginTop: '15px'
            }}>
              BOMET BIBLE SCHOOL
            </h3>

            <p style={{ lineHeight: '1.8' }}>
              Equipping Servants for Christian Ministry.
              Committed to Biblical education, Christian
              character and preparation for ministry in Kenya.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#d6ad55' }}>Quick Links</h3>

            {[
              ['Home', '#home'],
              ['About Us', '#about'],
              ['Our History', '#history'],
              ['Training Philosophy', '#training'],
              ['Academic Programmes', '#programmes'],
              ['Announcements', '#announcements'],
              ['Photo Gallery', '#gallery'],
              ['Admissions', '#admissions'],
              ['Frequently Asked Questions', '#faqs'],
              ['Contact Us', '#contact']
            ].map(([label, link]) => (
              <p key={label} style={{ margin: '10px 0' }}>
                <a
                  href={link}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none'
                  }}
                >
                  {label}
                </a>
              </p>
            ))}
          </div>

          <div>
            <h3 style={{ color: '#d6ad55' }}>
              Our Programmes
            </h3>

            <p>Diploma in Bible Studies</p>
            <p>Certificate in Bible Studies</p>

            <p style={{ lineHeight: '1.8' }}>
              Contact the school for current admission
              requirements, fees and intake information.
            </p>

            <a
              href="#admissions"
              className="hero-button"
              style={{
                display: 'inline-block',
                marginTop: '10px'
              }}
            >
              Admissions
            </a>
          </div>

          <div>
            <h3 style={{ color: '#d6ad55' }}>
              Contact Information
            </h3>

            <p><strong>Rev. Dr. Michael Koech</strong></p>
            <p>Principal, Bomet Bible Institute</p>
            <p>Bomet, Kenya</p>

            <p>
              P.O. Box 33-20400,
              <br />
              Bomet, Kenya
            </p>

            <p>
              Telephone:
              <br />
              <a
                href="tel:+254724365216"
                style={{ color: '#ffffff' }}
              >
                +254 724 365216
              </a>
            </p>

            <a
              href="https://wa.me/254724365216"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
              style={{
                display: 'inline-block',
                marginTop: '8px'
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          marginTop: '35px',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <p>
            © {new Date().getFullYear()} Bomet Bible School.
            All rights reserved.
          </p>

          <p style={{ color: '#d6ad55' }}>
            Equipping Servants for Christian Ministry
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
