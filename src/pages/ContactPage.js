import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import ComprehensiveFooter from '../components/ComprehensiveFooter/ComprehensiveFooter';

const PageContainer = styled.div`
  padding-top: 0;
`;

const BreadcrumbBar = styled.div`
  background: #f8f9fa;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0;
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 1400px) {
      margin: 0 2rem;
      padding: 0;
    }
  }
  
  .breadcrumb {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
    
    a {
      color: #0073E6;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    span {
      margin: 0 0.5rem;
    }
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: #1a202c;
  display: flex;
  align-items: center;
  margin-top: 0;
  padding-top: 120px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse 800px 600px at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse 600px 400px at 0% 100%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse 400px 300px at 100% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle 2px at 20% 30%, rgba(59, 130, 246, 0.8) 0%, transparent 2px),
      radial-gradient(circle 1px at 80% 20%, rgba(168, 85, 247, 0.6) 0%, transparent 1px),
      radial-gradient(circle 1.5px at 60% 80%, rgba(16, 185, 129, 0.7) 0%, transparent 1.5px),
      radial-gradient(circle 1px at 30% 70%, rgba(251, 191, 36, 0.5) 0%, transparent 1px),
      radial-gradient(circle 2px at 70% 40%, rgba(59, 130, 246, 0.6) 0%, transparent 2px),
      radial-gradient(circle 1px at 40% 60%, rgba(168, 85, 247, 0.8) 0%, transparent 1px);
    pointer-events: none;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  color: white;
  width: 100%;
  
  @media (max-width: 1400px) {
    margin: 0 2rem;
    padding: 0;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.1;
    color: #ffffff;
  }
  
  .subtitle {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 600px;
    opacity: 0.95;
    font-weight: 400;
    color: #cbd5e1;
  }
`;

