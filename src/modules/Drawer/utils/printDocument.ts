import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const documentGenerator = async ( input:HTMLElement ) => {
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 20, 20, 200, 200);
    pdf.save("download.pdf");
}

export default documentGenerator;