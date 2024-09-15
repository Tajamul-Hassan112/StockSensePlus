"use client"
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Invoices() {
  const router = useRouter();
  
  const handleDownload = () => {
    // Update the URL to match the path to your file
    window.location.href = '/files/invoices.pdf'; 
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Invoices
      </Typography>
      <Typography variant="body1" paragraph>
        Access your invoices here. Click the button below to download the invoices.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download Invoices
      </Button>
    </Container>
  );
}
