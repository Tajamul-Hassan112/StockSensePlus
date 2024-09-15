"use client"
import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from 'framer-motion';

const documents = [
  { id: 1, title: 'Inventory Report', description: 'Detailed report of your inventory status and movements.', link: '/documents/inventory-report' },
  { id: 2, title: 'Purchase Orders', description: 'View and manage all your purchase orders and related documents.', link: '/documents/purchase-orders' },
  { id: 3, title: 'Invoices', description: 'View and download your invoices for all transactions.', link: '/documents/invoices' },
];

export default function DocumentsPage() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Documents Management
      </Typography>
      <Typography variant="body1" paragraph align="center" sx={{ mb: 4, maxWidth: '600px' }}>
        Manage your documents related to inventory, purchases, invoices, and more. Use the buttons below to interact with your documents.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {documents.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card variant="outlined" sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    {doc.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doc.description}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" href={doc.link} sx={{ m: 2 }}>
                  View Document
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
