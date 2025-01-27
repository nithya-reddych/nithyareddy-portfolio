import { useStore } from '../store/useStore';

export function Navigation() {
  const { setActiveSection, activeSection } = useStore();

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="rounded-full px-2 py-1">
        <div className="flex justify-between gap-40">
          {[
            { id: 'about', label: 'About Me' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'resume', label: 'Resume', onClick: handleResumeClick },
          ].map(({ id, label, onClick }) => (
            <button
              key={id}
              onClick={onClick || (() => setActiveSection(id))}
              className={`flex items-center gap-2 px-4 py-2 transition-colors ${
                activeSection === id ? 'text-rose' : 'text-black/70 hover:text-black'
              } font-vt323 whitespace-nowrap`}
            >
              <span className="text-4xl text-orange font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}