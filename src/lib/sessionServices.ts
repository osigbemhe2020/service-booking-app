export type SessionService = {
  title: string;
  category: "Consulting" | "Design" | "Development" | "Repair" | "Training" | "Others";
  cost: number;
  duration: "15 mins" | "30 mins" | "45 mins" | "1 hour" | "2 hours" | "3 hours";
};

const sessionServicesInternal: SessionService[] = [];

export const getServices = () => sessionServicesInternal;

export const addService = (service: SessionService) => {
  sessionServicesInternal.push(service);
};
