import React from 'react';

export interface FormData {
  studentName: string;
  rollNumber: string;
  department: string;
  subject: string;
  subjectCode: string;
  topic: string;
  year: string;
  session: string;
  date: string;
  teacherName: string;
  teacherDesignation: string;
  collegeName: string;
  logoUrl?: string;
}

export interface TemplateProps {
  data: FormData;
}

const PageWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`a4-page bg-white relative overflow-hidden font-['Poppins'] ${className}`} style={{ width: '210mm', height: '295mm' }}>
    {children}
  </div>
);

// 1. Modern Blue - Geometric & Sharp
export const ModernBlue: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-full h-64 bg-indigo-600 transform -skew-y-6 origin-top-right" />
    <div className="absolute top-0 right-0 w-1/2 h-48 bg-indigo-400 opacity-50 transform -skew-y-12 origin-top-right" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-16 px-12">
      <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8 p-4">
        {data.logoUrl ? <img src={data.logoUrl} className="max-w-full max-h-full object-contain" /> : <div className="text-xs text-slate-300 font-bold">LOGO</div>}
      </div>
      
      <h1 className="text-3xl font-black text-white mb-24 uppercase tracking-widest">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      
      <div className="w-full bg-slate-50 border-l-8 border-indigo-600 p-8 mb-12 shadow-sm">
        <h2 className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-2">Assignment Topic</h2>
        <p className="text-2xl font-bold text-slate-800 uppercase">{data.topic || 'ENTER YOUR TOPIC HERE'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-12 w-full mt-auto mb-24">
        <div className="space-y-4">
          <h3 className="text-indigo-600 font-black text-xs uppercase border-b-2 border-indigo-100 pb-2">Submitted By</h3>
          <div className="space-y-1">
            <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm text-slate-500">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-slate-500">Dept: {data.department || 'DEPARTMENT'}</p>
            <p className="text-sm text-slate-500">Year: {data.year || 'YEAR'}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-indigo-600 font-black text-xs uppercase border-b-2 border-indigo-100 pb-2">Submitted To</h3>
          <div className="space-y-1">
            <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm text-slate-500">Dept. of {data.department || 'DEPARTMENT'}</p>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-between items-end border-t border-slate-100 pt-8 mb-12">
        <div className="text-xs font-bold text-slate-400 uppercase">Session: {data.session || '2024-25'}</div>
        <div className="text-xs font-bold text-slate-400 uppercase">Date: {data.date || '11/12/2025'}</div>
      </div>
    </div>
  </PageWrapper>
);

