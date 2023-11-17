export interface Product {
    id: number;
    type: "carbon" | "plastic bottles" | "trees";
    amount: number;  // Changed to number as there is no int variable type in Typescript
    action: "collects" | "plants" | "offsets";
    active: boolean;
    linked: boolean;
    selectedColor: "white" | "black" | "blue" | "green" | "beige";
  }