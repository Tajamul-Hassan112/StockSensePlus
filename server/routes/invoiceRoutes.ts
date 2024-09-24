import express from "express";
import {
  createInvoice,
  getInvoicesByOwner,
  getInvoiceById,
  getMonthlyStoreStats
} from "../controllers/invoiceController";

const InvoiceRoutes = express.Router();

// Create a new invoice (POST)
InvoiceRoutes.post("/", createInvoice);

// Get all invoices by owner (GET)
InvoiceRoutes.get("/owner/:owner", getInvoicesByOwner);

// Get a specific invoice by ID (GET)
InvoiceRoutes.get("/:id", getInvoiceById);

// Get monthly store statistics (GET)
InvoiceRoutes.get("/stats/:owner", getMonthlyStoreStats); // New route for monthly stats

export default InvoiceRoutes;