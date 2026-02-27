import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  FileText, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  CheckCircle2, 
  Sparkles,
  Palette,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import * as Templates from './components/Templates';
import type { FormData } from './components/Templates';

type Step = 'landing' | 'selection' | 'form' | 'preview';

const templateList = [
  { id: 'ModernBlue', name: 'Modern Blue', component: Templates.ModernBlue, color: 'bg-blue-500' },
  { id: 'GreenAcademic', name: 'Green Academic', component: Templates.GreenAcademic, color: 'bg-emerald-500' },
  { id: 'Minimal', name: 'Minimal Design', component: Templates.Minimal, color: 'bg-slate-800' },
  { id: 'Creative', name: 'Creative Design', component: Templates.Creative, color: 'bg-orange-500' },
  { id: 'Formal', name: 'Formal Design', component: Templates.Formal, color: 'bg-slate-600' },
  { id: 'Dark', name: 'Dark Premium', component: Templates.Dark, color: 'bg-slate-900' },
  { id: 'Soft', name: 'Soft Aesthetic', component: Templates.Soft, color: 'bg-rose-400' },
  { id: 'Premium', name: 'Premium Graphic', component: Templates.Premium, color: 'bg-yellow-500' },
  { id: 'AbstractWaves', name: 'Abstract Waves', component: Templates.AbstractWaves, color: 'bg-indigo-600' },
  { id: 'TechCircuit', name: 'Tech Circuit', component: Templates.TechCircuit, color: 'bg-cyan-600' },
  { id: 'ElegantSerif', name: 'Elegant Serif', component: Templates.ElegantSerif, color: 'bg-amber-700' },
  { id: 'BoldBrutalist', name: 'Bold Brutalist', component: Templates.BoldBrutalist, color: 'bg-yellow-400' },
  { id: 'EcoFriendly', name: 'Eco Friendly', component: Templates.EcoFriendly, color: 'bg-emerald-600' },
  { id: 'FuturisticNeon', name: 'Futuristic Neon', component: Templates.FuturisticNeon, color: 'bg-fuchsia-600' },
  { id: 'DiagonalSplit', name: 'Diagonal Split', component: Templates.DiagonalSplit, color: 'bg-red-600' },
  { id: 'CorporateGrid', name: 'Corporate Grid', component: Templates.CorporateGrid, color: 'bg-blue-700' },
  { id: 'ArtisticBrush', name: 'Artistic Brush', component: Templates.ArtisticBrush, color: 'bg-rose-500' },
  { id: 'MinimalLine', name: 'Minimal Line', component: Templates.MinimalLine, color: 'bg-slate-400' },
  { id: 'GeometricMosaic', name: 'Geometric Mosaic', component: Templates.GeometricMosaic, color: 'bg-indigo-500' },
  { id: 'VintageJournal', name: 'Vintage Journal', component: Templates.VintageJournal, color: 'bg-amber-800' },
  { id: 'ModernSidebar', name: 'Modern Sidebar', component: Templates.ModernSidebar, color: 'bg-teal-600' },
  { id: 'AbstractDots', name: 'Abstract Dots', component: Templates.AbstractDots, color: 'bg-indigo-900' },
  { id: 'ProfessionalBorder', name: 'Professional Border', component: Templates.ProfessionalBorder, color: 'bg-slate-900' },
  { id: 'CreativeShapes', name: 'Creative Shapes', component: Templates.CreativeShapes, color: 'bg-violet-600' },
  { id: 'TechBlueprint', name: 'Tech Blueprint', component: Templates.TechBlueprint, color: 'bg-blue-900' },
  { id: 'MinimalistCard', name: 'Minimalist Card', component: Templates.MinimalistCard, color: 'bg-slate-200' },
  { id: 'BoldHeader', name: 'Bold Header', component: Templates.BoldHeader, color: 'bg-red-700' },
  { id: 'SoftGradient', name: 'Soft Gradient', component: Templates.SoftGradient, color: 'bg-sky-300' },
  { id: 'AcademicShield', name: 'Academic Shield', component: Templates.AcademicShield, color: 'bg-red-900' },
  { id: 'GovernmentCollege', name: 'Govt. College Style', component: Templates.GovernmentCollege, color: 'bg-emerald-600' },
];

