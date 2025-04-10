import html2pdf from 'html2pdf.js';
import './DownloadButton.css';

const DownloadButton = () => {
  const handleDownload = () => {
    const resume = document.getElementById('resume');
    const options = {
      margin:       0.5,
      filename:     'Mohammad_Matin_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(resume).save();
  };

  return (
    <div className="download-container">
      <button onClick={handleDownload}>Download Resume (PDF)</button>
    </div>
  );
};

export default DownloadButton;