// 2. Green Academic - Professional & Structured
export const GreenAcademic: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-4 bg-emerald-600" />
    <div className="absolute bottom-0 left-0 w-full h-4 bg-emerald-600" />
    <div className="absolute top-0 left-12 w-1 h-full bg-emerald-100" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-20 px-24 text-left items-start">
      <div className="flex items-center gap-6 mb-16">
        <div className="w-24 h-24 border-4 border-emerald-600 p-2">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-emerald-50" />}
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase leading-tight">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Academic Assignment</p>
        </div>
      </div>
      
      <div className="mb-20">
        <div className="text-emerald-600 font-black text-xs uppercase mb-4 flex items-center gap-2">
          <div className="w-8 h-1 bg-emerald-600" />
          Assignment Details
        </div>
        <div className="space-y-2">
          <div className="flex gap-4">
            <span className="w-32 text-slate-400 font-bold uppercase text-xs">Subject:</span>
            <span className="font-bold text-slate-900 uppercase">{data.subject || 'SUBJECT NAME'}</span>
          </div>
          <div className="flex gap-4">
            <span className="w-32 text-slate-400 font-bold uppercase text-xs">Code:</span>
            <span className="font-bold text-slate-900 uppercase">{data.subjectCode || '000000'}</span>
          </div>
        </div>
      </div>
      
      <div className="w-full py-12 border-y-2 border-emerald-100 mb-20">
        <h2 className="text-emerald-600 font-black text-xs uppercase mb-4">Topic</h2>
        <p className="text-4xl font-black text-slate-900 leading-tight uppercase">{data.topic || 'ENTER YOUR TOPIC HERE'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-20 w-full">
        <div className="space-y-6">
          <h3 className="text-emerald-600 font-black text-xs uppercase tracking-widest">Student Info</h3>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm font-medium text-slate-600">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm font-medium text-slate-600">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-emerald-600 font-black text-xs uppercase tracking-widest">Supervisor</h3>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm font-medium text-slate-600">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm font-medium text-slate-600">Dept. of {data.department || 'DEPARTMENT'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto mb-12 text-slate-400 font-bold text-xs uppercase tracking-widest">
        Submission Date: {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 3. Creative Orange - Bold & Dynamic
export const Creative: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full opacity-10" />
    <div className="absolute top-0 right-0 w-32 h-full bg-orange-500" />
    
    <div className="relative z-10 flex flex-col h-full pt-24 pl-16 pr-48">
      <div className="mb-16">
        <h1 className="text-5xl font-black text-slate-900 uppercase leading-[0.9] mb-4">
          Assignment<br />
          <span className="text-orange-500">Cover Page</span>
        </h1>
        <div className="w-24 h-3 bg-slate-900" />
      </div>
      
      <div className="space-y-12 mb-24">
        <div>
          <p className="text-orange-500 font-black uppercase tracking-tighter text-6xl opacity-20 absolute -ml-4 -mt-8 pointer-events-none">TOPIC</p>
          <p className="relative text-2xl font-bold text-slate-800 uppercase leading-tight">{data.topic || 'ENTER YOUR TOPIC HERE'}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-xs font-black text-slate-400 uppercase">Department</p>
            <p className="font-bold text-slate-900 uppercase">{data.department || 'DEPARTMENT'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-black text-slate-400 uppercase">Subject Code</p>
            <p className="font-bold text-slate-900 uppercase">{data.subjectCode || '000000'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto space-y-12 pb-20">
        <div className="flex gap-16">
          <div className="flex-1">
            <p className="text-xs font-black text-orange-500 uppercase mb-4">Submitted By</p>
            <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm font-bold text-slate-500">ID: {data.rollNumber || '000000'}</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-orange-500 uppercase mb-4">Submitted To</p>
            <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm font-bold text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-slate-100">
          <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{data.collegeName || 'GOVT. COLLEGE NAME'}</div>
          <div className="text-xs font-black text-slate-400 uppercase">{data.date || '11/12/2025'}</div>
        </div>
      </div>
    </div>
    
    <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col items-center gap-12">
      <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center p-2">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-orange-50 rounded-full" />}
      </div>
      <div className="h-64 w-px bg-white/30" />
      <div className="rotate-90 text-white font-black uppercase tracking-[0.5em] whitespace-nowrap text-xs">SESSION {data.session || '2024-25'}</div>
    </div>
  </PageWrapper>
);

// 4. Dark Premium - Elegant & High Contrast
export const Dark: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-950">
    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-16 text-center">
      <div className="w-24 h-24 bg-indigo-500/10 rounded-full border border-indigo-500/30 flex items-center justify-center mb-12 p-4">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain brightness-0 invert" /> : <div className="text-[10px] text-indigo-400 font-bold">LOGO</div>}
      </div>
      
      <h1 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <div className="w-16 h-1 bg-indigo-500 mb-24" />
      
      <div className="mb-24">
        <p className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-6">Course Assignment</p>
        <h2 className="text-5xl font-black text-white uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="inline-block px-6 py-2 border border-indigo-500/30 rounded-full text-indigo-300 font-bold uppercase text-sm tracking-widest">
          {data.subject || 'SUBJECT NAME'} • {data.subjectCode || '000000'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-1 w-full bg-indigo-500/10 border border-indigo-500/20 rounded-3xl overflow-hidden mt-auto mb-20">
        <div className="p-10 text-left border-r border-indigo-500/20">
          <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-xl font-bold text-white mb-1">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-sm text-slate-400">Roll: {data.rollNumber || '000000'}</p>
          <p className="text-sm text-slate-400">Session: {data.session || '2024-25'}</p>
        </div>
        <div className="p-10 text-left">
          <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-xl font-bold text-white mb-1">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-sm text-slate-400">{data.teacherDesignation || 'DESIGNATION'}</p>
          <p className="text-sm text-slate-400">Dept. of {data.department || 'DEPARTMENT'}</p>
        </div>
      </div>
      
      <div className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-12">
        Date of Submission: {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 5. Minimalist - Clean & Modern
export const Minimal: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex justify-between items-start mb-32">
        <div className="w-16 h-16 grayscale opacity-50">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-100" />}
        </div>
        <div className="text-right">
          <h1 className="text-sm font-black text-slate-900 uppercase tracking-widest">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Academic Year {data.session || '2024-25'}</p>
        </div>
      </div>
      
      <div className="mb-auto">
        <p className="text-xs font-black text-slate-300 uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.85] mb-12">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="flex gap-12">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase">Subject</p>
            <p className="text-sm font-bold text-slate-900 uppercase">{data.subject || 'SUBJECT NAME'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase">Code</p>
            <p className="text-sm font-bold text-slate-900 uppercase">{data.subjectCode || '000000'}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-24 pt-16 border-t border-slate-100">
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presented By</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-xs text-slate-500">Roll No. {data.rollNumber || '000000'}</p>
            <p className="text-xs text-slate-500">{data.department || 'DEPARTMENT'}</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presented To</p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-xs text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-xs text-slate-500">Dept. of {data.department || 'DEPARTMENT'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-[10px] font-black text-slate-300 uppercase tracking-widest">
        {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 6. Soft Pink - Gentle & Elegant
export const Soft: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-rose-50/30">
    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full -mr-32 -mt-32 opacity-50" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full -ml-48 -mb-48 opacity-50" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-20">
      <div className="mb-16">
        <h1 className="text-xl font-bold text-rose-400 uppercase tracking-[0.4em] mb-2">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
        <div className="h-0.5 w-full bg-rose-200" />
      </div>
      
      <div className="w-full bg-white rounded-[3rem] p-16 shadow-xl shadow-rose-100/50 mb-20 text-center">
        <p className="text-rose-300 font-black text-xs uppercase tracking-widest mb-6">Assignment Topic</p>
        <h2 className="text-4xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT NAME'} • {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-12 w-full mt-auto mb-24">
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-rose-100">
          <p className="text-rose-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-xl font-bold text-slate-800">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-sm text-slate-500">Roll: {data.rollNumber || '000000'}</p>
          <p className="text-sm text-slate-500">Session: {data.session || '2024-25'}</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-rose-100">
          <p className="text-rose-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-xl font-bold text-slate-800">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-sm text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
          <p className="text-sm text-slate-500">Dept. of {data.department || 'DEPARTMENT'}</p>
        </div>
      </div>
      
      <div className="text-rose-300 font-bold text-xs uppercase tracking-widest mb-12">
        {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 7. Premium Gold - Luxurious & Formal
export const Premium: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-8 border border-yellow-600/20 pointer-events-none" />
    <div className="absolute inset-10 border-2 border-yellow-600/10 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-28 px-20">
      <div className="w-20 h-20 mb-12">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-yellow-50 border border-yellow-600/20" />}
      </div>
      
      <h1 className="text-2xl font-serif italic text-yellow-700 mb-2">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mb-24">Academic Excellence</p>
      
      <div className="text-center mb-24">
        <p className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-8">Assignment Submission</p>
        <h2 className="text-5xl font-serif text-slate-900 leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="w-32 h-px bg-yellow-600 mx-auto" />
      </div>
      
      <div className="w-full grid grid-cols-2 gap-16 mt-auto mb-24">
        <div className="text-left">
          <p className="text-yellow-600 font-black text-[10px] uppercase tracking-widest mb-6">Student Details</p>
          <div className="space-y-1">
            <p className="text-xl font-serif text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Dept: {data.department || 'DEPARTMENT'}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-yellow-600 font-black text-[10px] uppercase tracking-widest mb-6">Faculty Member</p>
          <div className="space-y-1">
            <p className="text-xl font-serif text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
      </div>
      
      <div className="text-yellow-600 font-serif italic text-sm mb-16">
        Submitted on {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 8. Formal Slate - Corporate & Clean
export const Formal: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="absolute top-0 left-0 w-full h-1/3 bg-slate-900" />
    
    <div className="relative z-10 flex flex-col h-full pt-20 px-16">
      <div className="flex justify-between items-center mb-24">
        <div className="w-16 h-16 bg-white p-2 rounded shadow-lg">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50" />}
        </div>
        <div className="text-right text-white">
          <h1 className="text-lg font-black uppercase tracking-widest">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
          <p className="text-xs font-bold text-slate-400 uppercase">Department of {data.department || 'DEPARTMENT'}</p>
        </div>
      </div>
      
      <div className="bg-white p-16 shadow-2xl rounded-sm mb-20">
        <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-4">Assignment Topic</p>
        <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <span>Subject: {data.subject || 'SUBJECT'}</span>
          <span>Code: {data.subjectCode || '000000'}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-16 mt-auto mb-24">
        <div className="space-y-6">
          <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-slate-900 pb-2 inline-block">Submitted By</h3>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm text-slate-500">Roll No: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-slate-500">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-slate-900 pb-2 inline-block">Submitted To</h3>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm text-slate-500">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 10. Abstract Waves - Fluid & Modern
export const AbstractWaves: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    <div className="absolute -top-24 -right-24 w-96 h-96 opacity-20" style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 opacity-20" style={{ background: 'radial-gradient(circle, #9333ea 0%, transparent 70%)' }} />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-20 px-16">
      <div className="mb-12">
        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-3 border border-slate-100">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-indigo-50 rounded-full" />}
        </div>
      </div>
      
      <h1 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <p className="text-indigo-600 font-bold text-xs uppercase tracking-[0.5em] mb-20">Academic Portfolio</p>
      
      <div className="w-full relative py-12 px-8 mb-20">
        <div className="absolute inset-0 bg-white shadow-xl rounded-3xl transform -rotate-1" />
        <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-1 opacity-5" />
        <div className="relative z-10 text-center">
          <p className="text-indigo-500 font-black text-[10px] uppercase tracking-widest mb-4">Research Topic</p>
          <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-xs text-slate-500 mt-1">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-xs text-slate-500 mt-1">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="w-full flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-12">
        <span>Dept: {data.department || 'DEPARTMENT'}</span>
        <span>Date: {data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 11. Tech Circuit - Digital & Futuristic
export const TechCircuit: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#0a0a0f]">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1e1e2e 1px, transparent 1px), linear-gradient(90deg, #1e1e2e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-16 text-center">
      <div className="w-24 h-24 border border-cyan-500/30 rounded-lg flex items-center justify-center mb-12 relative">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-500" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500" />
        {data.logoUrl ? <img src={data.logoUrl} className="w-16 h-16 object-contain brightness-0 invert" /> : <div className="text-[10px] text-cyan-500 font-mono">TECH</div>}
      </div>
      
      <h1 className="text-xl font-mono text-cyan-500 tracking-[0.4em] mb-4 uppercase">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <div className="h-px w-32 bg-cyan-500/20 mb-24" />
      
      <div className="mb-24 relative">
        <div className="absolute -inset-4 bg-cyan-500/5 blur-xl rounded-full" />
        <p className="text-cyan-400/50 font-mono text-[10px] uppercase tracking-widest mb-6">System.Assignment_v1.0</p>
        <h2 className="text-5xl font-black text-white uppercase leading-tight tracking-tighter mb-8 shadow-cyan-500/20">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="inline-flex items-center gap-3 px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 font-mono text-[10px] uppercase">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          {data.subjectCode || '000000'} // {data.department || 'DEPT'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-px bg-cyan-500/10 border border-cyan-500/20 w-full mt-auto mb-20 overflow-hidden rounded-lg">
        <div className="p-8 text-left bg-[#0a0a0f]">
          <p className="text-cyan-500 font-mono text-[10px] uppercase mb-4 tracking-tighter">{'>'} User_Profile</p>
          <p className="text-xl font-bold text-white mb-1">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-xs text-slate-500 font-mono">ID: {data.rollNumber || '000000'}</p>
        </div>
        <div className="p-8 text-left bg-[#0a0a0f]">
          <p className="text-cyan-500 font-mono text-[10px] uppercase mb-4 tracking-tighter">{'>'} Admin_Access</p>
          <p className="text-xl font-bold text-white mb-1">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-xs text-slate-500 font-mono">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-12">
        Timestamp: {data.date || '11/12/2025'} // Session: {data.session || '2024-25'}
      </div>
    </div>
  </PageWrapper>
);

// 12. Elegant Serif - Classic & Sophisticated
export const ElegantSerif: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#fdfbf7]">
    <div className="absolute inset-12 border border-[#d4af37]/30 pointer-events-none" />
    <div className="absolute inset-14 border border-[#d4af37]/10 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-28 px-24 text-center">
      <div className="w-16 h-16 mb-12 opacity-80">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain grayscale" /> : <div className="w-full h-full border border-[#d4af37]/20" />}
      </div>
      
      <h1 className="text-xl font-serif text-slate-900 tracking-[0.2em] mb-2 uppercase">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <p className="text-[#d4af37] font-serif italic text-sm mb-24">Department of {data.department || 'DEPARTMENT'}</p>
      
      <div className="mb-auto">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8">A Formal Submission</p>
        <h2 className="text-5xl font-serif text-slate-900 leading-tight mb-12">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <div className="w-24 h-px bg-[#d4af37] mx-auto mb-12" />
        <p className="text-sm font-serif italic text-slate-600">{data.subject || 'SUBJECT NAME'} ({data.subjectCode || '000000'})</p>
      </div>
      
      <div className="w-full grid grid-cols-2 gap-16 mb-24 text-left">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">Presented By</p>
          <div className="space-y-1">
            <p className="text-lg font-serif text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-xs text-slate-500 italic">Roll Number {data.rollNumber || '000000'}</p>
            <p className="text-xs text-slate-500 italic">Session {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">Presented To</p>
          <div className="space-y-1">
            <p className="text-lg font-serif text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-xs text-slate-500 italic">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-xs text-slate-500 italic">Academic Supervisor</p>
          </div>
        </div>
      </div>
      
      <div className="text-[10px] font-serif italic text-slate-400 mb-16">
        Submitted on the {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 13. Bold Brutalist - High Impact & Graphic
export const BoldBrutalist: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-yellow-400">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
      <div className="text-[20rem] font-black text-black leading-none absolute -left-20 -top-20 select-none">ASGN</div>
    </div>
    
    <div className="relative z-10 flex flex-col h-full p-16 border-[16px] border-black">
      <div className="flex justify-between items-start mb-20">
        <div className="bg-black text-yellow-400 p-4 font-black text-2xl uppercase leading-none">
          {data.subjectCode || 'CODE'}
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-black text-black uppercase leading-none mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
          <p className="text-sm font-bold text-black uppercase tracking-tighter">DEPT OF {data.department || 'DEPT'}</p>
        </div>
      </div>
      
      <div className="mb-auto">
        <h2 className="text-7xl font-black text-black uppercase leading-[0.8] tracking-tighter mb-12 break-words">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <div className="inline-block bg-black text-white px-6 py-2 font-black uppercase text-xl transform -rotate-2">
          {data.subject || 'SUBJECT NAME'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-0 border-t-8 border-black pt-12">
        <div className="pr-8 border-r-4 border-black">
          <p className="text-xs font-black text-black uppercase mb-4">Submitted By</p>
          <p className="text-3xl font-black text-black uppercase leading-none mb-2">{data.studentName || 'STUDENT'}</p>
          <p className="text-sm font-bold text-black uppercase">Roll: {data.rollNumber || '000000'}</p>
          <p className="text-sm font-bold text-black uppercase">Session: {data.session || '2024-25'}</p>
        </div>
        <div className="pl-8">
          <p className="text-xs font-black text-black uppercase mb-4">Submitted To</p>
          <p className="text-3xl font-black text-black uppercase leading-none mb-2">{data.teacherName || 'TEACHER'}</p>
          <p className="text-sm font-bold text-black uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
          <p className="text-sm font-bold text-black uppercase">Date: {data.date || '11/12/2025'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 14. Eco Friendly - Organic & Natural
export const EcoFriendly: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#f4f7f2]">
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -mr-32 -mt-32 opacity-40" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full -ml-48 -mb-48 opacity-60" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-20 px-20">
      <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center p-4 mb-12">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-emerald-50 rounded-xl" />}
      </div>
      
      <h1 className="text-xl font-bold text-emerald-800 uppercase tracking-widest mb-2">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <div className="flex items-center gap-4 mb-24">
        <div className="h-px w-8 bg-emerald-200" />
        <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.4em]">Environmental Study</p>
        <div className="h-px w-8 bg-emerald-200" />
      </div>
      
      <div className="w-full text-center mb-24">
        <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-6">Assignment Topic</p>
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-emerald-700/60 uppercase tracking-widest">{data.subject || 'SUBJECT NAME'} • {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm">
          <p className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-xl font-bold text-slate-800">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-xs text-emerald-700/50 mt-1 font-bold uppercase">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm">
          <p className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-xl font-bold text-slate-800">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-xs text-emerald-700/50 mt-1 font-bold uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="flex justify-between w-full text-[10px] font-black text-emerald-800/30 uppercase tracking-widest mb-12">
        <span>Session: {data.session || '2024-25'}</span>
        <span>Date: {data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 15. Futuristic Neon - Vibrant & High Tech
export const FuturisticNeon: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#050505]">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20" style={{ background: 'radial-gradient(circle, #c026d3 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20" style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }} />
    </div>
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-16 text-center">
      <div className="mb-16">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-blue-500 p-[2px] shadow-[0_0_30px_rgba(217,70,239,0.3)]">
          <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center p-4">
            {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain brightness-0 invert" /> : <div className="text-[10px] text-fuchsia-500 font-black">NEON</div>}
          </div>
        </div>
      </div>
      
      <h1 className="text-xl font-black text-white uppercase tracking-[0.5em] mb-4">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
      <div className="h-1 w-12 bg-gradient-to-r from-fuchsia-500 to-blue-500 rounded-full mb-24" />
      
      <div className="mb-auto">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400 font-black text-[10px] uppercase tracking-widest mb-6">Digital Submission</p>
        <h2 className="text-6xl font-black text-white uppercase leading-none tracking-tighter mb-12">
          {data.topic || 'ENTER YOUR TOPIC HERE'}
        </h2>
        <div className="flex justify-center gap-4">
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 font-bold text-[10px] uppercase tracking-widest">{data.subject || 'SUBJECT'}</span>
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 font-bold text-[10px] uppercase tracking-widest">{data.subjectCode || '000000'}</span>
        </div>
      </div>
      
      <div className="w-full grid grid-cols-2 gap-4 mb-20">
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left backdrop-blur-md">
          <p className="text-fuchsia-400 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-xl font-bold text-white mb-1">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-xs text-white/40">ID: {data.rollNumber || '000000'}</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left backdrop-blur-md">
          <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-xl font-bold text-white mb-1">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-xs text-white/40">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="flex justify-between w-full text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-12">
        <span>Session {data.session || '2024-25'}</span>
        <span>{data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 16. Diagonal Split - Dynamic & Sharp
export const DiagonalSplit: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-full bg-slate-900" />
    <div className="absolute top-0 left-0 w-full h-full bg-red-600 transform -skew-y-12 origin-top-left translate-y-1/2" />
    
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="flex justify-between items-start mb-32">
        <div className="w-20 h-20 bg-white p-3 rounded-xl shadow-2xl">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-100" />}
        </div>
        <div className="text-right text-white">
          <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
          <p className="text-xs font-bold text-red-200 uppercase tracking-widest">Department of {data.department || 'DEPT'}</p>
        </div>
      </div>
      
      <div className="mb-auto max-w-2xl">
        <p className="text-red-400 font-black text-xs uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-7xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <div className="flex gap-4">
          <div className="h-1 w-12 bg-red-600" />
          <p className="text-sm font-bold text-white/60 uppercase tracking-widest">{data.subject || 'SUBJECT NAME'} // {data.subjectCode || '000000'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-20 pt-20">
        <div className="space-y-6">
          <p className="text-xs font-black text-white uppercase tracking-widest opacity-40">Submitted By</p>
          <div className="space-y-1">
            <p className="text-3xl font-black text-white uppercase leading-none">{data.studentName || 'STUDENT'}</p>
            <p className="text-sm font-bold text-white/60 uppercase">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm font-bold text-white/60 uppercase">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-black text-white uppercase tracking-widest opacity-40">Submitted To</p>
          <div className="space-y-1">
            <p className="text-3xl font-black text-white uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
            <p className="text-sm font-bold text-white/60 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm font-bold text-white/60 uppercase">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 17. Corporate Grid - Systematic & Professional
export const CorporateGrid: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-white">
    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
    
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex items-center gap-8 mb-32">
        <div className="w-24 h-24 border border-slate-200 p-4 flex items-center justify-center">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50" />}
        </div>
        <div className="h-16 w-px bg-slate-200" />
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
          <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">Academic Excellence</p>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-8 mb-auto">
        <div className="col-span-1">
          <div className="h-full w-2 bg-blue-600" />
        </div>
        <div className="col-span-11">
          <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-6">Assignment Submission</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.9] mb-12">{data.topic || 'TOPIC HERE'}</h2>
          <div className="flex gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <div className="space-y-1">
              <p className="text-[10px] text-blue-600">Subject</p>
              <p>{data.subject || 'SUBJECT NAME'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-blue-600">Code</p>
              <p>{data.subjectCode || '000000'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-blue-600">Department</p>
              <p>{data.department || 'DEPARTMENT'}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 mt-20">
        <div className="bg-white p-12">
          <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-6">Submitted By</p>
          <div className="space-y-1">
            <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm font-bold text-slate-400 uppercase">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm font-bold text-slate-400 uppercase">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="bg-white p-12">
          <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-6">Submitted To</p>
          <div className="space-y-1">
            <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm font-bold text-slate-400 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm font-bold text-slate-400 uppercase">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 18. Artistic Brush - Creative & Expressive
export const ArtisticBrush: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#fafafa]">
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-32 -mt-32 opacity-30" style={{ background: 'radial-gradient(circle, #ffe4e6 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full -ml-32 -mb-32 opacity-30" style={{ background: 'radial-gradient(circle, #fef3c7 0%, transparent 70%)' }} />
    </div>
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-20 text-center">
      <div className="mb-16">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{data.collegeName || 'GOVT. COLLEGE NAME'}</h1>
        <p className="text-rose-500 font-bold text-xs uppercase tracking-[0.6em]">Creative Arts & Design</p>
      </div>
      
      <div className="mb-auto relative">
        <div className="absolute -inset-10 bg-white/40 backdrop-blur-sm rounded-[4rem] -rotate-2" />
        <div className="relative z-10">
          <p className="text-amber-500 font-black text-xs uppercase tracking-widest mb-8">Assignment Topic</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.85] tracking-tighter mb-12">
            {data.topic || 'ENTER YOUR TOPIC HERE'}
          </h2>
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest">
            {data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-8 mb-24">
        <div className="flex justify-between items-end border-b-4 border-slate-900 pb-4">
          <div className="text-left">
            <p className="text-rose-500 font-black text-[10px] uppercase tracking-widest mb-2">Student Name</p>
            <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT NAME'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500 uppercase">Roll: {data.rollNumber || '000000'}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-end border-b-4 border-slate-900 pb-4">
          <div className="text-left">
            <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest mb-2">Supervisor</p>
            <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER NAME'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between w-full text-xs font-black text-slate-300 uppercase tracking-[0.4em] mb-12">
        <span>Session {data.session || '2024-25'}</span>
        <span>{data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 19. Minimal Line - Simple & Pure
export const MinimalLine: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-24 left-24 bottom-24 right-24 border-l border-slate-200" />
    
    <div className="relative z-10 flex flex-col h-full p-32">
      <div className="mb-32">
        <h1 className="text-sm font-black text-slate-900 uppercase tracking-[0.5em] mb-4">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-1 bg-slate-900" />
      </div>
      
      <div className="mb-auto">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Assignment Submission</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-16 max-w-lg">{data.topic || 'TOPIC HERE'}</h2>
        
        <div className="space-y-4">
          <div className="flex gap-8 items-center">
            <span className="w-24 text-[10px] font-black text-slate-300 uppercase tracking-widest">Subject</span>
            <span className="text-sm font-bold text-slate-900 uppercase">{data.subject || 'SUBJECT NAME'}</span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="w-24 text-[10px] font-black text-slate-300 uppercase tracking-widest">Code</span>
            <span className="text-sm font-bold text-slate-900 uppercase">{data.subjectCode || '000000'}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-24">
          <div className="space-y-4">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Student</p>
            <div className="space-y-1">
              <p className="text-xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
              <p className="text-xs text-slate-500 uppercase font-bold">Roll: {data.rollNumber || '000000'}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supervisor</p>
            <div className="space-y-1">
              <p className="text-xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
              <p className="text-xs text-slate-500 uppercase font-bold">{data.teacherDesignation || 'DESIGNATION'}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-12 border-t border-slate-100 text-[10px] font-black text-slate-300 uppercase tracking-widest">
          <span>Session {data.session || '2024-25'}</span>
          <span>{data.date || '11/12/2025'}</span>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 20. Geometric Mosaic - Vibrant & Patterned
export const GeometricMosaic: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-white">
    <div className="absolute top-0 left-0 w-full h-48 bg-indigo-600 flex">
      <div className="flex-1 bg-indigo-500 transform skew-x-12" />
      <div className="flex-1 bg-indigo-700 transform -skew-x-12" />
      <div className="flex-1 bg-indigo-400 transform skew-x-12" />
    </div>
    
    <div className="relative z-10 flex flex-col items-center h-full pt-12 px-16">
      <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 mb-8">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-indigo-50 rounded-full" />}
      </div>
      
      <h1 className="text-white text-2xl font-black uppercase tracking-widest mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      
      <div className="w-full bg-slate-50 p-12 rounded-[3rem] border-t-8 border-indigo-600 shadow-xl mb-20 text-center">
        <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Assignment Topic</p>
        <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest">
          {data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12 w-full mt-auto mb-24">
        <div className="space-y-4">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest">Submitted By</p>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
            <p className="text-sm text-slate-500">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-slate-500">Dept: {data.department || 'DEPT'}</p>
          </div>
        </div>
        <div className="space-y-4 text-right">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest">Submitted To</p>
          <div className="space-y-1">
            <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
            <p className="text-sm text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm text-slate-500">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 21. Vintage Journal - Classic & Warm
export const VintageJournal: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#f4eee0]">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }} />
    <div className="absolute inset-16 border-2 border-[#8b5e34]/30 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-32 px-24 text-center">
      <h1 className="text-2xl font-serif text-[#5d4037] uppercase tracking-[0.3em] mb-4">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="w-16 h-px bg-[#8b5e34] mb-24" />
      
      <div className="mb-auto">
        <p className="text-[#8b5e34] font-serif italic text-sm mb-8">An Academic Assignment on</p>
        <h2 className="text-5xl font-serif text-[#3e2723] leading-tight mb-12 uppercase">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-xs font-black text-[#8b5e34]/60 uppercase tracking-[0.5em]">{data.subject || 'SUBJECT'} // {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="w-full space-y-16 mb-24">
        <div className="flex justify-between items-end border-b border-[#8b5e34]/20 pb-4">
          <div className="text-left">
            <p className="text-[10px] font-black text-[#8b5e34] uppercase tracking-widest mb-2">Submitted By</p>
            <p className="text-2xl font-serif text-[#3e2723]">{data.studentName || 'STUDENT NAME'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-serif italic text-[#5d4037]">Roll: {data.rollNumber || '000000'}</p>
          </div>
        </div>
        <div className="flex justify-between items-end border-b border-[#8b5e34]/20 pb-4">
          <div className="text-left">
            <p className="text-[10px] font-black text-[#8b5e34] uppercase tracking-widest mb-2">Submitted To</p>
            <p className="text-2xl font-serif text-[#3e2723]">{data.teacherName || 'TEACHER NAME'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-serif italic text-[#5d4037]">{data.teacherDesignation || 'DESIGNATION'}</p>
          </div>
        </div>
      </div>
      
      <div className="text-[10px] font-serif italic text-[#8b5e34] mb-16">
        Dated this {data.date || '11/12/2025'}
      </div>
    </div>
  </PageWrapper>
);

// 22. Modern Sidebar - Clean & Structured
export const ModernSidebar: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-600" />
    
    <div className="relative z-10 flex h-full">
      <div className="w-1/3 p-12 flex flex-col text-white">
        <div className="w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center p-4 mb-12">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain brightness-0 invert" /> : <div className="text-xs font-black">LOGO</div>}
        </div>
        
        <div className="mt-auto space-y-12 pb-12">
          <div>
            <p className="text-[10px] font-black text-teal-200 uppercase tracking-widest mb-4">Student Info</p>
            <p className="text-xl font-bold leading-tight mb-1">{data.studentName || 'STUDENT'}</p>
            <p className="text-sm text-teal-100">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-teal-100">Session: {data.session || '2024-25'}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-teal-200 uppercase tracking-widest mb-4">Submission</p>
            <p className="text-sm text-teal-100">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
      
      <div className="w-2/3 p-20 flex flex-col">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-24">Department of {data.department || 'DEPT'}</p>
        
        <div className="mb-auto">
          <p className="text-slate-300 font-black text-xs uppercase tracking-[0.5em] mb-8">Assignment</p>
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.9] mb-12">{data.topic || 'TOPIC HERE'}</h2>
          <div className="flex gap-4 items-center">
            <div className="h-1 w-12 bg-teal-600" />
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'} // {data.subjectCode || '000000'}</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100">
          <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-sm font-bold text-slate-400 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 23. Abstract Dots - Playful & Modern
export const AbstractDots: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-900">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#6366f1 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 opacity-30" style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-16 text-center">
      <div className="mb-16">
        <h1 className="text-2xl font-black text-white uppercase tracking-[0.4em] mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="h-1 w-24 bg-indigo-500 mx-auto" />
      </div>
      
      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[4rem] mb-20">
        <p className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-6">Assignment Topic</p>
        <h2 className="text-5xl font-black text-white uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="text-left p-8 border-l-4 border-indigo-500 bg-white/5">
          <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-xl font-bold text-white mb-1">{data.studentName || 'STUDENT'}</p>
          <p className="text-xs text-slate-400">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="text-left p-8 border-l-4 border-indigo-500 bg-white/5">
          <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-xl font-bold text-white mb-1">{data.teacherName || 'TEACHER'}</p>
          <p className="text-xs text-slate-400">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="flex justify-between w-full text-[10px] font-black text-slate-600 uppercase tracking-widest mb-12">
        <span>Dept: {data.department || 'DEPT'}</span>
        <span>Date: {data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 24. Professional Border - Formal & Elegant
export const ProfessionalBorder: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-0 border-[24px] border-slate-900 pointer-events-none" />
    <div className="absolute inset-[32px] border-2 border-slate-200 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-32 px-24 text-center">
      <div className="w-24 h-24 mb-12">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50 border border-slate-200" />}
      </div>
      
      <h1 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em] mb-24">Academic Submission</p>
      
      <div className="mb-auto">
        <p className="text-slate-500 font-black text-xs uppercase tracking-widest mb-8">Assignment Topic</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-16 h-2 bg-slate-900 mx-auto mb-12" />
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'} ({data.subjectCode || '000000'})</p>
      </div>
      
      <div className="w-full grid grid-cols-2 gap-16 mb-32 text-left">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Submitted By</p>
          <div className="space-y-1">
            <p className="text-xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT'}</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Submitted To</p>
          <div className="space-y-1">
            <p className="text-xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER'}</p>
            <p className="text-xs font-bold text-slate-500 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 25. Creative Shapes - Bold & Artistic
export const CreativeShapes: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-violet-50">
    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-violet-600 transform skew-x-12 translate-x-1/4 -translate-y-1/4" />
    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-500 transform -skew-x-12 -translate-x-1/4 translate-y-1/4" />
    
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="flex justify-between items-start mb-32">
        <div className="bg-white p-4 rounded-3xl shadow-xl">
          <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none">{data.collegeName || 'COLLEGE'}</h1>
        </div>
        <div className="text-right text-white">
          <p className="text-xs font-black uppercase tracking-widest">Dept of {data.department || 'DEPT'}</p>
        </div>
      </div>
      
      <div className="mb-auto mt-12">
        <h2 className="text-8xl font-black text-slate-900 uppercase leading-[0.8] tracking-tighter mb-12">
          {data.topic || 'TOPIC'}
        </h2>
        <div className="inline-block bg-white px-8 py-3 rounded-full shadow-lg text-violet-600 font-black uppercase text-xl">
          {data.subject || 'SUBJECT NAME'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12 mt-auto pb-12">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-xl">
          <p className="text-violet-600 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-2xl font-black text-slate-900 uppercase leading-none mb-2">{data.studentName || 'STUDENT'}</p>
          <p className="text-sm font-bold text-slate-500">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-xl">
          <p className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-2xl font-black text-slate-900 uppercase leading-none mb-2">{data.teacherName || 'TEACHER'}</p>
          <p className="text-sm font-bold text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <span>Session {data.session || '2024-25'}</span>
        <span>{data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 26. Tech Blueprint - Engineering & Technical
export const TechBlueprint: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#1a3a5a]">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="absolute inset-8 border border-white/20 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full p-20 text-white">
      <div className="flex justify-between items-start mb-24">
        <div>
          <h1 className="text-xl font-black uppercase tracking-widest mb-1">{data.collegeName || 'COLLEGE NAME'}</h1>
          <p className="text-xs font-bold text-blue-300 uppercase">Engineering Portfolio</p>
        </div>
        <div className="w-16 h-16 border-2 border-white/30 p-2">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain brightness-0 invert" /> : <div className="w-full h-full bg-white/10" />}
        </div>
      </div>
      
      <div className="mb-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-blue-400" />
          <p className="text-blue-300 font-mono text-[10px] uppercase tracking-widest">Project_ID: {data.subjectCode || '000000'}</p>
        </div>
        <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-12 border-l-8 border-blue-500 pl-8">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <p className="text-xl font-bold text-blue-200 uppercase tracking-widest">{data.subject || 'SUBJECT NAME'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-12">
        <div className="p-10">
          <p className="text-blue-400 font-mono text-[10px] uppercase mb-4 tracking-widest">Author</p>
          <p className="text-2xl font-black uppercase mb-1">{data.studentName || 'STUDENT'}</p>
          <p className="text-xs text-blue-200/60 font-mono">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="p-10">
          <p className="text-blue-400 font-mono text-[10px] uppercase mb-4 tracking-widest">Reviewer</p>
          <p className="text-2xl font-black uppercase mb-1">{data.teacherName || 'TEACHER'}</p>
          <p className="text-xs text-blue-200/60 font-mono">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-[10px] font-mono text-blue-300/40 uppercase tracking-widest">
        <span>Dept: {data.department || 'DEPT'}</span>
        <span>Date: {data.date || '11/12/2025'}</span>
      </div>
    </div>
  </PageWrapper>
);

// 27. Minimalist Card - Clean & Modern
export const MinimalistCard: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="relative z-10 flex flex-col items-center h-full pt-32 px-16">
      <div className="w-full max-w-xl bg-white p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white flex flex-col items-center text-center mb-auto">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-3 mb-12">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain grayscale opacity-50" /> : <div className="w-full h-full bg-slate-100" />}
        </div>
        
        <h1 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
        
        <p className="text-slate-300 font-black text-[10px] uppercase tracking-widest mb-4">Assignment Topic</p>
        <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        
        <div className="w-12 h-1 bg-slate-900 rounded-full mb-12" />
        
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="w-full max-w-xl grid grid-cols-2 gap-12 mb-24">
        <div className="text-left">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.studentName || 'STUDENT'}</p>
          <p className="text-xs text-slate-400 font-bold uppercase mt-1">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.teacherName || 'TEACHER'}</p>
          <p className="text-xs text-slate-400 font-bold uppercase mt-1">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-12">
        {data.date || '11/12/2025'} // Session {data.session || '2024-25'}
      </div>
    </div>
  </PageWrapper>
);

// 28. Bold Header - High Contrast & Modern
export const BoldHeader: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-2/5 bg-slate-900" />
    
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="flex justify-between items-start mb-24">
        <div className="w-20 h-20 bg-white p-3 rounded-2xl shadow-2xl">
          {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50" />}
        </div>
        <div className="text-right text-white">
          <h1 className="text-xl font-black uppercase tracking-widest mb-1">{data.collegeName || 'COLLEGE NAME'}</h1>
          <p className="text-xs font-bold text-slate-400 uppercase">Department of {data.department || 'DEPT'}</p>
        </div>
      </div>
      
      <div className="mb-auto pt-12">
        <p className="text-white/40 font-black text-xs uppercase tracking-[0.5em] mb-8">Assignment Submission</p>
        <h2 className="text-7xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <div className="inline-block bg-red-600 text-white px-8 py-3 font-black uppercase text-xl shadow-2xl shadow-red-600/20">
          {data.subject || 'SUBJECT NAME'}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-20 pt-20 border-t border-slate-100">
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted By</p>
          <div className="space-y-1">
            <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
            <p className="text-sm font-bold text-slate-500 uppercase">Roll: {data.rollNumber || '000000'}</p>
            <p className="text-sm font-bold text-slate-500 uppercase">Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted To</p>
          <div className="space-y-1">
            <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
            <p className="text-sm font-bold text-slate-500 uppercase">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm font-bold text-slate-500 uppercase">Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 29. Soft Gradient - Gentle & Modern
export const SoftGradient: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-gradient-to-br from-sky-50 via-white to-pink-50">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-32 -mt-32 opacity-30" style={{ background: 'radial-gradient(circle, #bae6fd 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full -ml-32 -mb-32 opacity-30" style={{ background: 'radial-gradient(circle, #fbcfe8 0%, transparent 70%)' }} />
    </div>
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-20 text-center">
      <div className="mb-16">
        <h1 className="text-xl font-black text-slate-900 uppercase tracking-[0.4em] mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="h-0.5 w-full bg-gradient-to-r from-sky-200 via-slate-200 to-pink-200" />
      </div>
      
      <div className="w-full bg-white/60 backdrop-blur-xl rounded-[4rem] p-16 shadow-2xl shadow-slate-200/50 mb-20">
        <p className="text-sky-400 font-black text-xs uppercase tracking-widest mb-6">Assignment Topic</p>
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-sky-500 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-xl font-bold text-slate-800">{data.studentName || 'STUDENT NAME'}</p>
          <p className="text-xs text-slate-400 font-bold uppercase mt-1">Roll: {data.rollNumber || '000000'}</p>
        </div>
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-pink-500 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-xl font-bold text-slate-800">{data.teacherName || 'TEACHER NAME'}</p>
          <p className="text-xs text-slate-400 font-bold uppercase mt-1">{data.teacherDesignation || 'DESIGNATION'}</p>
        </div>
      </div>
      
      <div className="text-slate-300 font-black text-[10px] uppercase tracking-widest mb-12">
        {data.date || '11/12/2025'} // Session {data.session || '2024-25'}
      </div>
    </div>
  </PageWrapper>
);

// 30. Academic Shield - Traditional & Formal
export const AcademicShield: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#fcfcfc]">
    <div className="absolute top-0 left-0 w-full h-4 bg-maroon-800" style={{ backgroundColor: '#800000' }} />
    <div className="absolute bottom-0 left-0 w-full h-4 bg-maroon-800" style={{ backgroundColor: '#800000' }} />
    
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-24 text-center">
      <div className="w-28 h-28 border-4 border-[#800000] p-2 mb-12 rounded-full overflow-hidden">
        {data.logoUrl ? <img src={data.logoUrl} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-50" />}
      </div>
      
      <h1 className="text-2xl font-serif font-bold text-[#800000] uppercase tracking-tight mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.4em] mb-24">Department of {data.department || 'DEPT'}</p>
      
      <div className="mb-auto">
        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-8">Official Assignment Submission</p>
        <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight mb-12 uppercase">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-32 h-1 bg-[#800000] mx-auto mb-12" />
        <p className="text-lg font-serif italic text-slate-600">{data.subject || 'SUBJECT NAME'} ({data.subjectCode || '000000'})</p>
      </div>
      
      <div className="w-full grid grid-cols-2 gap-20 mb-24 text-left">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-[#800000] uppercase tracking-widest border-b border-maroon-100 pb-2">Student Information</p>
          <div className="space-y-1">
            <p className="text-xl font-serif font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
            <p className="text-sm text-slate-500">Roll Number: {data.rollNumber || '000000'}</p>
            <p className="text-sm text-slate-500">Academic Session: {data.session || '2024-25'}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-[#800000] uppercase tracking-widest border-b border-maroon-100 pb-2">Faculty Supervisor</p>
          <div className="space-y-1">
            <p className="text-xl font-serif font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
            <p className="text-sm text-slate-500">{data.teacherDesignation || 'DESIGNATION'}</p>
            <p className="text-sm text-slate-500">Submission Date: {data.date || '11/12/2025'}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 31. Modern Minimal - Blue
export const ModernMinimalBlue: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="mb-24">
        <h1 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-0.5 bg-blue-600" />
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-slate-100">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Student</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supervisor</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 32. Modern Minimal - Red
export const ModernMinimalRed: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="mb-24">
        <h1 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-0.5 bg-red-600" />
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-slate-100">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Student</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supervisor</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 33. Geometric Accent - Purple
export const GeometricAccentPurple: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 transform rotate-45 translate-x-32 -translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-purple-600 font-bold text-xs uppercase tracking-widest">Academic Assignment</p>
      </div>
      <div className="w-full h-1 bg-slate-100 mb-20" />
      <div className="mb-auto">
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block bg-purple-600 text-white px-6 py-2 font-black uppercase text-sm">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted By</p>
          <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted To</p>
          <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 34. Geometric Accent - Emerald
export const GeometricAccentEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 transform rotate-45 translate-x-32 -translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Academic Assignment</p>
      </div>
      <div className="w-full h-1 bg-slate-100 mb-20" />
      <div className="mb-auto">
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block bg-emerald-600 text-white px-6 py-2 font-black uppercase text-sm">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted By</p>
          <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted To</p>
          <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 35. Border Focus - Slate
export const BorderFocusSlate: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-12 border-4 border-slate-900 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-24 text-center">
      <h1 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-16 h-1 bg-slate-900 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-8 text-left mt-auto">
        <div className="border-l-2 border-slate-900 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="border-l-2 border-slate-900 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 36. Border Focus - Indigo
export const BorderFocusIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-12 border-4 border-indigo-600 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-24 text-center">
      <h1 className="text-xl font-black text-indigo-600 uppercase tracking-widest mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-indigo-300 font-black text-[10px] uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-16 h-1 bg-indigo-600 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-8 text-left mt-auto">
        <div className="border-l-2 border-indigo-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="border-l-2 border-indigo-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 37. Sidebar Elegant - Rose
export const SidebarElegantRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-24 h-full bg-rose-500" />
    <div className="relative z-10 flex h-full ml-24 p-20 flex-col">
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-24">Academic Excellence</p>
      <div className="mb-auto">
        <h2 className="text-7xl font-black text-slate-900 uppercase leading-[0.8] tracking-tighter mb-12">{data.topic || 'TOPIC'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-rose-500 uppercase mb-2">Submitted By</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-rose-500 uppercase mb-2">Submitted To</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 38. Sidebar Elegant - Amber
export const SidebarElegantAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-24 h-full bg-amber-500" />
    <div className="relative z-10 flex h-full ml-24 p-20 flex-col">
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-24">Academic Excellence</p>
      <div className="mb-auto">
        <h2 className="text-7xl font-black text-slate-900 uppercase leading-[0.8] tracking-tighter mb-12">{data.topic || 'TOPIC'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-amber-500 uppercase mb-2">Submitted By</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-amber-500 uppercase mb-2">Submitted To</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 39. Tech Grid - Blue
export const TechGridBlue: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-950">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-mono text-indigo-500 tracking-[0.3em] mb-24 uppercase">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-indigo-400/50 font-mono text-[10px] uppercase mb-4">SYSTEM.LOG_ID: {data.subjectCode || '000000'}</p>
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block px-4 py-1 border border-indigo-500/30 rounded text-indigo-400 font-mono text-xs">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-px bg-indigo-500/20 border border-indigo-500/20 rounded-lg overflow-hidden mt-auto">
        <div className="p-8 text-left bg-slate-950">
          <p className="text-indigo-500 font-mono text-[10px] uppercase mb-2">STUDENT</p>
          <p className="text-xl font-bold text-white">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="p-8 text-left bg-slate-950">
          <p className="text-indigo-500 font-mono text-[10px] uppercase mb-2">SUPERVISOR</p>
          <p className="text-xl font-bold text-white">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 40. Tech Grid - Cyan
export const TechGridCyan: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-950">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-mono text-cyan-500 tracking-[0.3em] mb-24 uppercase">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-cyan-400/50 font-mono text-[10px] uppercase mb-4">SYSTEM.LOG_ID: {data.subjectCode || '000000'}</p>
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded text-cyan-400 font-mono text-xs">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-px bg-cyan-500/20 border border-cyan-500/20 rounded-lg overflow-hidden mt-auto">
        <div className="p-8 text-left bg-slate-950">
          <p className="text-cyan-500 font-mono text-[10px] uppercase mb-2">STUDENT</p>
          <p className="text-xl font-bold text-white">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="p-8 text-left bg-slate-950">
          <p className="text-cyan-500 font-mono text-[10px] uppercase mb-2">SUPERVISOR</p>
          <p className="text-xl font-bold text-white">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 41. Soft Pastel - Mint
export const SoftPastelMint: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-emerald-50/30">
    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -mr-32 -mt-32 opacity-50" />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-bold text-emerald-600 uppercase tracking-widest mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 mt-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
          <p className="text-emerald-400 font-black text-[10px] uppercase mb-2">Student</p>
          <p className="text-lg font-bold text-slate-800">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
          <p className="text-emerald-400 font-black text-[10px] uppercase mb-2">Supervisor</p>
          <p className="text-lg font-bold text-slate-800">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 42. Soft Pastel - Sky
export const SoftPastelSky: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-sky-50/30">
    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full -mr-32 -mt-32 opacity-50" />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-bold text-sky-600 uppercase tracking-widest mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-sky-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 mt-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-sky-100">
          <p className="text-sky-400 font-black text-[10px] uppercase mb-2">Student</p>
          <p className="text-lg font-bold text-slate-800">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-sky-100">
          <p className="text-sky-400 font-black text-[10px] uppercase mb-2">Supervisor</p>
          <p className="text-lg font-bold text-slate-800">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 43. Bold Typography - Black
export const BoldTypographyBlack: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="relative z-10 flex flex-col h-full p-16">
      <h1 className="text-8xl font-black text-slate-900 uppercase leading-[0.75] tracking-tighter mb-24">
        {data.topic || 'TOPIC'}
      </h1>
      <div className="mb-auto">
        <p className="text-2xl font-black text-slate-900 uppercase mb-4">{data.collegeName || 'COLLEGE NAME'}</p>
        <div className="w-24 h-4 bg-slate-900" />
      </div>
      <div className="grid grid-cols-2 gap-16 pt-12 border-t-4 border-slate-900">
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 44. Bold Typography - Indigo
export const BoldTypographyIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="relative z-10 flex flex-col h-full p-16">
      <h1 className="text-8xl font-black text-indigo-600 uppercase leading-[0.75] tracking-tighter mb-24">
        {data.topic || 'TOPIC'}
      </h1>
      <div className="mb-auto">
        <p className="text-2xl font-black text-slate-900 uppercase mb-4">{data.collegeName || 'COLLEGE NAME'}</p>
        <div className="w-24 h-4 bg-indigo-600" />
      </div>
      <div className="grid grid-cols-2 gap-16 pt-12 border-t-4 border-indigo-600">
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 61. Soft Pastel - Rose
export const SoftPastelRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-rose-50/30">
    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full -mr-32 -mt-32 opacity-50" />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-bold text-rose-600 uppercase tracking-widest mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-rose-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 mt-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100">
          <p className="text-rose-400 font-black text-[10px] uppercase mb-2">Student</p>
          <p className="text-lg font-bold text-slate-800">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100">
          <p className="text-rose-400 font-black text-[10px] uppercase mb-2">Supervisor</p>
          <p className="text-lg font-bold text-slate-800">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 62. Soft Pastel - Violet
export const SoftPastelViolet: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-violet-50/30">
    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full -mr-32 -mt-32 opacity-50" />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-bold text-violet-600 uppercase tracking-widest mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-violet-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 mt-auto">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-violet-100">
          <p className="text-violet-400 font-black text-[10px] uppercase mb-2">Student</p>
          <p className="text-lg font-bold text-slate-800">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-violet-100">
          <p className="text-violet-400 font-black text-[10px] uppercase mb-2">Supervisor</p>
          <p className="text-lg font-bold text-slate-800">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 63. Bold Typography - Emerald
export const BoldTypographyEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="relative z-10 flex flex-col h-full p-16">
      <h1 className="text-8xl font-black text-emerald-600 uppercase leading-[0.75] tracking-tighter mb-24">
        {data.topic || 'TOPIC'}
      </h1>
      <div className="mb-auto">
        <p className="text-2xl font-black text-slate-900 uppercase mb-4">{data.collegeName || 'COLLEGE NAME'}</p>
        <div className="w-24 h-4 bg-emerald-600" />
      </div>
      <div className="grid grid-cols-2 gap-16 pt-12 border-t-4 border-emerald-600">
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 64. Bold Typography - Amber
export const BoldTypographyAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="relative z-10 flex flex-col h-full p-16">
      <h1 className="text-8xl font-black text-amber-600 uppercase leading-[0.75] tracking-tighter mb-24">
        {data.topic || 'TOPIC'}
      </h1>
      <div className="mb-auto">
        <p className="text-2xl font-black text-slate-900 uppercase mb-4">{data.collegeName || 'COLLEGE NAME'}</p>
        <div className="w-24 h-4 bg-amber-600" />
      </div>
      <div className="grid grid-cols-2 gap-16 pt-12 border-t-4 border-amber-600">
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase mb-4">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 65. Classic Academic - Emerald
export const ClassicAcademicEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-0 border-[20px] border-emerald-900 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-32 text-center">
      <h1 className="text-2xl font-serif font-bold text-emerald-900 uppercase mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-sm font-serif italic text-slate-500 mb-24">Academic Year {data.session || '2024-25'}</p>
      <div className="mb-auto">
        <h2 className="text-5xl font-serif font-bold text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-32 h-0.5 bg-emerald-900 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-16 text-left mt-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Student</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Supervisor</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 82. Classic Academic - Navy
export const ClassicAcademicNavy: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-0 border-[20px] border-slate-900 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-32 text-center">
      <h1 className="text-2xl font-serif font-bold text-slate-900 uppercase mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-sm font-serif italic text-slate-500 mb-24">Academic Year {data.session || '2024-25'}</p>
      <div className="mb-auto">
        <h2 className="text-5xl font-serif font-bold text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-32 h-0.5 bg-slate-900 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-16 text-left mt-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Student</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Supervisor</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 83. Classic Academic - Maroon
export const ClassicAcademicMaroon: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-0 border-[20px] border-red-900 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-32 text-center">
      <h1 className="text-2xl font-serif font-bold text-red-900 uppercase mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-sm font-serif italic text-slate-500 mb-24">Academic Year {data.session || '2024-25'}</p>
      <div className="mb-auto">
        <h2 className="text-5xl font-serif font-bold text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-32 h-0.5 bg-red-900 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-16 text-left mt-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Student</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Supervisor</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 66. Creative Wave - Emerald
export const CreativeWaveEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute bottom-0 left-0 w-full h-64 bg-emerald-600 transform skew-y-6 origin-bottom-left translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-2 bg-emerald-600" />
      </div>
      <div className="mb-auto">
        <p className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-4">Assignment Submission</p>
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-auto pb-12 text-white">
        <div>
          <p className="text-[10px] font-black text-emerald-200 uppercase mb-2">Student</p>
          <p className="text-2xl font-black uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-emerald-200 uppercase mb-2">Supervisor</p>
          <p className="text-2xl font-black uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 67. Creative Wave - Purple
export const CreativeWavePurple: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute bottom-0 left-0 w-full h-64 bg-purple-600 transform skew-y-6 origin-bottom-left translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-2 bg-purple-600" />
      </div>
      <div className="mb-auto">
        <p className="text-purple-600 font-black text-xs uppercase tracking-widest mb-4">Assignment Submission</p>
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-auto pb-12 text-white">
        <div>
          <p className="text-[10px] font-black text-purple-200 uppercase mb-2">Student</p>
          <p className="text-2xl font-black uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-purple-200 uppercase mb-2">Supervisor</p>
          <p className="text-2xl font-black uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 68. Professional Clean - Emerald
export const ProfessionalCleanEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-emerald-50/30">
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex justify-between items-start mb-32">
        <h1 className="text-sm font-black text-emerald-600 uppercase tracking-widest">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-[10px] text-emerald-400 font-bold uppercase">{data.date || '11/12/2025'}</p>
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="flex gap-4 items-center">
          <div className="h-0.5 w-8 bg-emerald-600" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-emerald-200">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Presented By</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Presented To</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 69. Professional Clean - Amber
export const ProfessionalCleanAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-amber-50/30">
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex justify-between items-start mb-32">
        <h1 className="text-sm font-black text-amber-600 uppercase tracking-widest">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-[10px] text-amber-400 font-bold uppercase">{data.date || '11/12/2025'}</p>
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="flex gap-4 items-center">
          <div className="h-0.5 w-8 bg-amber-600" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-amber-200">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Presented By</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Presented To</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 70. Modern Sidebar - Purple
export const ModernSidebarPurple: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-1/3 h-full bg-purple-600" />
    <div className="relative z-10 flex h-full">
      <div className="w-1/3 p-12 flex flex-col text-white">
        <div className="mt-auto space-y-12 pb-12">
          <div>
            <p className="text-[10px] font-black text-purple-200 uppercase tracking-widest mb-4">Student Info</p>
            <p className="text-xl font-bold leading-tight mb-1">{data.studentName || 'STUDENT'}</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-20 flex flex-col">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="mb-auto">
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.9] mb-12">{data.topic || 'TOPIC HERE'}</h2>
        </div>
        <div className="pt-12 border-t border-slate-100">
          <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 71. Modern Sidebar - Rose
export const ModernSidebarRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-1/3 h-full bg-rose-600" />
    <div className="relative z-10 flex h-full">
      <div className="w-1/3 p-12 flex flex-col text-white">
        <div className="mt-auto space-y-12 pb-12">
          <div>
            <p className="text-[10px] font-black text-rose-200 uppercase tracking-widest mb-4">Student Info</p>
            <p className="text-xl font-bold leading-tight mb-1">{data.studentName || 'STUDENT'}</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-20 flex flex-col">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="mb-auto">
          <h2 className="text-6xl font-black text-slate-900 uppercase leading-[0.9] mb-12">{data.topic || 'TOPIC HERE'}</h2>
        </div>
        <div className="pt-12 border-t border-slate-100">
          <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 72. Abstract Waves - Indigo
export const AbstractWavesIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full pt-20 px-16">
      <h1 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="w-full relative py-12 px-8 mb-20">
        <div className="absolute inset-0 bg-white shadow-xl rounded-3xl transform -rotate-1" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight">{data.topic || 'TOPIC HERE'}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 73. Abstract Waves - Rose
export const AbstractWavesRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#e11d48 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full pt-20 px-16">
      <h1 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="w-full relative py-12 px-8 mb-20">
        <div className="absolute inset-0 bg-white shadow-xl rounded-3xl transform -rotate-1" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight">{data.topic || 'TOPIC HERE'}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-rose-600 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-rose-600 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 74. Minimalist Card - Indigo
export const MinimalistCardIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="relative z-10 flex flex-col items-center h-full pt-32 px-16">
      <div className="w-full max-w-xl bg-white p-16 rounded-[3rem] shadow-2xl shadow-indigo-200/50 border border-white flex flex-col items-center text-center mb-auto">
        <h1 className="text-sm font-black text-indigo-400 uppercase tracking-[0.4em] mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
        <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-12 h-1 bg-indigo-600 rounded-full mb-12" />
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full max-w-xl grid grid-cols-2 gap-12 mb-24">
        <div className="text-left">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 75. Minimalist Card - Emerald
export const MinimalistCardEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="relative z-10 flex flex-col items-center h-full pt-32 px-16">
      <div className="w-full max-w-xl bg-white p-16 rounded-[3rem] shadow-2xl shadow-emerald-200/50 border border-white flex flex-col items-center text-center mb-auto">
        <h1 className="text-sm font-black text-emerald-400 uppercase tracking-[0.4em] mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
        <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-12">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-12 h-1 bg-emerald-600 rounded-full mb-12" />
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="w-full max-w-xl grid grid-cols-2 gap-12 mb-24">
        <div className="text-left">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted By</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Submitted To</p>
          <p className="text-lg font-bold text-slate-900 uppercase leading-tight">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 76. Bold Header - Red
export const BoldHeaderRed: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-2/5 bg-red-900" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="flex justify-between items-start mb-24 text-white">
        <h1 className="text-xl font-black uppercase tracking-widest mb-1">{data.collegeName || 'COLLEGE NAME'}</h1>
      </div>
      <div className="mb-auto pt-12">
        <h2 className="text-7xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <div className="inline-block bg-white text-red-900 px-8 py-3 font-black uppercase text-xl shadow-2xl">
          {data.subject || 'SUBJECT NAME'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 pt-20 border-t border-slate-100">
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 77. Bold Header - Emerald
export const BoldHeaderEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-2/5 bg-emerald-900" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="flex justify-between items-start mb-24 text-white">
        <h1 className="text-xl font-black uppercase tracking-widest mb-1">{data.collegeName || 'COLLEGE NAME'}</h1>
      </div>
      <div className="mb-auto pt-12">
        <h2 className="text-7xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          {data.topic || 'TOPIC HERE'}
        </h2>
        <div className="inline-block bg-white text-emerald-900 px-8 py-3 font-black uppercase text-xl shadow-2xl">
          {data.subject || 'SUBJECT NAME'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 pt-20 border-t border-slate-100">
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted By</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Submitted To</p>
          <p className="text-3xl font-black text-slate-900 uppercase leading-none">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 78. Soft Gradient - Indigo
export const SoftGradientIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-20 text-center">
      <h1 className="text-xl font-black text-slate-900 uppercase tracking-[0.4em] mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="w-full bg-white/60 backdrop-blur-xl rounded-[4rem] p-16 shadow-2xl shadow-indigo-200/50 mb-20">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-indigo-500 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-xl font-bold text-slate-800">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-purple-500 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-xl font-bold text-slate-800">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 79. Soft Gradient - Emerald
export const SoftGradientEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-20 text-center">
      <h1 className="text-xl font-black text-slate-900 uppercase tracking-[0.4em] mb-24">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="w-full bg-white/60 backdrop-blur-xl rounded-[4rem] p-16 shadow-2xl shadow-emerald-200/50 mb-20">
        <h2 className="text-5xl font-black text-slate-800 uppercase leading-tight mb-8">{data.topic || 'ENTER YOUR TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full mt-auto mb-24">
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-4">Student</p>
          <p className="text-xl font-bold text-slate-800">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="bg-white/80 p-10 rounded-[2.5rem] shadow-lg border border-white">
          <p className="text-teal-500 font-black text-[10px] uppercase tracking-widest mb-4">Supervisor</p>
          <p className="text-xl font-bold text-slate-800">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 80. Academic Shield - Navy
export const AcademicShieldNavy: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-[#fcfcfc]">
    <div className="absolute top-0 left-0 w-full h-4 bg-slate-900" />
    <div className="absolute bottom-0 left-0 w-full h-4 bg-slate-900" />
    <div className="relative z-10 flex flex-col items-center h-full pt-24 px-24 text-center">
      <h1 className="text-2xl font-serif font-bold text-slate-900 uppercase tracking-tight mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight mb-12 uppercase">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-32 h-1 bg-slate-900 mx-auto mb-12" />
        <p className="text-lg font-serif italic text-slate-600">{data.subject || 'SUBJECT NAME'}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-20 mb-24 text-left">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Student Information</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Faculty Supervisor</p>
          <p className="text-xl font-serif font-bold text-slate-900">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 47. Creative Wave - Blue
export const CreativeWaveBlue: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute bottom-0 left-0 w-full h-64 bg-blue-600 transform skew-y-6 origin-bottom-left translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-2 bg-blue-600" />
      </div>
      <div className="mb-auto">
        <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">Assignment Submission</p>
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-auto pb-12 text-white">
        <div>
          <p className="text-[10px] font-black text-blue-200 uppercase mb-2">Student</p>
          <p className="text-2xl font-black uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-blue-200 uppercase mb-2">Supervisor</p>
          <p className="text-2xl font-black uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 48. Creative Wave - Orange
export const CreativeWaveOrange: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute bottom-0 left-0 w-full h-64 bg-orange-500 transform skew-y-6 origin-bottom-left translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-2 bg-orange-500" />
      </div>
      <div className="mb-auto">
        <p className="text-orange-500 font-black text-xs uppercase tracking-widest mb-4">Assignment Submission</p>
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-auto pb-12 text-white">
        <div>
          <p className="text-[10px] font-black text-orange-200 uppercase mb-2">Student</p>
          <p className="text-2xl font-black uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-orange-200 uppercase mb-2">Supervisor</p>
          <p className="text-2xl font-black uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 49. Professional Clean - Slate
export const ProfessionalCleanSlate: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-50">
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex justify-between items-start mb-32">
        <h1 className="text-sm font-black text-slate-900 uppercase tracking-widest">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase">{data.date || '11/12/2025'}</p>
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="flex gap-4 items-center">
          <div className="h-0.5 w-8 bg-slate-900" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-slate-200">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presented By</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presented To</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 50. Professional Clean - Indigo
export const ProfessionalCleanIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-indigo-50/30">
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="flex justify-between items-start mb-32">
        <h1 className="text-sm font-black text-indigo-600 uppercase tracking-widest">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-[10px] text-indigo-400 font-bold uppercase">{data.date || '11/12/2025'}</p>
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="flex gap-4 items-center">
          <div className="h-0.5 w-8 bg-indigo-600" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{data.subject || 'SUBJECT'}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-indigo-200">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Presented By</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Presented To</p>
          <p className="text-xl font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 51. Modern Minimal - Emerald
export const ModernMinimalEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600" />
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="mb-24">
        <h1 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-0.5 bg-emerald-600" />
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-slate-100">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Student</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supervisor</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 52. Modern Minimal - Amber
export const ModernMinimalAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-full h-1 bg-amber-600" />
    <div className="relative z-10 flex flex-col h-full p-24">
      <div className="mb-24">
        <h1 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
        <div className="w-12 h-0.5 bg-amber-600" />
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-16 pt-16 border-t border-slate-100">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Student</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.studentName || 'STUDENT NAME'}</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Supervisor</p>
          <p className="text-lg font-bold text-slate-900 uppercase">{data.teacherName || 'TEACHER NAME'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 53. Geometric Accent - Rose
export const GeometricAccentRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 transform rotate-45 translate-x-32 -translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-rose-600 font-bold text-xs uppercase tracking-widest">Academic Assignment</p>
      </div>
      <div className="w-full h-1 bg-slate-100 mb-20" />
      <div className="mb-auto">
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block bg-rose-600 text-white px-6 py-2 font-black uppercase text-sm">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted By</p>
          <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted To</p>
          <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 54. Geometric Accent - Sky
export const GeometricAccentSky: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 transform rotate-45 translate-x-32 -translate-y-32" />
    <div className="relative z-10 flex flex-col h-full p-20">
      <div className="mb-20">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{data.collegeName || 'COLLEGE NAME'}</h1>
        <p className="text-sky-600 font-bold text-xs uppercase tracking-widest">Academic Assignment</p>
      </div>
      <div className="w-full h-1 bg-slate-100 mb-20" />
      <div className="mb-auto">
        <h2 className="text-6xl font-black text-slate-900 uppercase leading-none mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block bg-sky-600 text-white px-6 py-2 font-black uppercase text-sm">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted By</p>
          <p className="text-xl font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submitted To</p>
          <p className="text-xl font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 55. Border Focus - Emerald
export const BorderFocusEmerald: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-12 border-4 border-emerald-600 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-24 text-center">
      <h1 className="text-xl font-black text-emerald-600 uppercase tracking-widest mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-emerald-300 font-black text-[10px] uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-16 h-1 bg-emerald-600 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-8 text-left mt-auto">
        <div className="border-l-2 border-emerald-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="border-l-2 border-emerald-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 56. Border Focus - Amber
export const BorderFocusAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute inset-12 border-4 border-amber-600 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center h-full p-24 text-center">
      <h1 className="text-xl font-black text-amber-600 uppercase tracking-widest mb-12">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-amber-300 font-black text-[10px] uppercase tracking-[0.5em] mb-8">Assignment</p>
        <h2 className="text-5xl font-black text-slate-900 uppercase leading-tight mb-8">{data.topic || 'TOPIC HERE'}</h2>
        <div className="w-16 h-1 bg-amber-600 mx-auto" />
      </div>
      <div className="w-full grid grid-cols-2 gap-8 text-left mt-auto">
        <div className="border-l-2 border-amber-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Student</p>
          <p className="text-lg font-bold text-slate-900">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="border-l-2 border-amber-600 pl-4">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Supervisor</p>
          <p className="text-lg font-bold text-slate-900">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 57. Sidebar Elegant - Indigo
export const SidebarElegantIndigo: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-24 h-full bg-indigo-600" />
    <div className="relative z-10 flex h-full ml-24 p-20 flex-col">
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-24">Academic Excellence</p>
      <div className="mb-auto">
        <h2 className="text-7xl font-black text-slate-900 uppercase leading-[0.8] tracking-tighter mb-12">{data.topic || 'TOPIC'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Submitted By</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Submitted To</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 58. Sidebar Elegant - Teal
export const SidebarElegantTeal: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    <div className="absolute top-0 left-0 w-24 h-full bg-teal-600" />
    <div className="relative z-10 flex h-full ml-24 p-20 flex-col">
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{data.collegeName || 'COLLEGE NAME'}</h1>
      <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-24">Academic Excellence</p>
      <div className="mb-auto">
        <h2 className="text-7xl font-black text-slate-900 uppercase leading-[0.8] tracking-tighter mb-12">{data.topic || 'TOPIC'}</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{data.subject || 'SUBJECT'} • {data.subjectCode || '000000'}</p>
      </div>
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <p className="text-[10px] font-black text-teal-600 uppercase mb-2">Submitted By</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.studentName || 'STUDENT'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-teal-600 uppercase mb-2">Submitted To</p>
          <p className="text-2xl font-black text-slate-900 uppercase">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 59. Tech Grid - Rose
export const TechGridRose: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-950">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#e11d48 1px, transparent 1px), linear-gradient(90deg, #e11d48 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-mono text-rose-500 tracking-[0.3em] mb-24 uppercase">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-rose-400/50 font-mono text-[10px] uppercase mb-4">SYSTEM.LOG_ID: {data.subjectCode || '000000'}</p>
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block px-4 py-1 border border-rose-500/30 rounded text-rose-400 font-mono text-xs">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-px bg-rose-500/20 border border-rose-500/20 rounded-lg overflow-hidden mt-auto">
        <div className="p-8 text-left bg-slate-950">
          <p className="text-rose-500 font-mono text-[10px] uppercase mb-2">STUDENT</p>
          <p className="text-xl font-bold text-white">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="p-8 text-left bg-slate-950">
          <p className="text-rose-500 font-mono text-[10px] uppercase mb-2">SUPERVISOR</p>
          <p className="text-xl font-bold text-white">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

// 60. Tech Grid - Amber
export const TechGridAmber: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper className="bg-slate-950">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="relative z-10 flex flex-col items-center h-full p-20 text-center">
      <h1 className="text-xl font-mono text-amber-500 tracking-[0.3em] mb-24 uppercase">{data.collegeName || 'COLLEGE NAME'}</h1>
      <div className="mb-auto">
        <p className="text-amber-400/50 font-mono text-[10px] uppercase mb-4">SYSTEM.LOG_ID: {data.subjectCode || '000000'}</p>
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-8">{data.topic || 'TOPIC'}</h2>
        <div className="inline-block px-4 py-1 border border-amber-500/30 rounded text-amber-400 font-mono text-xs">
          {data.subject || 'SUBJECT'}
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-px bg-amber-500/20 border border-amber-500/20 rounded-lg overflow-hidden mt-auto">
        <div className="p-8 text-left bg-slate-950">
          <p className="text-amber-500 font-mono text-[10px] uppercase mb-2">STUDENT</p>
          <p className="text-xl font-bold text-white">{data.studentName || 'STUDENT'}</p>
        </div>
        <div className="p-8 text-left bg-slate-950">
          <p className="text-amber-500 font-mono text-[10px] uppercase mb-2">SUPERVISOR</p>
          <p className="text-xl font-bold text-white">{data.teacherName || 'TEACHER'}</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);
// 81. Government College Style
export const GovernmentCollege: React.FC<TemplateProps> = ({ data }) => (
  <PageWrapper>
    {/* Decorative Elements - Using more compatible CSS shapes */}
    <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none overflow-hidden" style={{ backgroundImage: `radial-gradient(circle, #000000 1.5px, transparent 1.5px)`, backgroundSize: '12px 12px' }} />
    <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none overflow-hidden" style={{ backgroundImage: `radial-gradient(circle, #000000 1.5px, transparent 1.5px)`, backgroundSize: '12px 12px' }} />
    
    {/* Corner Triangles using borders for maximum compatibility */}
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[128px] border-l-[128px] border-l-transparent border-t-[#dc2626]" />
    <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[128px] border-r-[128px] border-r-transparent border-b-[#dc2626]" />

    <div className="relative z-10 w-full h-full flex flex-col items-center pt-4 px-12">
      {/* Logo Section */}
      <div className="w-32 h-32 mb-4 flex items-center justify-center">
        {data.logoUrl ? (
          <img src={data.logoUrl} alt="College Logo" className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-full bg-slate-50 flex items-center justify-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase">Logo Here</p>
          </div>
        )}
      </div>

      {/* Department Bar */}
      <div className="w-[90%] h-16 mb-8 relative flex items-center justify-center overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-emerald-400 to-emerald-500 transform -skew-x-[15deg]" />
        <h2 className="relative z-10 text-2xl font-black text-black uppercase tracking-tight">DEPARTMENT OF {data.department || 'ACCOUNTING'}</h2>
      </div>

      {/* Subject Details */}
      <div className="w-full px-16 text-left mb-8">
        <div className="flex text-xl font-black uppercase text-slate-900 mb-2">
          <div style={{ width: '200px' }}>DEPT. NAME</div>
          <div className="mr-4">:</div>
          <div className="flex-1">B.B.A OF {data.department || 'ACCOUNTING'}</div>
        </div>
        <div className="flex text-xl font-black uppercase text-slate-900 mb-2">
          <div style={{ width: '200px' }}>SUBJECT</div>
          <div className="mr-4">:</div>
          <div className="flex-1">{data.subject || 'PRINCIPLES OF ACCOUNTING'}</div>
        </div>
        <div className="flex text-xl font-black uppercase text-slate-900 mb-2">
          <div style={{ width: '200px' }}>SUBJECT CODE</div>
          <div className="mr-4">:</div>
          <div className="flex-1">{data.subjectCode || '212501'}</div>
        </div>
      </div>

      {/* Topic Box */}
      <div className="w-[90%] border-4 border-slate-300 rounded-bl-[3rem] p-6 text-left mb-12 min-h-[120px]">
        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">TOPIC:</h3>
        <p className="text-xl font-bold text-slate-800 break-words leading-tight">{data.topic || 'ENTER YOUR TOPIC HERE'}</p>
      </div>

      {/* Submission Section */}
      <div className="w-full flex relative mt-auto pb-8">
        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2">
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-black rotate-45" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black rotate-45" />
        </div>

        {/* Submitted By */}
        <div className="w-1/2 pr-8 text-left">
          <h4 className="text-2xl font-black text-slate-900 mb-8 underline decoration-4 underline-offset-8 uppercase">SUBMITTED BY:</h4>
          <div className="space-y-3">
            <div className="flex font-black text-lg uppercase mb-2">
              <div style={{ width: '100px' }}>NAME</div>
              <div className="mr-2">:</div>
              <div className="flex-1 font-serif lowercase capitalize">{data.studentName || 'AMDADUL ISLAM'}</div>
            </div>
            <div className="flex font-black text-lg uppercase mb-2">
              <div style={{ width: '100px' }}>ROLL NO</div>
              <div className="mr-2">:</div>
              <div className="flex-1">{data.rollNumber || '242125015'}</div>
            </div>
            <div className="flex font-black text-lg uppercase mb-2">
              <div style={{ width: '100px' }}>YEAR</div>
              <div className="mr-2">:</div>
              <div className="flex-1">{data.year || '1ST YEARS'}</div>
            </div>
            <div className="flex font-black text-lg uppercase mb-2">
              <div style={{ width: '100px' }}>SESSION</div>
              <div className="mr-2">:</div>
              <div className="flex-1">{data.session || '2024-25'}</div>
            </div>
            <div className="flex font-black text-lg uppercase mb-2">
              <div style={{ width: '100px' }}>DATE</div>
              <div className="mr-2">:</div>
              <div className="flex-1">{data.date || '11/12/2025'}</div>
            </div>
          </div>
        </div>

        {/* Submitted To */}
        <div className="w-1/2 pl-8 text-left">
          <h4 className="text-2xl font-black text-slate-900 mb-8 underline decoration-4 underline-offset-8 uppercase">SUBMITTED TO:</h4>
          <div className="pt-4">
            <p className="text-xl font-black uppercase mb-4">- {data.teacherName || 'MOLLA RAFIQUL ISLAM'}</p>
            <p className="text-sm font-black uppercase leading-tight mb-2">
              {data.teacherDesignation || 'ASSOCIATE PROFESSOR'} , DEPT. OF {data.department || 'ACCOUNTING'}
            </p>
            <p className="text-sm font-black uppercase leading-tight">
              {data.collegeName || 'GOVT. PRAFULLA CHANDRA COLLEGE, BAGERHAT'}
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