export default function App() {
  const [step, setStep] = useState<Step>('landing');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('ModernBlue');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    rollNumber: '',
    department: '',
    subject: '',
    subjectCode: '',
    topic: '',
    year: '',
    session: '',
    date: new Date().toLocaleDateString(),
    teacherName: '',
    teacherDesignation: '',
    collegeName: '',
    logoUrl: '',
  });

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const previewRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const downloadPDF = async (templateId?: string) => {
    if (!previewRef.current) return;
    
    const element = previewRef.current;
    
    // Create a hidden container for the capture
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '794px';
    container.style.height = '1123px';
    container.style.backgroundColor = '#ffffff';
    
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.transform = 'none';
    clone.style.display = 'block';
    clone.style.visibility = 'visible';
    
    container.appendChild(clone);
    document.body.appendChild(container);

    const opt = {
      margin: 0,
      filename: `assignment_cover_${formData.studentName || 'page'}.pdf`,
      image: { type: 'jpeg' as const, quality: 1.0 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        letterRendering: true,
        backgroundColor: '#ffffff',
        windowWidth: 794,
        onclone: (clonedDoc: Document) => {
          const style = clonedDoc.createElement('style');
          style.innerHTML = `
            * { 
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              box-sizing: border-box !important;
            }
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            body { font-family: 'Poppins', sans-serif !important; }
            .a4-page { width: 794px !important; height: 1123px !important; }
          `;
          clonedDoc.head.appendChild(style);

          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            const computed = window.getComputedStyle(htmlEl);
            
            // Fix color
            if (computed.color.includes('oklch') || computed.color.includes('oklab')) {
              htmlEl.style.color = '#000000';
            }
            
            // Fix background color
            if (computed.backgroundColor.includes('oklch') || computed.backgroundColor.includes('oklab')) {
              const fixedBg = computed.backgroundColor.replace(/(oklch|oklab)\([^)]+\)/g, '#ffffff');
              htmlEl.style.setProperty('background-color', fixedBg, 'important');
            }

            // Fix background image (gradients)
            if (computed.backgroundImage.includes('oklch') || computed.backgroundImage.includes('oklab')) {
              const fixedImg = computed.backgroundImage.replace(/(oklch|oklab)\([^)]+\)/g, '#ffffff');
              htmlEl.style.setProperty('background-image', fixedImg, 'important');
            }

            // Fix border color
            if (computed.borderColor.includes('oklch') || computed.borderColor.includes('oklab')) {
              const fixedBorder = computed.borderColor.replace(/(oklch|oklab)\([^)]+\)/g, '#000000');
              htmlEl.style.setProperty('border-color', fixedBorder, 'important');
            }

            // Fix fill (for SVGs)
            if (computed.fill && (computed.fill.includes('oklch') || computed.fill.includes('oklab'))) {
              htmlEl.style.fill = 'currentColor';
            }
          });
        }
      },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    try {
      // Wait a bit for the clone to be "ready" in the DOM
      await new Promise(resolve => setTimeout(resolve, 300));
      await html2pdf().set(opt).from(clone).save();
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert('Download failed. Please try again.');
    } finally {
      document.body.removeChild(container);
      setDownloadingId(null);
    }
  };

  const handleDownloadFromSelection = (templateId: string) => {
    setDownloadingId(templateId);
    // Wait for render
    setTimeout(() => downloadPDF(templateId), 100);
  };

  const SelectedTemplateComponent = templateList.find(t => t.id === selectedTemplate)?.component || templateList[0].component;
  const DownloadingTemplateComponent = templateList.find(t => t.id === downloadingId)?.component;

  // Dynamic scaling for mobile preview
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const updateScale = () => {
      const container = document.querySelector('.preview-wrapper');
      if (container) {
        const containerWidth = container.clientWidth;
        // Drastically reduce scale (max 0.35) to ensure it fits on one screen
        const newScale = Math.min(0.35, (containerWidth - 20) / 794);
        setScale(newScale);
      }
    };
    
    if (step === 'preview') {
      updateScale();
      window.addEventListener('resize', updateScale);
    }
    return () => window.removeEventListener('resize', updateScale);
  }, [step]);

  return (
    <div className="min-h-screen font-['Poppins'] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/30">
                <Sparkles size={18} className="text-yellow-300" />
                <span className="text-sm font-medium">Professional Design Tool</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Assignment Cover <br className="hidden sm:block" /> Page Generator
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 font-light">
                Create stunning, professional assignment cover pages in seconds. 
                Choose a template, fill your details, and download as PDF.
              </p>
              <button
                onClick={() => setStep('selection')}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                Start Designing
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl w-full">
              {[
                { icon: Palette, title: "8+ Templates", desc: "Modern, Minimal, Creative & more" },
                { icon: Layout, title: "A4 Ready", desc: "Perfectly sized for printing" },
                { icon: Download, title: "Instant PDF", desc: "High quality vector downloads" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                >
                  <feature.icon className="mb-4 text-white/60" size={32} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-screen bg-slate-50 p-4 sm:p-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Choose a Design</h2>
                  <p className="text-slate-500">Select a template that matches your assignment style</p>
                </div>
                <button 
                  onClick={() => setStep('landing')}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors"
                >
                  <ArrowLeft size={20} /> Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {templateList.map((template) => (
                  <motion.div
                    key={template.id}
                    whileHover={{ y: -8 }}
                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border-2 ${selectedTemplate === template.id ? 'border-indigo-500' : 'border-transparent'}`}
                  >
                    <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-transparent to-transparent" />
                      <div className="transform scale-[0.2] origin-center pointer-events-none">
                        <template.component data={{
                          studentName: 'Student Name',
                          rollNumber: '000000',
                          department: 'Department',
                          subject: 'Subject Name',
                          subjectCode: 'CODE',
                          topic: 'Assignment Topic',
                          year: 'Year',
                          session: '2023-24',
                          date: 'Date',
                          teacherName: 'Teacher Name',
                          teacherDesignation: 'Designation',
                          collegeName: 'College Name',
                        }} />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">{template.name}</h3>
                      
                      {formData.studentName ? (
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleDownloadFromSelection(template.id)}
                            disabled={downloadingId === template.id}
                            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 disabled:opacity-50"
                          >
                            {downloadingId === template.id ? (
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <Download size={18} />
                            )}
                            Download PDF
                          </button>
                          <button
                            onClick={() => {
                              setSelectedTemplate(template.id);
                              setStep('form');
                            }}
                            className="w-full py-3 bg-white text-slate-600 rounded-xl font-bold border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                          >
                            Edit Details
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            setStep('form');
                          }}
                          className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                            selectedTemplate === template.id 
                            ? 'bg-indigo-500 text-white' 
                            : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                          }`}
                        >
                          {selectedTemplate === template.id ? 'Selected' : 'Select Template'}
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="absolute top-4 right-4 bg-white text-indigo-500 p-1 rounded-full shadow-lg z-20">
                        <CheckCircle2 size={24} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-screen bg-slate-50 p-4 sm:p-8"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Enter Details</h2>
                <button 
                  onClick={() => setStep('selection')}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors"
                >
                  <ArrowLeft size={20} /> Back to Templates
                </button>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2">
                      <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                      Assignment Info
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-600 ml-1">College Logo</label>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          {formData.logoUrl && (
                            <img src={formData.logoUrl} alt="Logo Preview" className="w-16 h-16 rounded-full object-cover border border-slate-200" />
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                          />
                        </div>
                      </div>
                      <InputField label="Assignment Topic" name="topic" value={formData.topic} onChange={handleInputChange} placeholder="e.g. Impact of AI on Modern Society" />
                      <InputField label="Subject Name" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="e.g. Computer Science" />
                      <InputField label="Subject Code" name="subjectCode" value={formData.subjectCode} onChange={handleInputChange} placeholder="e.g. CS101" />
                      <InputField label="College/University Name" name="collegeName" value={formData.collegeName} onChange={handleInputChange} placeholder="e.g. Harvard University" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2">
                      <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                      Student Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <InputField label="Student Name" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="John Doe" />
                      </div>
                      <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} placeholder="123456" />
                      <InputField label="Department" name="department" value={formData.department} onChange={handleInputChange} placeholder="B.Sc CS" />
                      <InputField label="Year" name="year" value={formData.year} onChange={handleInputChange} placeholder="3rd Year" />
                      <InputField label="Session" name="session" value={formData.session} onChange={handleInputChange} placeholder="2023-24" />
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6 pt-6 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2">
                      <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                      Submission Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <InputField label="Teacher Name" name="teacherName" value={formData.teacherName} onChange={handleInputChange} placeholder="Dr. Smith" />
                      <InputField label="Teacher Designation" name="teacherDesignation" value={formData.teacherDesignation} onChange={handleInputChange} placeholder="Assistant Professor" />
                      <InputField label="Submission Date" name="date" value={formData.date} onChange={handleInputChange} placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => setStep('preview')}
                    className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Preview & Download
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'preview' && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen p-6 sm:p-12 flex flex-col items-center justify-center bg-slate-50"
          >
            <div className="w-full max-w-2xl bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-white flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">Ready to Download!</h2>
              <p className="text-slate-500 font-medium mb-12">Your assignment cover page is generated and ready.</p>
              
              <div className="flex flex-col gap-4 w-full">
                <button
                  onClick={downloadPDF}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  <Download size={24} />
                  Download PDF Now
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setStep('form')}
                    className="py-4 bg-white text-slate-700 rounded-2xl font-bold border-2 border-slate-100 hover:border-indigo-500 hover:text-indigo-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Edit Details
                  </button>
                  <button
                    onClick={() => setStep('selection')}
                    className="py-4 bg-white text-slate-700 rounded-2xl font-bold border-2 border-slate-100 hover:border-indigo-500 hover:text-indigo-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Change Template
                  </button>
                </div>
              </div>

              {/* Hidden preview element for PDF generation */}
              <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', pointerEvents: 'none' }}>
                <div ref={previewRef}>
                  {downloadingId ? (
                    DownloadingTemplateComponent && <DownloadingTemplateComponent data={formData} />
                  ) : (
                    <SelectedTemplateComponent data={formData} />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InputField({ label, name, value, onChange, placeholder }: { label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-600 ml-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-300"
      />
    </div>
  );
}
