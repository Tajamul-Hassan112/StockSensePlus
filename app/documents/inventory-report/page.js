"use client"
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function InventoryReport() {
  const router = useRouter();
  
  const handleDownload = () => {
    // Update the URL to match the path to your file
    window.location.href = '/files/inventory-report.pdf'; 
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Report
      </Typography>
      <Typography variant="body1" paragraph>
        Here is the detailed inventory report. Click the button below to download the report.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download Report
      </Button>
    </Container>
  );
}
