// PDF Export utility function
export const exportToPDF = () => {
  // Hide navigation and footer for printing
  const nav = document.querySelector('.fixed.top-0');
  const footer = document.querySelector('.fixed.bottom-0');
  const originalNavDisplay = nav?.style.display;
  const originalFooterDisplay = footer?.style.display;
  
  if (nav) nav.style.display = 'none';
  if (footer) footer.style.display = 'none';
  
  // Set up print styles
  const printStyles = `
    @media print {
      body { margin: 0; }
      .min-h-screen { min-height: 100vh; }
      .pt-16, .pt-20, .pb-16, .pb-20 { padding: 0 !important; }
      .p-4, .p-6, .p-8 { padding: 1rem !important; }
      .text-3xl { font-size: 1.875rem !important; }
      .text-4xl { font-size: 2.25rem !important; }
      .text-5xl { font-size: 3rem !important; }
      .text-6xl { font-size: 3.75rem !important; }
      .mb-4, .mb-6, .mb-8, .mb-12 { margin-bottom: 1rem !important; }
      .gap-4, .gap-6, .gap-8 { gap: 1rem !important; }
      * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = printStyles;
  document.head.appendChild(styleSheet);
  
  // Trigger print
  window.print();
  
  // Restore navigation and footer after printing
  setTimeout(() => {
    if (nav) nav.style.display = originalNavDisplay || '';
    if (footer) footer.style.display = originalFooterDisplay || '';
    document.head.removeChild(styleSheet);
  }, 1000);
}; 