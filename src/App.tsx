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
  ArrowLeft,
  Eye,
  MousePointer2,
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
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
  const [isGenerating, setIsGenerating] = useState(false);
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

  const [showTemplateSwitcher, setShowTemplateSwitcher] = useState(false);

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
    if (!previewRef.current || isGenerating) return;
    
    setIsGenerating(true);
    const element = previewRef.current;
    
    try {
      // Use html-to-image for better quality and modern CSS support
      const dataUrl = await htmlToImage.toPng(element, {
        width: 794, // 210mm at 96dpi
        height: 1115, // 295mm at 96dpi
        pixelRatio: 2, // Higher quality
        backgroundColor: '#ffffff',
        style: {
          visibility: 'visible',
          display: 'block',
          transform: 'none'
        }
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 295);
      pdf.save(`assignment_cover_${formData.studentName || 'page'}.pdf`);
      
    } catch (error: any) {
      console.error('PDF Generation Error:', error);
      alert('PDF generation failed. Try "Download as Image" instead, or use a different browser.');
    } finally {
      setDownloadingId(null);
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!previewRef.current || isGenerating) return;
    
    setIsGenerating(true);
    const element = previewRef.current;
    
    try {
      const dataUrl = await htmlToImage.toPng(element, {
        width: 794,
        height: 1115,
        pixelRatio: 3, // Very high quality for image
        backgroundColor: '#ffffff',
        style: {
          visibility: 'visible',
          display: 'block',
          transform: 'none'
        }
      });

      const link = document.createElement('a');
      link.download = `assignment_cover_${formData.studentName || 'page'}.png`;
      link.href = dataUrl;
      link.click();
      
    } catch (error: any) {
      console.error('Image Generation Error:', error);
      alert('Image generation failed. Please try again.');
    } finally {
      setIsGenerating(false);
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
                { icon: Palette, title: "30+ Templates", desc: "Modern, Minimal, Creative & more" },
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
                            onClick={() => {
                              setSelectedTemplate(template.id);
                              setStep('preview');
                            }}
                            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                          >
                            <CheckCircle2 size={18} />
                            Select & Preview
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
                          <button
                            onClick={() => handleDownloadFromSelection(template.id)}
                            disabled={downloadingId === template.id}
                            className="w-full py-3 text-slate-400 font-medium hover:text-indigo-600 transition-colors flex items-center justify-center gap-2 text-sm"
                          >
                            {downloadingId === template.id ? 'Downloading...' : 'Quick Download'}
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
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Customize Your Page</h2>
                  <p className="text-slate-500">Fill in the details and see them update in real-time</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowTemplateSwitcher(!showTemplateSwitcher)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-medium transition-all ${
                      showTemplateSwitcher 
                      ? 'bg-indigo-600 text-white border-indigo-600' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-500 hover:text-indigo-600'
                    }`}
                  >
                    <Palette size={20} /> 
                    {showTemplateSwitcher ? 'Close Switcher' : 'Change Template'}
                  </button>
                  <button 
                    onClick={() => setStep('landing')}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {showTemplateSwitcher && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 mb-8 border border-white overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-slate-800">Quick Template Switcher</h3>
                    <p className="text-xs text-slate-400">Pick a design to see it instantly</p>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {templateList.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTemplate(t.id)}
                        className={`flex-shrink-0 group relative w-32 aspect-[210/295] rounded-xl overflow-hidden border-2 transition-all ${
                          selectedTemplate === t.id 
                          ? 'border-indigo-500 ring-4 ring-indigo-500/10' 
                          : 'border-slate-100 hover:border-indigo-300'
                        }`}
                      >
                        <div className="absolute inset-0 scale-[0.15] origin-top-left w-[210mm] h-[295mm] pointer-events-none">
                          {React.createElement(t.component, { data: formData })}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-1.5 text-[10px] font-bold text-slate-600 text-center border-t border-slate-100">
                          {t.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Form Side */}
                <div className="xl:col-span-7 space-y-6">
                  <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-white">
                    <div className="space-y-10">
                      <div>
                        <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2 mb-6">
                          <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                          Assignment Info
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-semibold text-slate-600 ml-1">College Logo</label>
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-slate-100 overflow-hidden shrink-0">
                                {formData.logoUrl ? (
                                  <img src={formData.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                                ) : (
                                  <Palette className="text-slate-200" size={24} />
                                )}
                              </div>
                              <div className="flex-1">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleLogoUpload}
                                  className="block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                                />
                                <p className="text-[10px] text-slate-400 mt-1 ml-1">Recommended: Square PNG or JPG</p>
                              </div>
                            </div>
                          </div>
                          <InputField label="Assignment Topic" name="topic" value={formData.topic} onChange={handleInputChange} placeholder="e.g. Impact of AI on Modern Society" />
                          <InputField label="Subject Name" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="e.g. Computer Science" />
                          <InputField label="Subject Code" name="subjectCode" value={formData.subjectCode} onChange={handleInputChange} placeholder="e.g. CS101" />
                          <InputField label="College/University Name" name="collegeName" value={formData.collegeName} onChange={handleInputChange} placeholder="e.g. Harvard University" />
                        </div>
                      </div>

                      <div className="pt-10 border-t border-slate-50">
                        <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2 mb-6">
                          <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                          Student Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                            <InputField label="Student Name" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="John Doe" />
                          </div>
                          <InputField label="Roll Number" name="rollNumber" value={formData.rollNumber} onChange={handleInputChange} placeholder="123456" />
                          <InputField label="Department" name="department" value={formData.department} onChange={handleInputChange} placeholder="B.Sc CS" />
                          <InputField label="Year" name="year" value={formData.year} onChange={handleInputChange} placeholder="3rd Year" />
                          <InputField label="Session" name="session" value={formData.session} onChange={handleInputChange} placeholder="2023-24" />
                        </div>
                      </div>

                      <div className="pt-10 border-t border-slate-50">
                        <h3 className="text-lg font-bold text-indigo-600 flex items-center gap-2 mb-6">
                          <div className="w-2 h-6 bg-indigo-500 rounded-full" />
                          Submission Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <InputField label="Teacher Name" name="teacherName" value={formData.teacherName} onChange={handleInputChange} placeholder="Dr. Smith" />
                          <InputField label="Teacher Designation" name="teacherDesignation" value={formData.teacherDesignation} onChange={handleInputChange} placeholder="Assistant Professor" />
                          <InputField label="Submission Date" name="date" value={formData.date} onChange={handleInputChange} placeholder="MM/DD/YYYY" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setStep('preview')}
                        className="flex-1 bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        Final Preview
                        <ChevronRight size={20} />
                      </button>
                      <div className="flex-1 flex flex-col gap-2">
                        <button
                          onClick={() => downloadPDF()}
                          disabled={isGenerating}
                          className="w-full bg-white text-indigo-600 border-2 border-indigo-50 py-4 rounded-2xl font-bold text-lg hover:border-indigo-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isGenerating ? <div className="w-5 h-5 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" /> : <Download size={20} />}
                          Download PDF
                        </button>
                        <button
                          onClick={downloadImage}
                          disabled={isGenerating}
                          className="w-full bg-white text-emerald-600 border-2 border-emerald-50 py-2 rounded-xl font-bold text-sm hover:border-emerald-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          <ImageIcon size={18} />
                          Download as Image (PNG)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Side */}
                <div className="xl:col-span-5 hidden xl:block sticky top-8 h-[calc(100vh-4rem)]">
                  <div className="bg-slate-200/50 rounded-[2.5rem] p-8 h-full flex flex-col items-center justify-center border border-slate-200 overflow-hidden relative group">
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-500 border border-white shadow-sm z-10">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      Live Preview
                    </div>
                    
                    <div className="transform scale-[0.45] origin-center shadow-2xl rounded-sm overflow-hidden">
                      <SelectedTemplateComponent data={formData} />
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-2xl">
                        <MousePointer2 size={16} />
                        Updates as you type
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Preview Toggle */}
                <div className="xl:hidden fixed bottom-6 right-6 z-50">
                  <button
                    onClick={() => setStep('preview')}
                    className="w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                  >
                    <Eye size={28} />
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
                  disabled={isGenerating}
                  className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Download size={24} />
                  )}
                  {isGenerating ? 'Generating PDF...' : 'Download PDF Now'}
                </button>

                <button
                  onClick={downloadImage}
                  disabled={isGenerating}
                  className="w-full py-4 bg-white text-indigo-600 border-2 border-indigo-100 rounded-2xl font-bold text-lg hover:border-indigo-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <ImageIcon size={24} />
                  Download as Image (PNG)
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden preview element for PDF generation - always available */}
      <div style={{ position: 'fixed', left: '-9999px', top: '0', pointerEvents: 'none', width: '210mm', height: '295mm', backgroundColor: 'white', zIndex: -1 }}>
        <div ref={previewRef} key={JSON.stringify(formData) + (downloadingId || selectedTemplate)} style={{ width: '210mm', height: '295mm', position: 'relative' }}>
          {downloadingId ? (
            templateList.find(t => t.id === downloadingId)?.component && 
            React.createElement(templateList.find(t => t.id === downloadingId)!.component, { data: formData })
          ) : (
            <SelectedTemplateComponent data={formData} />
          )}
        </div>
      </div>
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