const SectionBase = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 2rem;
  height: fit-content;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }
  
  .company-info {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    border-left: 4px solid #0073E6;
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
      font-family: 'Poppins', sans-serif;
    }
    
    p {
      font-size: 0.875rem;
      color: #525252;
      line-height: 1.5;
      margin: 0.25rem 0;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .icon {
    width: 40px;
    height: 40px;
    background: #0073E6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.25rem;
      font-family: 'Poppins', sans-serif;
    }
    
    p {
      color: #525252;
      font-size: 0.875rem;
      line-height: 1.4;
      margin: 0;
    }
    
    a {
      color: #0073E6;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactForm = styled.form`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  height: fit-content;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #1a1a1a;
    font-size: 0.875rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.875rem;
    transition: all 0.3s ease;
    background: #f9fafb;
    
    &:focus {
      outline: none;
      border-color: #0073E6;
      background: white;
      box-shadow: 0 0 0 3px rgba(0, 115, 230, 0.1);
    }
    
    &::placeholder {
      color: #9ca3af;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #0073E6, #00005C);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 115, 230, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactPage = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Επικοινωνήστε Μαζί μας',
        subtitle: 'Είστε έτοιμοι να συνεργαστείτε ή να εξερευνήσετε λύσεις ΤΝ; Ας ξεκινήσουμε μια συνομιλία για το έργο ή τις ευκαιρίες συνεργασίας σας.',
        breadcrumb: {
          home: 'Αρχική',
          contact: 'Επικοινωνία'
        },
        contactInfo: {
          title: 'Ελάτε σε Επαφή',
          companyInfo: {
            title: 'ARTIFICIAL INTELLIGENCE FOR ADVANCED SOLUTIONS ΙΔΙΩΤΙΚΗ ΕΤΑΙΡΙΑ',
            description1: 'Πρωτοπόρος έρευνα και ανάπτυξη ΤΝ στην Ελλάδα',
            description2: 'Εξειδικευόμαστε στην ανάλυση δεδομένων και καινοτόμες εφαρμογές ΤΝ',
            description3: 'Ακαδημαϊκές συνεργασίες με Δημοκρίτειο Πανεπιστήμιο, University of Nicosia και Cyprus University of Technology'
          },
          email: {
            title: 'Email',
            primary: 'ai4gr.info@gmail.com',
            secondary: 'chkokkotis@gmail.com'
          },
          location: {
            title: 'Τοποθεσία',
            primary: 'Θράκη, Ελλάδα',
            secondary: 'Εξυπηρετούμε πελάτες σε όλη την Ευρώπη'
          },
          partners: {
            title: 'Ακαδημαϊκοί Συνεργάτες',
            university: 'Δημοκρίτειο Πανεπιστήμιο Θράκης',
            nicosia: 'University of Nicosia',
            cyprus: 'Cyprus University of Technology'
          },
          research: {
            title: 'Ερευνητικά Προφίλ',
            description1: 'Δημοσιεύσεις και ερευνητική εργασία της ομάδας μας',
            description2: 'Διαθέσιμα προφίλ Google Scholar'
          }
        },
        contactForm: {
          title: 'Στείλτε μας Μήνυμα',
          fields: {
            name: {
              label: 'Πλήρες Όνομα *',
              placeholder: 'Εισάγετε το πλήρες όνομά σας'
            },
            email: {
              label: 'Διεύθυνση Email *',
              placeholder: 'Εισάγετε τη διεύθυνση email σας'
            },
            organization: {
              label: 'Οργανισμός',
              placeholder: 'Η εταιρία ή το ίδρυμά σας'
            },
            type: {
              label: 'Τύπος Ερωτήματος *',
              placeholder: 'Επιλέξτε τύπο ερωτήματος',
              options: {
                partnership: 'Ευκαιρία Συνεργασίας',
                research: 'Ερευνητική Συνεργασία',
                consulting: 'Υπηρεσίες Συμβουλευτικής ΤΝ',
                funding: 'Χρηματοδότηση Έργου',
                academic: 'Ακαδημαϊκή Συνεργασία',
                media: 'Μέσα Ενημέρωσης & Τύπος',
                other: 'Άλλο'
              }
            },
            subject: {
              label: 'Θέμα *',
              placeholder: 'Σύντομο θέμα του ερωτήματός σας'
            },
            message: {
              label: 'Μήνυμα *',
              placeholder: 'Πείτε μας για το έργο σας, τα ερευνητικά ενδιαφέροντά σας ή πώς μπορούμε να συνεργαστούμε...'
            }
          },
          submit: {
            sending: 'Αποστολή Μηνύματος...',
            send: 'Αποστολή Μηνύματος'
          },
          successMessage: 'Ευχαριστούμε που επικοινωνήσατε με την AI4! Θα σας απαντήσουμε εντός 24 ωρών.'
        }
      };
    }
    return {
      title: 'Contact Us',
      subtitle: 'Ready to collaborate or explore AI solutions? Let\'s start a conversation about your project or partnership opportunities.',
      breadcrumb: {
        home: 'Home',
        contact: 'Contact'
      },
      contactInfo: {
        title: 'Get in Touch',
        companyInfo: {
          title: 'ARTIFICIAL INTELLIGENCE FOR ADVANCED SOLUTIONS PRIVATE COMPANY',
          description1: 'Leading AI research and development in Greece',
          description2: 'Specializing in data analysis and innovative AI applications',
          description3: 'Academic partnerships with Democritus University, University of Nicosia and Cyprus University of Technology'
        },
        email: {
          title: 'Email',
          primary: 'ai4gr.info@gmail.com',
          secondary: 'chkokkotis@gmail.com'
        },
        location: {
          title: 'Location',
          primary: 'Thrace, Greece',
          secondary: 'Serving clients across Europe'
        },
        partners: {
          title: 'Academic Partners',
          university: 'Democritus University of Thrace',
          nicosia: 'University of Nicosia',
          cyprus: 'Cyprus University of Technology'
        },
        research: {
          title: 'Research Profiles',
          description1: 'Our team\'s publications and research work',
          description2: 'Google Scholar profiles available'
        }
      },
      contactForm: {
        title: 'Send us a Message',
        fields: {
          name: {
            label: 'Full Name *',
            placeholder: 'Enter your full name'
          },
          email: {
            label: 'Email Address *',
            placeholder: 'Enter your email address'
          },
          organization: {
            label: 'Organization',
            placeholder: 'Your company or institution'
          },
          type: {
            label: 'Inquiry Type *',
            placeholder: 'Select inquiry type',
            options: {
              partnership: 'Partnership Opportunity',
              research: 'Research Collaboration',
              consulting: 'AI Consulting Services',
              funding: 'Project Funding',
              academic: 'Academic Collaboration',
              media: 'Media & Press',
              other: 'Other'
            }
          },
          subject: {
            label: 'Subject *',
            placeholder: 'Brief subject of your inquiry'
          },
          message: {
            label: 'Message *',
            placeholder: 'Tell us about your project, research interests, or how we can collaborate...'
          }
        },
        submit: {
          sending: 'Sending Message...',
          send: 'Send Message'
        },
        successMessage: 'Thank you for contacting AI4! We will get back to you within 24 hours.'
      }
    };
  };

  const content = getContent();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(content.contactForm.successMessage);
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      type: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>{content.title} - AI4 Advanced Solutions</title>
        <meta name="description" content={language === 'el' ? "Επικοινωνήστε με το Ινστιτούτο AI4 για συνεργασίες, ερευνητική συνεργασία και λύσεις τεχνητής νοημοσύνης. Επικοινωνήστε με την ομάδα μας στην Ελλάδα." : "Get in touch with AI4 Institute for partnerships, research collaboration, and artificial intelligence solutions. Contact our team in Greece."} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
          <motion.div
            className="subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.div>
        </HeroContent>
      </HeroSection>

      <BreadcrumbBar>
        <div className="container">
          <div className="breadcrumb">
            <button onClick={() => navigate('/')} style={{border: 'none', background: 'none', color: '#0073E6', textDecoration: 'none', cursor: 'pointer'}}>{content.breadcrumb.home}</button>
            <span>/</span>
            <span>{content.breadcrumb.contact}</span>
          </div>
        </div>
      </BreadcrumbBar>

      <SectionBase>
        <ContactLayout>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactInfo>
              <h3>{content.contactInfo.title}</h3>
              
              <div className="company-info">
                <h4>{content.contactInfo.companyInfo.title}</h4>
                <p>{content.contactInfo.companyInfo.description1}</p>
                <p>{content.contactInfo.companyInfo.description2}</p>
                <p>{content.contactInfo.companyInfo.description3}</p>
              </div>

              <ContactItem>
                <div className="icon">✉</div>
                <div className="content">
                  <h4>{content.contactInfo.email.title}</h4>
                  <p><a href="mailto:ai4gr.info@gmail.com">{content.contactInfo.email.primary}</a></p>
                  <p><a href="mailto:chkokkotis@gmail.com">{content.contactInfo.email.secondary}</a></p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">📍</div>
                <div className="content">
                  <h4>{content.contactInfo.location.title}</h4>
                  <p>{content.contactInfo.location.primary}</p>
                  <p>{content.contactInfo.location.secondary}</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">🎓</div>
                <div className="content">
                  <h4>{content.contactInfo.partners.title}</h4>
                  <p>{content.contactInfo.partners.university}</p>
                  <p>{content.contactInfo.partners.nicosia}</p>
                  <p>{content.contactInfo.partners.cyprus}</p>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">🔗</div>
                <div className="content">
                  <h4>{content.contactInfo.research.title}</h4>
                  <p>{content.contactInfo.research.description1}</p>
                  <p>{content.contactInfo.research.description2}</p>
                </div>
              </ContactItem>
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <h3>{content.contactForm.title}</h3>
              
              <FormGroup>
                <label htmlFor="name">{content.contactForm.fields.name.label}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.contactForm.fields.name.placeholder}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">{content.contactForm.fields.email.label}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.contactForm.fields.email.placeholder}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="organization">{content.contactForm.fields.organization.label}</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder={content.contactForm.fields.organization.placeholder}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="type">{content.contactForm.fields.type.label}</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">{content.contactForm.fields.type.placeholder}</option>
                  <option value="partnership">{content.contactForm.fields.type.options.partnership}</option>
                  <option value="research">{content.contactForm.fields.type.options.research}</option>
                  <option value="consulting">{content.contactForm.fields.type.options.consulting}</option>
                  <option value="funding">{content.contactForm.fields.type.options.funding}</option>
                  <option value="academic">{content.contactForm.fields.type.options.academic}</option>
                  <option value="media">{content.contactForm.fields.type.options.media}</option>
                  <option value="other">{content.contactForm.fields.type.options.other}</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="subject">{content.contactForm.fields.subject.label}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={content.contactForm.fields.subject.placeholder}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">{content.contactForm.fields.message.label}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.contactForm.fields.message.placeholder}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? content.contactForm.submit.sending : content.contactForm.submit.send}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactLayout>
      </SectionBase>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default ContactPage;