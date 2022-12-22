// Table data
export interface Table {
    slNo: string;
    date: string;
    alloyName: string;
    source: string;
    weight: string;
}

// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
