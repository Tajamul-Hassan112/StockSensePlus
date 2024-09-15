"use client"
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function PurchaseOrders() {
  const router = useRouter();
  
  const handleDownload = () => {
    // Update the URL to match the path to your file
    window.location.href = '/files/purchase-orders.docx'; 
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Purchase Orders
      </Typography>
      <Typography variant="body1" paragraph>
        Here are your purchase orders. Click the button below to download the document.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download Purchase Orders
      </Button>
    </Container>
  );
}
