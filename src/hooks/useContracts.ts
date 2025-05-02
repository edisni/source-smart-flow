
import { useState } from 'react';
import { ContractType } from '@/types/contracts';

// Sample data for contracts - this would eventually come from an API
const contractsData = [
  {
    id: "CTR-2023-1245",
    title: "Annual Steel Supply Agreement",
    supplier: "Ace Materials Inc.",
    startDate: "Jan 1, 2025",
    endDate: "Dec 31, 2025",
    value: "$2.4M",
    status: "active"
  },
  {
    id: "CTR-2023-1242", 
    title: "Electronic Components Supply",
    supplier: "FastTech Electronics",
    startDate: "Feb 15, 2025",
    endDate: "Feb 14, 2026",
    value: "$1.8M",
    status: "active"
  },
  {
    id: "CTR-2023-1240",
    title: "Packaging Materials",
    supplier: "PackRight Inc.",
    startDate: "Mar 1, 2025",
    endDate: "Aug 31, 2025",
    value: "$650K",
    status: "expiring"
  },
  {
    id: "CTR-2023-1238",
    title: "Raw Polymers Supply Agreement",
    supplier: "PolymerTech",
    startDate: "Jan 1, 2025",
    endDate: "Jun 30, 2025",
    value: "$1.2M",
    status: "expiring"
  },
  {
    id: "CTR-2023-1235", 
    title: "Machine Parts Supply Q1-Q2",
    supplier: "MetalCorp Industries",
    startDate: "Jan 1, 2025",
    endDate: "Apr 30, 2025",
    value: "$780K",
    status: "expired"
  }
];

export const useContracts = () => {
  const [contracts, setContracts] = useState<ContractType[]>(contractsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Here we could implement actual filtering logic if needed
  };

  return {
    contracts,
    searchQuery,
    activeTab,
    setActiveTab,
    handleSearch
  };
};
