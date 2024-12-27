import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar } from './components/Navbar';
import { AuthProvider } from './components/auth/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Hero } from './components/Hero';
import { FeaturedJobs } from './components/FeaturedJobs';
import { AuthModal } from './components/auth/AuthModal';
import { ChatWindow } from './components/messaging/ChatWindow';
import { ProfileCard } from './components/profile/ProfileCard';
import { JobPostForm } from './components/jobs/JobPostForm';
import { JobBidding } from './components/jobs/JobBidding';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <FeaturedJobs />
                </>
              } />
              <Route path="/login" element={<AuthModal mode="login" isOpen={true} onClose={() => {}} />} />
              <Route path="/register" element={<AuthModal mode="signup" isOpen={true} onClose={() => {}} />} />
              <Route path="/post-job" element={
                <ProtectedRoute roles={['client']}>
                  <JobPostForm />
                </ProtectedRoute>
              } />
              <Route path="/messages" element={
                <ProtectedRoute>
                  <ChatWindow />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfileCard
                    name="John Doe"
                    title="Senior Full Stack Developer"
                    rating={4.9}
                    location="San Francisco, CA"
                    hourlyRate="$85"
                    skills={["React", "Node.js", "Python", "AWS"]}
                    bio="Full stack developer with 8+ years of experience in building scalable applications."
                    avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}