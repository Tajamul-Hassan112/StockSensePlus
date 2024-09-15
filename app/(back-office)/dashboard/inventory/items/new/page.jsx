
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

export default async function NewItem() {
  try {
    const baseUrl = "http://localhost:3000";

    console.log("Fetching categories...");
    const categories = await getData(`${baseUrl}/api/categories`);
    console.log("Categories:", categories);

    console.log("Fetching units...");
    const units = await getData(`${baseUrl}/api/units`);
    console.log("Units:", units);

    console.log("Fetching suppliers...");
    const suppliers = await getData(`${baseUrl}/api/suppliers`);
    console.log("Suppliers:", suppliers);

    console.log("Fetching brands...");
    const brands = await getData(`${baseUrl}/api/brands`);
    console.log("Brands:", brands);

    console.log("Fetching warehouses...");
    const warehouses = await getData(`${baseUrl}/api/warehouse`);
    console.log("Warehouses:", warehouses);

    // Map the data to include label and value for select inputs
    const mappedCategories = categories.map(category => ({
      label: category.title,
      value: category.id,
    }));

    const mappedUnits = units.map(unit => ({
      label: unit.title,
      value: unit.id,
    }));
    console.log("Fetched units:", units);

    const mappedSuppliers = suppliers.map(supplier => ({
      label: supplier.name,
      value: supplier.id,
    }));

    const mappedBrands = brands.map(brand => ({
      label: brand.title,
      value: brand.id,
    }));

    const mappedWarehouses = warehouses.map(warehouse => ({
      label: warehouse.title,
      value: warehouse.id,
    }));

    return (
      <div>
        <FormHeader title="New Item" href="/dashboard/inventory/" />
        <CreateItemForm
          categories={mappedCategories}
          units={mappedUnits}
          brands={mappedBrands}
          warehouses={mappedWarehouses}
          suppliers={mappedSuppliers}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}
